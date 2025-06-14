"use client"
import { MainLayout } from "@/components/layout/main-layout"
import { StatCard } from "@/components/ui/stat-card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Briefcase, Zap, Users, TrendingDown } from "lucide-react"

const unemploymentData = [
  { name: "Bauchi", "Unemployment Rate": 27 },
  { name: "Nigeria", "Unemployment Rate": 33.3 },
  { name: "Lagos", "Unemployment Rate": 14 },
  { name: "Osun", "Unemployment Rate": 11.7 },
]

export default function EmploymentPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-300">Employment & Skills in Osun State</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Exploring Osun&apos;s unique position with the lowest unemployment rate in Nigeria, driven by innovative
            youth empowerment schemes and a growing focus on skills development.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Unemployment Rate (Q4 2020)"
            value="11.7%"
            description="Lowest in Nigeria"
            trend="up" // Positive trend (low is good)
            icon={TrendingDown}
          />
          <StatCard
            title="O-YES Volunteers (Initial)"
            value="20,000"
            description="Per batch in public works"
            icon={Users}
          />
          <StatCard
            title="Imole Youth Corps"
            value="Launched"
            description="Focus on community service & skills"
            icon={Zap}
          />
          <StatCard
            title="Osun UpSkill Program Target"
            value="50,000"
            description="Youths, entrepreneurs & SMEs"
            icon={Briefcase}
          />
        </section>

        <div className="space-y-12">
          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Youth Unemployment: A Complex Picture</h2>
            <p className="text-gray-300 mb-8">
              Osun State reported an unemployment rate of only 11.7% in Q4 2020, the lowest in Nigeria. This is partly
              attributed to a large informal sector and impactful state-driven programs. However, underemployment and
              graduate unemployment remain concerns, with many youths in low-paying jobs not fully utilizing their
              skills.
            </p>
            <div className="bg-gray-900/70 p-4 rounded-lg shadow-inner border border-gray-700 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={unemploymentData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
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
                  <Bar dataKey="Unemployment Rate" fill="#66f4e1" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Skills Development Programs</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong className="text-teal-400">Osun Youth Empowerment Scheme (O-YES):</strong> Launched in 2010, this
                ambitious program trained and engaged 20,000 youths per batch in public works, significantly
                contributing to low unemployment stats.
              </p>
              <p>
                <strong className="text-teal-400">Imole Youth Corps (IYC):</strong> Unveiled in late 2022 as a successor
                to O-YES, focusing on community service, leadership, and skills acquisition for 18-35 year-olds.
              </p>
              <p>
                <strong className="text-teal-400">Osun UpSkill Program:</strong> Launched in 2023, aiming to train
                50,000 youths, entrepreneurs, and SMEs in digital literacy, soft skills, and technology adoption.
              </p>
              <p>
                Osun youths also benefit from federal programs like N-Power and vocational training centers, including a
                pilot tailoring hub.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Economic Empowerment & Entrepreneurship</h2>
            <p className="text-gray-300">
              Entrepreneurship is a growing avenue, supported by state-run start-up grants, business plan competitions,
              and SME development programs. These often target youth in agro-business, technology, and creative
              industries. However, access to finance remains a significant hurdle for many young entrepreneurs.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  )
}
