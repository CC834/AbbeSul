export type ProjectAccent = 'blue' | 'green' | 'pink'

export type ProjectProcess = {
  motivation?: string
  challenge?: string
  approach?: string
  learned?: string
}

export type Project = {
  id: string
  title: string
  description: string
  technologies: readonly string[]
  accent: ProjectAccent
  featured?: boolean
  impact?: string
  process?: ProjectProcess
  image?: {
    src: string
    alt: string
  }
  caseStudy?: string
  github?: string
  demo?: string
}

export const projects: readonly Project[] = [
  {
    id: 'warehouse-forecasting',
    title: 'Warehouse Forecasting',
    description:
      'A forecasting workspace that turns historical warehouse demand into clear planning signals.',
    impact:
      'Designed to make staffing and capacity decisions easier to understand and act on.',
    process: {
      motivation:
        'I started this project after seeing how difficult it can be to plan warehouse capacity from disconnected historical reports.',
      challenge:
        'The hardest part was turning noisy demand data into forecasts that remained useful and understandable to non-technical users.',
      approach:
        'I separated the forecasting pipeline from the interface, then designed the dashboard around a few decisions instead of every available metric.',
      learned:
        'A strong model is only valuable when people can understand its output and confidently use it in their daily planning.',
    },
    technologies: ['Python', 'Pandas', 'Machine Learning', 'React'],
    accent: 'green',
    featured: true,
    image: {
      src: '/projects/warehouse-dashboard.svg',
      alt: 'Mock warehouse forecasting dashboard with a trend chart and summary panels',
    },
  },
  {
    id: 'portfolio-system',
    title: 'Portfolio System',
    description:
      'A responsive personal site built around reusable components, typed content, and accessible interactions.',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    accent: 'pink',
    process: {
      motivation:
        'I wanted one focused place to present my work without relying on a generic portfolio template.',
      challenge:
        'The main challenge was creating a distinct visual identity while keeping the code easy to extend as new projects are added.',
      approach:
        'I built the interface from small typed components, centralized public information in configuration files, and kept styles scoped with CSS Modules.',
      learned:
        'Simple interfaces still require careful decisions about spacing, hierarchy, accessibility, and how content will evolve over time.',
    },
    github: 'https://github.com/CC834/AbbeSul',
  },
  {
    id: 'market-dashboard',
    title: 'Market Analytics',
    description:
      'A real-time dashboard concept for exploring market activity, positions, and strategy performance.',
    impact: 'Brings live signals and historical context into one focused interface.',
    technologies: ['TypeScript', 'WebSockets', 'Data Visualization'],
    accent: 'blue',
    process: {
      motivation:
        'I wanted to explore how fast-moving market information could be presented without overwhelming the person using it.',
      challenge:
        'Live updates, historical context, and strategy results all compete for attention and can quickly make a dashboard feel noisy.',
      approach:
        'I grouped information by decision, prioritized the most time-sensitive signals, and treated secondary analytics as progressive detail.',
      learned:
        'Real-time interfaces need a clear information hierarchy just as much as they need reliable data and low-latency updates.',
    },
  },
]
