#!/usr/bin/env bash

set -euo pipefail

overleaf_read_url='https://www.overleaf.com/read/mztfnskxcgfh'
overleaf_token_hash='#520802'
cv_output_path='public/cv/abbe-sulayman-cv.pdf'
overleaf_temp_dir=$(mktemp -d)

cleanup_overleaf_temp() {
  rm -rf "$overleaf_temp_dir"
}

trap cleanup_overleaf_temp EXIT

cookie_jar="$overleaf_temp_dir/cookies.txt"
access_page="$overleaf_temp_dir/access.html"
project_page="$overleaf_temp_dir/project.html"
downloaded_pdf="$overleaf_temp_dir/abbe-sulayman-cv.pdf"

curl --fail --silent --show-error \
  --cookie-jar "$cookie_jar" \
  "$overleaf_read_url" \
  --output "$access_page"

access_csrf=$(sed -n \
  's/.*<meta name="ol-csrfToken" content="\([^"]*\)".*/\1/p' \
  "$access_page")

if [[ -z "$access_csrf" ]]; then
  echo 'Unable to read the Overleaf access token.' >&2
  exit 1
fi

grant_response=$(curl --fail --silent --show-error \
  --cookie "$cookie_jar" \
  --cookie-jar "$cookie_jar" \
  --header 'content-type: application/json' \
  --header "x-csrf-token: $access_csrf" \
  --data "{\"confirmedByUser\":false,\"tokenHashPrefix\":\"$overleaf_token_hash\"}" \
  "$overleaf_read_url/grant")

project_path=$(jq --exit-status --raw-output '.redirect' <<<"$grant_response")
project_id=${project_path##*/}

curl --fail --silent --show-error \
  --cookie "$cookie_jar" \
  --cookie-jar "$cookie_jar" \
  "https://www.overleaf.com$project_path" \
  --output "$project_page"

project_csrf=$(sed -n \
  's/.*<meta name="ol-csrfToken" content="\([^"]*\)".*/\1/p' \
  "$project_page")

if [[ -z "$project_csrf" ]]; then
  echo 'Unable to read the Overleaf project token.' >&2
  exit 1
fi

compile_response=$(curl --fail --silent --show-error \
  --cookie "$cookie_jar" \
  --cookie-jar "$cookie_jar" \
  --header 'content-type: application/json' \
  --header "x-csrf-token: $project_csrf" \
  --data '{"check":"silent","draft":false,"incrementalCompilesEnabled":false}' \
  "https://www.overleaf.com/project/$project_id/compile")

compile_status=$(jq --exit-status --raw-output '.status' <<<"$compile_response")

if [[ "$compile_status" != 'success' ]]; then
  echo "Overleaf compilation failed with status: $compile_status" >&2
  exit 1
fi

pdf_path=$(jq --exit-status --raw-output \
  '.outputFiles[] | select(.path == "output.pdf") | .url' \
  <<<"$compile_response")
pdf_domain=$(jq --exit-status --raw-output '.pdfDownloadDomain' <<<"$compile_response")
compile_group=$(jq --exit-status --raw-output '.compileGroup' <<<"$compile_response")
clsi_server_id=$(jq --exit-status --raw-output '.clsiServerId' <<<"$compile_response")

curl --fail --silent --show-error --location --get \
  --data-urlencode "compileGroup=$compile_group" \
  --data-urlencode "clsiserverid=$clsi_server_id" \
  "$pdf_domain$pdf_path" \
  --output "$downloaded_pdf"

if [[ $(head -c 4 "$downloaded_pdf") != '%PDF' ]]; then
  echo 'The downloaded Overleaf output is not a PDF.' >&2
  exit 1
fi

mkdir -p "$(dirname "$cv_output_path")"
mv "$downloaded_pdf" "$cv_output_path"

echo "Updated $cv_output_path from Overleaf."
