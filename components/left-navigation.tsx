"use client"

import { navigationSections } from "@/lib/content"

interface LeftNavigationProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
  sections: string[]
}

export default function LeftNavigation({ activeSection, onNavigate, sections }: LeftNavigationProps) {
  // Map section IDs to readable names using the content file
  const getSectionName = (id: string) => {
    const section = navigationSections.find((section) => section.id === id)
    return section ? section.label : id.charAt(0).toUpperCase() + id.slice(1)
  }

  return (
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-start gap-8">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onNavigate(section)}
          className="group flex items-center gap-3"
          aria-label={`Navigate to ${getSectionName(section)} section`}
        >
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-blue-500 scale-100 shadow-glow"
                : "bg-gray-400 scale-75 group-hover:scale-100 group-hover:bg-blue-300"
            }`}
          />
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              activeSection === section
                ? "text-blue-400 opacity-100 translate-x-0"
                : "text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-blue-300"
            }`}
          >
            {getSectionName(section)}
          </span>
        </button>
      ))}
    </nav>
  )
}

