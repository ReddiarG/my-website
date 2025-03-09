"use client"

import { useState } from "react"
import Link from "next/link"

interface BlogCardProps {
  title: string
  date: string
  summary: string
  url: string
}

export default function BlogCard({ title, date, summary, url }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-800 p-6 transition-all duration-300 ${
        isHovered ? "border-blue-500 shadow-lg shadow-blue-900/20 scale-[1.02]" : "hover:border-blue-500/50"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-sm text-gray-400 mb-2 block">{date}</span>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{summary}</p>
      <Link
        href={url}
        className={`text-blue-400 hover:text-blue-300 font-medium transition-colors ${
          isHovered ? "text-blue-300" : ""
        }`}
      >
        Read more →
      </Link>
    </div>
  )
}

