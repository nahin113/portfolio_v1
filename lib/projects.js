export const projects = [
  {
    slug: "skillswap",
    title: "SkillSwap",
    description:
      "A full-stack Freelance Micro-Task Platform where clients post tasks, freelancers submit proposals, and payments are processed securely via Stripe Checkout with role-based dashboards.",
    longDescription:
      "SkillSwap is a freelance marketplace built for fast, one-time micro-tasks — a streamlined alternative to Fiverr or Freelancer.com. Clients post tasks with budgets and deadlines, freelancers browse and apply with competitive proposals, and the platform enforces Stripe payment before work begins. It features three fully separated role-based dashboards for Clients, Freelancers, and Admins, JWT authentication stored in HTTPOnly cookies, server-side pagination, real-time search and category filtering, and a complete Stripe Checkout payment flow with session verification.",
    tags: ["Next.js", "Node.js", "MongoDB", "BetterAuth", "JWT", "Stripe", "Tailwind CSS", "HeroUI", "Framer Motion", "Google OAuth", "Recharts"],
    liveLink: "https://skillswap-one-vert.vercel.app",
    githubClient: "https://github.com/nahin113/skillswap",
    githubServer: "https://github.com/nahin113/skillswap-server",
    gradient: "from-emerald-400 to-teal-600",
    img: '/skillswap.png',
    challenges: [
      "Implementing secure Stripe Checkout session verification on the backend before updating task and proposal status in MongoDB to prevent payment bypass exploits.",
      "Building role-based middleware guards in Next.js App Router that correctly redirect unauthenticated users to login and role-mismatched users to a forbidden page without exposing dashboard content."
    ],
    futurePlans: [
      "Adding real-time proposal status notifications using WebSockets so freelancers are instantly alerted when a client accepts or rejects their application.",
      "Building a freelancer verification badge system managed by admins to highlight trusted and high-performing platform members."
    ]
  },
  {
    slug: "petora",
    title: "Petora",
    description:
      "A full-stack Pet Adoption Platform where users can explore pets, view detailed profiles, submit adoption requests, and manage listings through a personalized dashboard with secure authentication.",
    longDescription:
      "Petora is a full-featured pet adoption marketplace built to connect animal shelters and independent rescuers with loving adopters. The platform allows rescue organizations to easily list and categorize pets while prospective owners can search, filter, and apply for adoption. It features secure JWT authentication, rich responsive dashboards for both rescuers and adopters, and automated status emails. The frontend is powered by Next.js and styled using HeroUI.",
    tags: ["Next.js", "Node.js", "MongoDB", "BetterAuth", "JWT", "Tailwind CSS", "HeroUI", "Framer Motion", "Google OAuth"],
    liveLink: "https://petora-client.vercel.app",
    githubClient: "https://github.com/nahin113/Petora-A-Full-Stack-Pet-Adoption-Platform",
    gradient: "from-rose-400 to-pink-600",
    img : '/petora.png',
    challenges: [
      "Implementing stateful form validation for nested pet health status fields across multi-step adoption application modals.",
      "Synchronizing image uploads with reliable public CDN storage while maintaining sub-second feedback on progress bars."
    ],
    futurePlans: [
      "Integrating direct chat messaging using socket connections between shelter managers and applicants.",
      "Adding automated geolocation features to suggest adoptable pets within a specific radius of the user's zip code."
    ]
  },
  {
    slug: "roamly",
    title: "Roamly",
    description:
      "A full-stack Travel Package Booking Platform where users can browse destinations, manage travel packages, and book trips seamlessly with Google OAuth and JWT-secured routes.",
    longDescription:
      "Roamly is a modern e-commerce web platform designed for local travel agencies to showcase and manage tour packages, and for adventurers to book dream vacations. It integrates Google OAuth authentication alongside secure session state, permitting users to securely purchase itineraries, review past journeys, and manage active reservations in real-time.",
    tags: ["Next.js", "MongoDB", "BetterAuth", "JWT", "Tailwind CSS", "HeroUI", "Google OAuth"],
    liveLink: "https://roamly-lake.vercel.app",
    githubClient: "https://github.com/nahin113/roamly",
    gradient: "from-sky-400 to-blue-600",
    img : '/roamly.png',
    challenges: [
      "Handling concurrent tour reservation limits safely in MongoDB without race conditions on highly popular seasonal deals.",
      "Structuring secure OAuth authorization redirects without losing the user's booking history context."
    ],
    futurePlans: [
      "Adding secure credit card payment gateways using official Stripe Checkout widgets.",
      "Enabling custom package builder tools where travelers can mix and match hotels, transport, and excursions."
    ]
  },
  {
    slug: "nexlearn",
    title: "NexLearn",
    description:
      "A full-featured Online Learning Platform empowering learners to discover, explore, and enroll in skill-based courses with protected routes, instructor profiles, and profile management.",
    longDescription:
      "NexLearn is a premium online education system built to empower instructors and students. Teachers construct comprehensive course syllabus steps with video resources, while students purchase access, track lecture completeness progress, and receive customized achievement metrics.",
    tags: ["Next.js", "BetterAuth", "Tailwind CSS", "DaisyUI", "Google OAuth", "Swiper.js"],
    liveLink: "https://nexlearn-livid.vercel.app",
    githubClient: "https://github.com/nahin113/NexLearn",
    gradient: "from-violet-400 to-purple-600",
    img : '/nexlearn.png',
    challenges: [
      "Optimizing dynamic swiper carousels to prevent cumulative layout shift (CLS) during server-side initial rendering.",
      "Constructing protected route middleware guards that correctly differentiate between course creators and learners."
    ],
    futurePlans: [
      "Integrating dynamic certificates using automatic PDF rendering templates upon course graduation.",
      "Building interactive student-to-teacher homework boards for active feedback cycles."
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
