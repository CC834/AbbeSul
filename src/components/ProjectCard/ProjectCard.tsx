import type { Project, ProjectAccent } from '../../config/projects'
import ProjectProcess from '../ProjectProcess/ProjectProcess'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  index: number
  project: Project
}

const accentClasses: Record<ProjectAccent, string> = {
  blue: styles.blue,
  green: styles.green,
  pink: styles.pink,
}

function ProjectCard({ index, project }: ProjectCardProps) {
  const hasActions = Boolean(project.caseStudy || project.github || project.demo)
  const cardClassName = [
    styles.card,
    accentClasses[project.accent],
    project.featured ? styles.featured : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={cardClassName}>
      <div className={styles.preview}>
        {project.image ? (
          <img
            className={styles.previewImage}
            src={project.image.src}
            alt={project.image.alt}
          />
        ) : (
          <div className={styles.previewFallback} aria-hidden="true">
            <span className={styles.previewNumber}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={styles.previewLabel}>{project.title}</span>
            <span className={styles.previewCursor}>_</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div>
          <p className={styles.eyebrow}>
            {project.featured ? 'Featured project' : `Project ${index + 1}`}
          </p>
          <h3>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          {project.impact && (
            <p className={styles.impact}>
              <span>Outcome:</span> {project.impact}
            </p>
          )}
        </div>

        {project.technologies.length > 0 && (
          <ul className={styles.technologies} aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}

        {hasActions && (
          <div className={styles.actions}>
            {project.caseStudy && (
              <a href={project.caseStudy}>Case study</a>
            )}

            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}

            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live demo ↗
              </a>
            )}
          </div>
        )}
      </div>

      {project.process && (
        <ProjectProcess
          id={`${project.id}-process`}
          process={project.process}
          featured={project.featured}
        />
      )}
    </article>
  )
}

export default ProjectCard
