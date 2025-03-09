"use client"

import { useState } from "react"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  onClick: () => void
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  onClick,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-800 p-6 transition-all duration-300 cursor-pointer ${
        isHovered
          ? "border-blue-500 shadow-lg shadow-blue-900/20 scale-[1.02] translate-y-[-5px]"
          : "hover:border-blue-500/50"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <ChevronRight
          className={`text-blue-400 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
        />
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded transition-colors ${
                isHovered ? "bg-blue-800/70" : ""
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-3 mt-4" onClick={(e) => e.stopPropagation()}>
        <Link
          href={githubUrl}
          className={`flex items-center text-sm text-gray-300 hover:text-white transition-colors ${
            isHovered ? "text-white" : ""
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4 mr-1" />
          Code
        </Link>

        {demoUrl && (
          <Link
            href={demoUrl}
            className={`flex items-center text-sm text-gray-300 hover:text-white transition-colors ${
              isHovered ? "text-white" : ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </Link>
        )}
      </div>
    </div>
  )
}

