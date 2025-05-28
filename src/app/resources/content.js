import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Girivardhana",
  lastName: "Reddiar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "reddiarg@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the intersection of
      data, engineering and analytics.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/girivardhana-reddiar/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ReddiarG",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Ingestion to Insights. Pipelines to Predictions.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">RAG - Chat Interface</strong></>,
    href: "/work/04-rag-chat-interface",
  },
  subline: (
    <>
      I'm Girivardhana, a data enthusiast with expertise in building scalable, cloud-native solutions across diverse industries. 
      Passionate about using data to make an impact and explore new frontiers.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `More about ${person.firstName}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        What excites me the most is the intersection of data, systems, and complex challenges. 
        I enjoy taking on ambiguous problems, breaking them down, and building thoughful data-driven solutions that have an impact.
        <br></br>
        <br></br>
        I've worked in data engineering roles at a technology consulting firm, building and deploying scalable cloud-native data 
        and analytics solutions for clients across diverse domains - Cybersecurity, Finance, Human Resources, Sports and Entertainment.
        <br></br>
        <br></br>
        Currently pursuing a Master's program in Data Science, where I'm deepening my knowledge in Statistical Modeling, Machine Learning 
        and AI. I apply what I learn through academic and personal projects.
        <br></br>
        <br></br>
        With a strong foundation in data engineering, I'm looking to expand my expertise into data science and machine learning.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Quantiphi Inc.",
        timeframe: "2023 - 2024",
        role: "Senior Data Engineer",
        achievements: [
          <>
            Spearheaded design and implementation of a highly scalable data analytics platform for a sports venture, 
            resulting in an exponential increase in analyst productivity and 70% cloud cost reduction.
          </>,
          <>
            Implemented a multi-layered enterprise warehouse solution integrating 50+ tenant databases; enabling automated dashboards
            for talent acquisition analytics.
          </>,
          <>
            Assessed a streaming data pipeline for a cybersecurity firm experiencing performance issues. 
            Identified immediate fixes to significantly improve throughput and assisted on a future-state architecture.
          </>,
          <>
            Mentored interns; conducted technical interviews; led internal sessions to improve engineering velocity across teams.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Quantiphi Inc.",
        timeframe: "2021 - 2023",
        role: "Data Engineer",
        achievements: [
          <>
            Developed cloud-agnostic migration pipeline for an NFT-based startup, successfully migrating 500+ GB of historical data
            while minimizing long-term storage costs.
          </>,
          <>
            Implemented near real-time log preprocessing framework for a financial threat detection pipeline, reducing manual investigation
            and ingestion delays by over 80%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "MS, Data Science",
        description:
          <>
            University of Massachusetts, Dartmouth
            <br></br>
            Sept 2024 - May 2026
            <br></br>
            GPA: 4.0 / 4.0
          </>,
      },
      {
        name: "BTech, Computer Engineering",
        description: 
          <>
            NMIMS University, Mumbai
            <br></br>
            July 2017 - Apr 2021
          </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming",
        skill_badges: [
          "Python", "R", "SQL", "C/C++", "PySpark"
        ]
      },
      {
        title: "Data Science & ML",
        skill_badges: [
          "Pandas", "NumPy", "Matplotlib", "Scikit Learn", "PyTorch"
        ]
      },
      {
        title: "Databases",
        skill_badges: [
          "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Chroma", "FAISS"
        ]
      },
      {
        title: "Cloud & DevOps",
        skill_badges: [
          "AWS (Certified Developer & SAA)", "Git", "Docker"
        ]
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
