import Link from "next/link"
import type { ReactNode } from "react"

interface ContactButtonProps {
  icon: ReactNode
  href: string
  label: string
}

export default function ContactButton({ icon, href, label }: ContactButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 bg-gray-800/70 hover:bg-gray-700/70 text-gray-200 px-4 py-2 rounded-full transition-colors backdrop-blur-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

