"use client"
import { MainLayout } from "@/components/layout/main-layout"
import { StatCard } from "@/components/ui/stat-card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { BookOpen, Users, TrendingUp, AlertTriangle } from "lucide-react"

const literacyData = [
  { name: "Bauchi", "Literacy Rate": 29 },
  { name: "Nigeria", "Literacy Rate": 62 },
  { name: "Osun", "Literacy Rate": 84.5 },
  { name: "Lagos", "Literacy Rate": 96 },
]

export default function EducationPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-300">Education in Osun State</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            A deep dive into Osun&apos;s educational landscape, highlighting its successes in literacy and performance
            alongside persistent challenges in access and quality.
          </p>
        </header>

        {/* Key Statistics */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Adult Literacy Rate"
            value="84.5%"
            description="Significantly above national average"
            trend="up"
            icon={BookOpen}
          />
          <StatCard
            title="Out-of-School Children"
            value="13%"
            description="Highest in South-West region"
            trend="down"
            icon={AlertTriangle}
          />
          <StatCard
            title="Primary Net Attendance"
            value="~73%"
            description="Higher than national average"
            trend="up"
            icon={Users}
          />
          <StatCard
            title="NECO Pass Rate (2024)"
            value="71%"
            description="Best performance in 18 years"
            trend="up"
            icon={TrendingUp}
          />
        </section>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Quality & Literacy Section with Chart */}
          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Quality & Literacy: A Regional Comparison</h2>
            <p className="text-gray-300 mb-8">
              Osun&apos;s adult literacy rate of approximately 84.5% stands as a testament to its long-term investment
              in education, far exceeding the national average of 62%. This positions the state favorably, though it
              still trails behind leaders like Lagos. However, challenges in educational quality persist, particularly
              in rural areas where infrastructure can be lacking.
            </p>
            <div className="bg-gray-900/70 p-4 rounded-lg shadow-inner border border-gray-700 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={literacyData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis type="number" stroke="#a0aec0" unit="%" />
                  <YAxis type="category" dataKey="name" stroke="#a0aec0" width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#2d3748",
                      border: "1px solid #4a5568",
                      borderRadius: "0.5rem",
                      color: "#cbd5e0",
                    }}
                    cursor={{ fill: "rgba(102, 244, 225, 0.1)" }}
                  />
                  <Legend />
                  <Bar dataKey="Literacy Rate" fill="#66f4e1" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Access & Enrollment Section */}
          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Access & Enrollment</h2>
            <p className="text-gray-300">
              Despite historically high enrollment, a 2021 survey highlighted a worrying trend: Osun had the highest
              rate of out-of-school children in the South-West at 13%. This issue is particularly acute among
              impoverished rural and peri-urban communities. The state is actively working to reverse this through
              programs like the World Bank-supported BESDA (Better Education Service Delivery for All) aimed at
              re-enrolling children.
            </p>
          </section>

          {/* Government Initiatives Section */}
          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Government Initiatives</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong className="text-teal-400">O'MEALS:</strong> A pioneering Home-Grown School Feeding program that
                provides free meals to public primary pupils, significantly boosting enrollment and attendance. It later
                became a model for the national program.
              </p>
              <p>
                <strong className="text-teal-400">Opon Imo:</strong> The &quot;Tablet of Knowledge&quot; was an early
                initiative to enhance learning with technology by providing digital tablets to secondary students.
              </p>
              <p>
                <strong className="text-teal-400">Infrastructure & Recruitment:</strong> Recent efforts have focused on
                rehabilitating schools, building &quot;mega-schools,&quot; and hiring more teachers to improve
                student-teacher ratios and overall educational quality, contributing to improved exam results.
              </p>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  )
}
