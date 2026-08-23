import { projects } from '../../config/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-title">
      <div className={styles.heading}>
        <h2 id="projects-title">Projects</h2>
        <p>A selection of things I&apos;ve designed, built, and explored.</p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
