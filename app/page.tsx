"use client"

import React from "react"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { BookOpen, HeartPulse, Briefcase, Shield, Users, ArrowRight } from "lucide-react"
import { MainLayout } from "@/components/layout/main-layout"

// Helper component for a Dotted Matrix Background
const DottedMatrixBackground: React.FC = () => (
  <div
    className="absolute inset-0 -z-10"
    style={{
      backgroundColor: "#0d1a26", // Dark blue
      backgroundImage: `radial-gradient(circle, #1a344d 1px, transparent 1px),
                       radial-gradient(circle, #1a344d 1px, transparent 1px)`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 10px 10px", // Offset for a grid effect
    }}
  ></div>
)

interface CircularGaugeProps {
  percentage: number
  label: string
  color?: string
}

// Helper component for a Circular Gauge
const CircularGauge: React.FC<CircularGaugeProps> = ({ percentage, label, color = "#66f4e1" }) => {
  const radius = 30 // Smaller radius for HUD
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg className="w-20 h-20" viewBox="0 0 70 70">
        {/* Background circle (track) */}
        <circle
          strokeWidth="4"
          stroke="#2d3748" // Darker gray for track
          fill="transparent"
          r={radius}
          cx="35"
          cy="35"
        />
        {/* Progress circle */}
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
        {/* Percentage text */}
        <text x="35" y="40" textAnchor="middle" className="text-sm font-bold text-gray-100 fill-current">
          {percentage}%
        </text>
      </svg>
      <span className="text-xs text-gray-400 mt-1">{label}</span>
    </div>
  )
}

interface BinaryReadoutProps {
  length?: number
}

// Helper component for Binary Readout with animation
const BinaryReadout: React.FC<BinaryReadoutProps> = ({ length = 80 }) => {
  const [binaryString, setBinaryString] = React.useState("")

  React.useEffect(() => {
    const generateBinary = () => {
      let str = ""
      for (let i = 0; i < length; i++) {
        str += Math.random() > 0.5 ? "1" : "0"
      }
      setBinaryString(str)
    }

    generateBinary() // Initial generation
    const interval = setInterval(generateBinary, 150) // Faster update for "data processing" feel
    return () => clearInterval(interval)
  }, [length])

  return (
    <div className="font-mono text-xs text-teal-400 whitespace-pre overflow-hidden px-4 md:px-0">{binaryString}</div>
  )
}

interface LateralWingProps {
  direction?: "left" | "right"
}

// Helper component for Lateral Wing Elements
const LateralWing: React.FC<LateralWingProps> = ({ direction = "left" }) => (
  <div
    className={`absolute w-16 h-full top-0 bg-teal-500/10 z-0 ${direction === "left" ? "left-0" : "right-0"}`}
    style={{
      clipPath:
        direction === "left"
          ? "polygon(0 0, 100% 10%, 100% 90%, 0% 100%)"
          : "polygon(100% 0, 0% 10%, 0% 90%, 100% 100%)",
    }}
  >
    <div
      className={`absolute inset-0 flex flex-col justify-around ${direction === "left" ? "items-start" : "items-end"} p-2`}
    >
      <div className="w-1/2 h-0.5 bg-teal-400/30"></div>
      <div className="w-3/4 h-0.5 bg-teal-400/30"></div>
      <div className="w-1/2 h-0.5 bg-teal-400/30"></div>
    </div>
  </div>
)

// Dummy data for the trend chart (from first document context: 13% out-of-school in 2021, recent rise noted)
// The chart shows a positive trend (decrease), which aligns with more recent interventions mentioned in the second document.
const outOfSchoolData = [
  { name: "2019", children: 20 },
  { name: "2020", children: 18 },
  { name: "2021", children: 13 }, // Matches text: "In 2021, about 13% of children in Osun were out of school"
  { name: "2022", children: 15 }, // Illustrative slight increase reflecting "worrying trend"
  { name: "2023", children: 11 }, // Illustrative improvement
  { name: "2024", children: 10 }, // Illustrative improvement
]

const dimensions = [
  {
    title: "Education",
    icon: BookOpen,
    description:
      "Discover Osun&apos;s progress in literacy (84.5%) and school attendance, alongside challenges like a 13% out-of-school rate.",
    href: "/education",
  },
  {
    title: "Health & Well-being",
    icon: HeartPulse,
    description:
      "Explore Osun's strong child health indicators, with very low under-5 stunting (7.2%) and good immunization coverage.",
    href: "/health",
  },
  {
    title: "Employment & Skills",
    icon: Briefcase,
    description:
      "Analyze Osun's lowest national unemployment rate (11.7%) driven by schemes like O-YES and the new Imole Youth Corps.",
    href: "/employment",
  },
  {
    title: "Child Protection",
    icon: Shield,
    description:
      "Examine Osun's robust child protection framework, lower child labor rates (~10-15%), and initiatives against child abuse.",
    href: "/protection",
  },
  {
    title: "Civic Engagement",
    icon: Users,
    description:
      "Learn about high youth political inclusion, active youth councils, and the growing influence of youth in governance.",
    href: "/engagement",
  },
]

