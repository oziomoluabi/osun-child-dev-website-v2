import type React from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  description: string
  trend?: "up" | "down" | "neutral"
  icon: React.ElementType
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, description, trend, icon: Icon }) => {
  const trendColor = trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-gray-400"
  const TrendIcon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : null

  return (
    <div className="bg-gray-900/70 rounded-xl shadow-lg p-6 border border-gray-700 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
        <div className="text-teal-400">
          <Icon size={24} />
        </div>
      </div>
      <p className="text-4xl font-bold text-teal-300 mb-2">{value}</p>
      <div className="flex items-center text-sm text-gray-400 mt-auto">
        {TrendIcon && <TrendIcon size={16} className={`mr-1 ${trendColor}`} />}
        <span className={trendColor}>{description}</span>
      </div>
    </div>
  )
}
