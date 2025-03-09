"use client"

interface SideNavigationProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
  sections: string[]
}

export default function SideNavigation({ activeSection, onNavigate, sections }: SideNavigationProps) {
  // Map section IDs to readable names
  const sectionNames: Record<string, string> = {
    about: "About",
    projects: "Projects",
    blog: "Blog",
  }

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-6">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onNavigate(section)}
          className="group flex items-center gap-3"
          aria-label={`Navigate to ${sectionNames[section]} section`}
        >
          <span
            className={`text-sm font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
              activeSection === section ? "text-blue-400" : "text-gray-400"
            }`}
          >
            {sectionNames[section]}
          </span>
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-blue-500 scale-100"
                : "bg-gray-500 scale-75 group-hover:scale-100 group-hover:bg-gray-300"
            }`}
          />
        </button>
      ))}
    </nav>
  )
}

