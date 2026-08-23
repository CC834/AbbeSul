import type { ReactNode, SVGProps } from 'react'

export type IconName =
  | 'chevron'
  | 'folder'
  | 'ghost'
  | 'message'
  | 'moon'
  | 'sun'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
}

const paths: Record<IconName, ReactNode> = {
  folder: (
    <>
      <path d="M3.5 6.5h5l2-2h3.25a2 2 0 0 1 2 2v1" />
      <path d="M3.5 6.5v9a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2" />
    </>
  ),
  ghost: (
    <>
      <path d="M4.5 17.5V9a6.5 6.5 0 0 1 13 0v8.5l-2.6-1.7-2.1 1.7-2.3-1.7-2.2 1.7-1.9-1.7-1.9 1.7Z" />
      <path d="M8 9h.01M14 9h.01" />
    </>
  ),
  message: (
    <>
      <path d="M5 4.5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-4 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
      <path d="M7 8.5h8M7 11.5h5" />
    </>
  ),
  chevron: <path d="m6 9 5 5 5-5" />,
  sun: (
    <>
      <circle cx="11" cy="11" r="3.5" />
      <path d="M11 2v2M11 18v2M2 11h2M18 11h2M4.6 4.6 6 6M16 16l1.4 1.4M17.4 4.6 16 6M6 16l-1.4 1.4" />
    </>
  ),
  moon: <path d="M18 14.2A7.4 7.4 0 0 1 7.8 4 7.5 7.5 0 1 0 18 14.2Z" />,
}

function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 22 22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}

export default Icon
