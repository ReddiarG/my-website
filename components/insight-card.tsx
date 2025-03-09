"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface InsightCardProps {
  title: string
  summary: string
  onClick: () => void
}

export default function InsightCard({ title, summary, onClick }: InsightCardProps) {
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
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <ChevronRight
          className={`text-blue-400 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
        />
      </div>
      <p className="text-gray-300 mb-3">{summary}</p>
      <div className={`text-blue-400 font-medium transition-colors ${isHovered ? "text-blue-300" : ""}`}>Read more</div>
    </div>
  )
}

