"use client"

import type React from "react"

import { Github, ExternalLink, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/content"

interface ExpandedCardProps {
  content: {
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
  onClose: () => void
}

export default function ExpandedCard({ content, onClose }: ExpandedCardProps) {
  // Function to handle image errors and provide fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = `/placeholder.svg?height=300&width=600&text=${encodeURIComponent(content.title)}`
  }

  // Ensure image path is correct with basePath
  const imagePath = content.image.startsWith("http") 
    ? content.image 
    : `${siteConfig.basePath}${content.image}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
      <div
        className="relative bg-gray-900/90 border border-gray-700 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-2 z-10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative w-full h-52 md:h-72">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={content.title}
            fill
            className="object-cover rounded-t-lg"
            onError={handleImageError}
            priority
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">{content.title}</h2>

          {/* For project cards - show technologies */}
          {content.type === "project" && content.technologies && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {content.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Content text */}
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-gray-300">{content.content}</p>
          </div>

          {/* Links for projects */}
          {content.type === "project" && content.links && (
            <div className="flex space-x-4 mt-6">
              {content.links.github && (
                <Link
                  href={content.links.github}
                  className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </Link>
              )}

              {content.links.demo && (
                <Link
                  href={content.links.demo}
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
