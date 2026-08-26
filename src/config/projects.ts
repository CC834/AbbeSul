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

const projectAsset = (fileName: string) =>
  `${import.meta.env.BASE_URL}projects/${fileName}`

export const projects: readonly Project[] = [
  {
    id: 'relational-lineage-explorer',
    title: 'Database Relationship Explorer',
    description:
      'A full-stack developer tool that connects to SQLite or PostgreSQL and visualizes how any record is linked to related data across an unfamiliar database.',
    impact:
      'Makes undocumented databases easier to investigate through read-only graph traversal, evidence-backed relationships, privacy redaction, and snapshot comparison.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'SQL', 'PostgreSQL'],
    accent: 'blue',
    featured: true,
    process: {
      motivation:
        'This project grew from database-investigation challenges I encountered while contributing to a collaborative industrial MSc thesis. I wanted to generalize that workflow without exposing any private schema or data.',
      challenge:
        'Undocumented relationships can be incomplete or ambiguous, so inferred links must remain useful without being presented as proof. The tool also needed strict read-only and privacy boundaries.',
      approach:
        'I combined bidirectional foreign-key traversal with opt-in same-column inference, explicit evidence labels, traversal budgets, secret-column redaction, and synthetic snapshot replay.',
      learned:
        'Investigation tools are most trustworthy when uncertainty, safety limits, and evidence provenance are visible instead of hidden behind a polished graph.',
    },
    image: {
      src: projectAsset('relational-lineage-explorer.png'),
      alt: 'Relational Lineage Explorer showing a synthetic database record graph and snapshot timeline',
    },
    github: 'https://github.com/CC834/relational-lineage-explorer',
    demo: 'https://cc834.github.io/relational-lineage-explorer/',
  },
  {
    id: 'flowguard-opencl',
    title: 'FlowGuard: Drone Collision Avoidance',
    description:
      'A real-time drone collision-avoidance system that splits camera-image processing across the CPU and GPU so limited edge hardware can react before impact.',
    impact:
      'Implemented CPU-only, GPU-only, fixed-split, and adaptive OpenCL schedulers to measure how each strategy handles frame deadlines in repeatable Blender flights.',
    technologies: ['C++17', 'Computer Vision', 'OpenCL', 'GPU Computing', 'OpenCV'],
    accent: 'pink',
    process: {
      motivation:
        'I wanted to answer one question: can a drone infer an approaching collision from ordinary camera motion, react in time, and divide the work effectively across the limited CPU and GPU of an edge computer?',
      challenge:
        'The perception workload had to meet decision deadlines on constrained hardware without using simulator ground truth. GPU acceleration also carries transfer and synchronization costs, so simply moving every stage to the GPU was not a reliable solution.',
      approach:
        'I divided the C++ and OpenCL image pipeline into measurable stages, then compared CPU-only, GPU-only, fixed-split, and adaptive scheduling while the simulated drone used optical motion and time-to-collision risk to steer or brake.',
      learned:
        'Transfer, synchronization, and failure behavior matter as much as kernel speed; heterogeneous scheduling has to be measured honestly for the actual workload and device.',
    },
    image: {
      src: projectAsset('flowguard-opencl.png'),
      alt: 'FlowGuard virtual-hardware simulation showing optical-flow vectors, detected obstacles, and throttling telemetry',
    },
    github: 'https://github.com/CC834/flowguard-opencl',
  },
  {
    id: 'lidar-perception',
    title: 'LiDAR Object Tracking & Classification',
    description:
      'A Python perception pipeline that turns raw scans from a low-cost LiDAR into detected and tracked objects, then tests whether their material can be classified without intensity data.',
    impact:
      'Built feature engineering, DBSCAN clustering, Kalman tracking, and random-forest evaluation; achieved 57.5% cross-distance accuracy versus a 33.4% baseline.',
    technologies: ['Python', 'Machine Learning', 'scikit-learn', 'Data Analysis', 'Object Tracking'],
    accent: 'green',
    process: {
      motivation:
        'I was curious whether a low-cost LiDAR without a return-intensity channel still contained enough indirect surface-response information to separate common materials.',
      challenge:
        'The classifier could not use reflectivity or simply memorize target distance, and the small physical dataset required an evaluation design that exposed generalization limits.',
      approach:
        'I recorded three materials at three standoff distances, engineered robust return-rate and range-variation features, excluded median range, and used leave-one-distance-out validation.',
      learned:
        'The signal is promising but not conclusive: glass was distinctive, while cardboard and clothing often overlapped. More sessions, samples, and controlled conditions are necessary.',
    },
    github: 'https://github.com/CC834/lidar-perception',
  },
  {
    id: 'personal-gym',
    title: 'Personal Gym: Self-Hosted Workout Tracker',
    description:
      'A private, self-hosted workout app for building weekly programs, logging every set, tracking strength and body weight, and finding exercises through an interactive muscle map.',
    impact:
      'Designed, tested, and deployed as a real home-server service with a Node.js REST API, SQLite persistence, Tailscale authentication, responsive mobile workflows, and locally hosted exercise media.',
    technologies: ['Node.js', 'JavaScript', 'SQLite', 'REST API', 'React', 'Automated Testing'],
    accent: 'blue',
    process: {
      motivation:
        'I built Personal Gym because I wanted one quiet, private place for my weekly plan, exercise guidance, set logging, progress, and body weight without advertisements or a cloud account.',
      challenge:
        'It needed to feel fast on a phone during a workout and remain useful on desktop, while protecting private data, handling workout state correctly, and serving licensed exercise media without a runtime dependency on an external API.',
      approach:
        'I built a Node.js HTTP and REST backend with a relational SQLite model, signed sessions, CSRF protection, and a Tailscale identity boundary. The responsive JavaScript interface uses a focused React island for interactive muscle selection and runs as a hardened systemd service.',
      learned:
        'Building software for my own repeated use made small workflow details, reliable state transitions, privacy boundaries, data portability, and deployment discipline just as important as the visible feature set.',
    },
    image: {
      src: projectAsset('personal-gym.png'),
      alt: 'Personal Gym workout overview showing primary and supporting muscles on front-and-back anatomy models',
    },
    github: 'https://github.com/CC834/personal-gym',
  },
]
