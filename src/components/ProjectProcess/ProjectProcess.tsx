import { useState } from 'react'
import type { Project } from '../../config/projects'
import styles from './ProjectProcess.module.css'

type ProjectProcessProps = {
  featured?: boolean
  id: string
  process: NonNullable<Project['process']>
}

function ProjectProcess({ featured = false, id, process }: ProjectProcessProps) {
  const [open, setOpen] = useState(false)
  const contentId = `${id}-content`
  const sections = [
    { label: 'Why', value: process.motivation },
    { label: 'Challenge', value: process.challenge },
    { label: 'Approach', value: process.approach },
    { label: 'What I learned', value: process.learned },
  ].filter(
    (section): section is { label: string; value: string } =>
      Boolean(section.value?.trim()),
  )
  const className = [styles.process, featured ? styles.featured : '']
    .filter(Boolean)
    .join(' ')

  if (sections.length === 0) {
    return null
  }

  return (
    <div className={className} data-open={open}>
      <button
        className={styles.trigger}
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span>Behind the build</span>
        <span className={styles.indicator} aria-hidden="true" />
      </button>

      <div
        className={styles.reveal}
        id={contentId}
        aria-hidden={!open}
      >
        <div className={styles.revealClip}>
          <div className={styles.content}>
            {sections.map((section) => (
              <div key={section.label}>
                <h4>{section.label}</h4>
                <p>{section.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectProcess
