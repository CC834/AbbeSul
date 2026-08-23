import type { ReactNode } from 'react'
import styles from './ContentSection.module.css'

type ContentSectionProps = {
  children?: ReactNode
  id: string
  title: string
}

function ContentSection({ children, id, title }: ContentSectionProps) {
  return (
    <section
      className={styles.contentSection}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  )
}

export default ContentSection