const newsHighlights = [
  {
    title: "Osun UpSkill Program Trains 50,000 Youths",
    description:
      'The state\'s new "Osun UpSkill Program" is making strides in equipping 50,000 youths with digital skills and business development knowledge.',
  },
  {
    title: "Academic Performance Soars: Osun Ranks 7th in NECO SSCE",
    description:
      "Osun State has achieved its best NECO SSCE performance in 18 years, climbing to 7th position nationally with a 71% pass rate.",
  },
  {
    title: "Movement for Good to End FGM Launched in Osun",
    description:
      "In partnership with UNICEF, Osun has launched a significant initiative to combat Female Genital Mutilation, engaging communities to abandon the harmful practice.",
  },
]

// Main Page component that renders the entire homepage
export default function OsunDevelopmentPage() {
  return (
    <MainLayout>
      <DottedMatrixBackground />

      {/* Top HUD Panel */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-teal-500/30"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)" }}
      >
        {" "}
        {/* Slightly adjusted clipPath for aesthetics */}
        <div className="relative h-40 flex items-center justify-between px-4 sm:px-8 py-4">
          <LateralWing direction="left" />
          <div className="flex-1 flex flex-col items-center relative z-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-teal-400 text-center mb-2">
              Osun Child & Youth Development
            </h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-3 lg:space-x-4 text-sm">
                {["Home", "Education", "Health", "Employment", "Protection", "Engagement", "About", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-teal-400 transition-colors px-1 py-1 rounded hover:bg-teal-500/20"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </nav>
            <div className="mt-2 hidden sm:block w-full max-w-md lg:max-w-lg">
              <BinaryReadout length={window.innerWidth > 768 ? 80 : 50} />
            </div>
          </div>
          <LateralWing direction="right" />
        </div>
      </header>

      {/* Main Scrollable Content */}
      <main className="relative z-10 pt-40 pb-40">
        {" "}
        {/* Padding to offset fixed HUD panels */}
        {/* Hero Section */}
        <section className="bg-gray-800/80 backdrop-blur-sm text-white py-12 sm:py-16 px-4 text-center rounded-lg shadow-xl mx-2 sm:mx-4 my-4 border border-teal-500/30">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-teal-300">
              Nurturing Tomorrow: Osun State's Child & Youth Development
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Explore comprehensive analysis of current status, trends, and initiatives shaping the future of children
              and youth in Osun State, Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/education"
                className="bg-teal-600 text-gray-900 hover:bg-teal-500 font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                Explore Key Dimensions <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/report"
                className="bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-gray-900 font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                View Full Report
              </Link>
            </div>
          </div>
        </section>
        {/* Key Indicators at a Glance */}
        <section className="py-12 sm:py-16 px-4 bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-4 my-4 rounded-lg shadow-xl border border-teal-500/30">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-300 mb-12">
              Key Indicators at a Glance
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-700">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700/70">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-teal-300 uppercase tracking-wider rounded-tl-lg"
                    >
                      Indicator (Latest)
                    </th>
                    <th
                      scope="col"
                      className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-teal-300 uppercase tracking-wider"
                    >
                      Osun State
                    </th>
                    <th
                      scope="col"
                      className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-teal-300 uppercase tracking-wider"
                    >
                      Nigeria (National)
                    </th>
                    <th
                      scope="col"
                      className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-teal-300 uppercase tracking-wider"
                    >
                      Lagos State
                    </th>
                    <th
                      scope="col"
                      className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-teal-300 uppercase tracking-wider rounded-tr-lg"
                    >
                      Bauchi State
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800/70 divide-y divide-gray-700">
                  {[
                    {
                      indicator: "Adult Literacy Rate (%) (2018)",
                      osun: "84.5%",
                      nigeria: "62%",
                      lagos: "~96%",
                      bauchi: "~29%",
                    },
                    {
                      indicator: "Out-of-School Children (%) (2021)",
                      osun: "13%",
                      nigeria: "~27%",
                      lagos: "<15%",
                      bauchi: ">50%",
                    },
                    {
                      indicator: "Under-5 Stunting (%) (2018)",
                      osun: "7.2%",
                      nigeria: "37%",
                      lagos: "~10%",
                      bauchi: "55-61%",
                    },
                    {
                      indicator: "Unemployment Rate (%) (Q4 2020)",
                      osun: "11.7%",
                      nigeria: "33.3%",
                      lagos: "~14%",
                      bauchi: "~27%",
                    },
                    {
                      indicator: "Child Labour Prevalence (%) (2021)",
                      osun: "~10-15%",
                      nigeria: "31.5%",
                      lagos: "~5-10%",
                      bauchi: "55%",
                    },
                    {
                      indicator: "Child Marriage Prevalence (%) (2021)",
                      osun: "~10%",
                      nigeria: "30%",
                      lagos: "3%",
                      bauchi: "74%",
                    },
                  ].map((row, index, arr) => (
                    <tr key={row.indicator} className="hover:bg-gray-700/50 transition duration-150 ease-in-out">
                      <td
                        className={`px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm sm:text-base font-medium text-gray-200 ${index === arr.length - 1 ? "rounded-bl-lg" : ""}`}
                      >
                        {row.indicator}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm sm:text-base text-gray-300">
                        {row.osun}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm sm:text-base text-gray-300">
                        {row.nigeria}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm sm:text-base text-gray-300">
                        {row.lagos}
                      </td>
                      <td
                        className={`px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm sm:text-base text-gray-300 ${index === arr.length - 1 ? "rounded-br-lg" : ""}`}
                      >
                        {row.bauchi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Development Trends Section - Data Visualization */}
        <section className="py-12 sm:py-16 px-4 bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-4 my-4 rounded-lg shadow-xl border border-teal-500/30">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-300 mb-12">
              Development Trends: Out-of-School Children (%)
            </h2>
            <div className="bg-gray-900/70 p-4 sm:p-6 rounded-lg shadow-inner border border-gray-700">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={outOfSchoolData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis dataKey="name" stroke="#a0aec0" />
                  <YAxis stroke="#a0aec0" unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#2d3748",
                      border: "1px solid #4a5568",
                      borderRadius: "0.5rem",
                      color: "#cbd5e0",
                    }}
                    labelStyle={{ color: "#teal-300" }}
                    formatter={(value: number) => `${value}%`}
                  />
                  <Line type="monotone" dataKey="children" stroke="#66f4e1" activeDot={{ r: 8 }} strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-gray-400 mt-6 text-sm sm:text-base">
                Trend of Out-of-School Children in Osun State (Percentage of age group). Data is illustrative.
              </p>
            </div>
          </div>
        </section>
        {/* Overview of Key Dimensions */}
        <section className="py-12 sm:py-16 px-4 bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-4 my-4 rounded-lg shadow-xl border border-teal-500/30">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-300 mb-12">
              Explore Key Dimensions of Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {dimensions.map((dim) => (
                <div
                  key={dim.title}
                  className="bg-gray-900/70 rounded-xl shadow-lg p-6 sm:p-8 transform hover:scale-105 transition duration-300 ease-in-out border border-gray-700 flex flex-col"
                >
                  <div className="text-teal-400 text-5xl mb-6 flex justify-center">
                    <dim.icon size={56} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-teal-300 mb-4 text-center">{dim.title}</h3>
                  <p className="text-gray-300 text-center text-sm sm:text-base mb-6 flex-grow">{dim.description}</p>
                  <div className="text-center mt-auto">
                    <Link
                      href={dim.href}
                      className="inline-flex items-center bg-teal-600 text-gray-900 font-semibold py-2 px-5 sm:px-6 rounded-full hover:bg-teal-700 transition duration-300 ease-in-out text-sm sm:text-base"
                    >
                      Learn More <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Latest News/Highlights */}
        <section className="py-12 sm:py-16 px-4 bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-4 my-4 rounded-lg shadow-xl border border-teal-500/30">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-300 mb-12">Latest News & Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {newsHighlights.map((news) => (
                <div key={news.title} className="bg-gray-900/70 rounded-xl shadow-md p-6 border border-gray-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-teal-300 mb-2">{news.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4">{news.description}</p>
                  <Link href="/news" className="text-teal-400 hover:underline text-sm font-medium flex items-center">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Bottom HUD Panel */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-t border-teal-500/30"
        style={{ clipPath: "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)" }}
      >
        {" "}
        {/* Slightly adjusted clipPath */}
        <div className="relative h-40 flex flex-col items-center justify-center px-4 sm:px-8 py-4">
          
          <div className="w-full text-center text-gray-400 text-xs sm:text-sm z-10">
            <p>&copy; {new Date().getFullYear()} Osun Child & Youth Development. All rights reserved.</p>
            <ul className="flex flex-wrap justify-center space-x-3 sm:space-x-4 mt-1">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          {/* Lateral wings are decorative and might overlap content if not careful with layout, simplified here */}
        </div>
      </footer>
    </MainLayout>
  )
}
