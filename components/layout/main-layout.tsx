"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, HeartPulse, Briefcase, Shield, Users, Rss, FileText, Home } from "lucide-react"

// Helper component for a Dotted Matrix Background
const DottedMatrixBackground: React.FC = () => (
  <div
    className="fixed inset-0 -z-10"
    style={{
      backgroundColor: "#0d1a26",
      backgroundImage: `radial-gradient(circle, #1a344d 1px, transparent 1px),
                       radial-gradient(circle, #1a344d 1px, transparent 1px)`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 10px 10px",
    }}
  ></div>
)

interface CircularGaugeProps {
  percentage: number
  label: string
  color?: string
}

const CircularGauge: React.FC<CircularGaugeProps> = ({ percentage, label, color = "#66f4e1" }) => {
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg className="w-20 h-20" viewBox="0 0 70 70">
        <circle strokeWidth="4" stroke="#2d3748" fill="transparent" r={radius} cx="35" cy="35" />
        <circle
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke={color}
          fill="transparent"
          r={radius}
          cx="35"
          cy="35"
          transform="rotate(-90 35 35)"
        />
        <text x="35" y="40" textAnchor="middle" className="text-sm font-bold text-gray-100 fill-current">
          {percentage}%
        </text>
      </svg>
      <span className="text-xs text-gray-400 mt-1">{label}</span>
    </div>
  )
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/education", label: "Education", icon: BookOpen },
  { href: "/health", label: "Health", icon: HeartPulse },
  { href: "/employment", label: "Employment", icon: Briefcase },
  { href: "/protection", label: "Protection", icon: Shield },
  { href: "/engagement", label: "Engagement", icon: Users },
  { href: "/news", label: "News", icon: Rss },
  { href: "/report", label: "Report", icon: FileText },
]

const Header = () => {
  const pathname = usePathname()
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-teal-500/30"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)" }}
    >
      <div className="relative h-28 sm:h-24 flex items-center justify-center px-4 sm:px-8 py-2">
        <div className="flex-1 flex flex-col items-center relative z-10">
          <h1 className="text-xl sm:text-2xl font-bold text-teal-400 text-center mb-2">
            Osun Child & Youth Development
          </h1>
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 lg:gap-x-4 text-xs sm:text-sm">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-2 py-1 rounded transition-colors ${pathname === href ? "text-teal-400 bg-teal-500/20" : "text-gray-300 hover:text-teal-400 hover:bg-teal-500/10"}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

const Footer = () => (
  <footer
    className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-t border-teal-500/30"
    style={{ clipPath: "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)" }}
  >
    <div className="relative h-32 sm:h-28 flex flex-col items-center justify-center px-4 sm:px-8 py-2">
      <div className="w-full flex justify-center items-center space-x-4 sm:space-x-8 relative z-10 mb-2">
        <CircularGauge percentage={85} label="Literacy" />
        <CircularGauge percentage={73} label="Enrolment" color="#66f4e1" />
        <CircularGauge percentage={93} label="Non-Stunted U5" color="#66f4e1" />
      </div>
      <div className="w-full text-center text-gray-400 text-xs z-10">
        <p>&copy; {new Date().getFullYear()} Osun Child & Youth Development. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen relative font-sans text-gray-100 overflow-x-hidden">
      <DottedMatrixBackground />
      <Header />
      <main className="relative z-10 pt-32 pb-36 sm:pt-28 sm:pb-32">{children}</main>
      <Footer />
    </div>
  )
}
