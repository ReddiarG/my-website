"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react"
import ProjectCard from "@/components/project-card"
import InsightCard from "@/components/insight-card"
import ContactButton from "@/components/contact-button"
import SpaceBackground from "@/components/space-background"
import LeftNavigation from "@/components/left-navigation"
import TypingAnimation from "@/components/typing-animation"
import SkillBadge from "@/components/skill-badge"
import ExpandedCard from "@/components/expanded-card"
import { useInView } from "react-intersection-observer"

// Import content from dedicated file
import {
  skills,
  jobTitles,
  projects,
  insights,
  socialLinks,
  personalInfo,
  navigationSections,
  type Project,
  type Insight,
} from "@/lib/content"

// Types for expandable cards
interface ExpandedContent {
  type: "project" | "insight"
  title: string
  content: React.ReactNode
  image: string
  technologies?: string[]
  links?: {
    github?: string
    demo?: string
  }
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [scrolling, setScrolling] = useState(false)
  const sectionsRef = useRef<HTMLElement[]>([])
  const [expandedCard, setExpandedCard] = useState<ExpandedContent | null>(null)

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      setScrolling(true)
      section.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        setScrolling(false)
        setActiveSection(sectionId)
      }, 1000)
    }
  }

  // Handle card expansion
  const handleExpandProject = (project: Project) => {
    setExpandedCard({
      type: "project",
      title: project.title,
      content: project.expandedContent,
      image: project.image,
      technologies: project.technologies,
      links: {
        github: project.githubUrl,
        demo: project.demoUrl,
      },
    })
  }

  const handleExpandInsight = (insight: Insight) => {
    setExpandedCard({
      type: "insight",
      title: insight.title,
      content: insight.expandedContent,
      image: insight.image,
    })
  }

  const handleCloseExpanded = () => {
    setExpandedCard(null)
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return

      const currentPosition = window.scrollY + window.innerHeight / 3

      sectionsRef.current.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolling])

  // Store section refs
  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll("section"))
  }, [])

  // Progressive loading with IntersectionObserver
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [insightsRef, insightsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Space Background */}
      <SpaceBackground />

      {/* Left Navigation */}
      <LeftNavigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        sections={navigationSections.map((section) => section.id)}
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="about" ref={aboutRef} className="min-h-screen flex items-center justify-center px-4 py-20">
          <div
            className={`container max-w-5xl transition-opacity duration-1000 ease-in-out ${
              aboutInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold mb-2 text-white">{personalInfo.name}</h1>
                <div className="h-8 mb-6">
                  <TypingAnimation phrases={jobTitles} />
                </div>

                <p className="text-gray-200 mb-8">{personalInfo.bio}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {skills.map((skill, index) => (
                    <SkillBadge key={index} name={skill.name} color={skill.color} />
                  ))}
                </div>

                <div className="flex justify-center space-x-4 mb-12">
                  <ContactButton icon={<Github className="w-5 h-5" />} href={socialLinks.github} label="GitHub" />
                  <ContactButton icon={<Linkedin className="w-5 h-5" />} href={socialLinks.linkedin} label="LinkedIn" />
                  <ContactButton icon={<Mail className="w-5 h-5" />} href={socialLinks.email} label="Email" />
                </div>

                <a
                  href={socialLinks.resume}
                  download
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors text-lg font-medium"
                >
                  <FileText className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Scroll to projects"
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={projectsRef}
          className="min-h-screen flex items-center px-4 py-20 bg-black/50 backdrop-blur-sm"
        >
          <div
            className={`container mx-auto max-w-5xl transition-opacity duration-1000 ease-in-out ${
              projectsInView ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-white text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                  onClick={() => handleExpandProject(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" ref={insightsRef} className="min-h-screen flex items-center px-4 py-20">
          <div
            className={`container mx-auto max-w-5xl transition-opacity duration-1000 ease-in-out ${
              insightsInView ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-white text-center">Thoughts & Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {insights.map((insight) => (
                <InsightCard
                  key={insight.id}
                  title={insight.title}
                  summary={insight.summary}
                  onClick={() => handleExpandInsight(insight)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-black/70 backdrop-blur-sm">
          <div className="container mx-auto max-w-5xl text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </footer>
      </div>

      {/* Expanded Card Modal */}
      {expandedCard && <ExpandedCard content={expandedCard} onClose={handleCloseExpanded} />}
    </main>
  )
}

