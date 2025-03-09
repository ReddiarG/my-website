interface SkillBadgeProps {
  name: string
  color: string
}

export default function SkillBadge({ name, color }: SkillBadgeProps) {
  // Map color names to tailwind classes
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-900/40 text-blue-200 border-blue-700/50",
    purple: "bg-purple-900/40 text-purple-200 border-purple-700/50",
    indigo: "bg-indigo-900/40 text-indigo-200 border-indigo-700/50",
    cyan: "bg-cyan-900/40 text-cyan-200 border-cyan-700/50",
    green: "bg-green-900/40 text-green-200 border-green-700/50",
    orange: "bg-orange-900/40 text-orange-200 border-orange-700/50",
  }

  const classes = colorClasses[color] || colorClasses.blue

  return <span className={`px-3 py-1 rounded-full text-sm font-medium border ${classes}`}>{name}</span>
}

