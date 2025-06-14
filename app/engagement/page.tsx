"use client"
import { MainLayout } from "@/components/layout/main-layout"
import { StatCard } from "@/components/ui/stat-card"
import { Users, Award, Mic, Landmark } from "lucide-react"

const youthInitiatives = [
  { name: "Imole Youth Corps (IYC)", description: "Flagship civic service and skills acquisition program." },
  { name: "National Youth Council of Nigeria (NYCN) Osun Chapter", description: "Advocacy and community service." },
  { name: "Osun Emerging Leaders Summit", description: "Platform for young leaders, focusing on entrepreneurship." },
  { name: "Osun Youth Ambassadors", description: "Volunteer network for community service and peer education." },
  { name: "YALI Network Osun", description: "Trains young people in leadership and community development." },
]

export default function EngagementPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-300">
            Youth Participation & Civic Engagement in Osun
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Highlighting the vibrant role of Osun&apos;s youth in governance, community development, and policy
            influence, supported by state initiatives and active youth organizations.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Youth Population"
            value="~55-60%"
            description="Under 30, forming a significant 'youth bulge'"
            icon={Users}
          />
          <StatCard
            title="Not Too Young To Run Act"
            value="Empowering"
            description="More young candidates in elections"
            icon={Mic}
          />
          <StatCard
            title="NYCN Osun Chapter"
            value="Active"
            description="Vocal on youth issues like unemployment"
            icon={Award}
          />
          <StatCard
            title="Youth in Governance"
            value="Increasing"
            description="Appointments as advisers, SAs"
            icon={Landmark}
          />
        </section>

        <div className="space-y-12">
          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Key Youth Initiatives & Organizations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {youthInitiatives.map((initiative) => (
                <div key={initiative.name} className="bg-gray-900/70 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-teal-400 mb-2">{initiative.name}</h3>
                  <p className="text-gray-300 text-sm">{initiative.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Political Inclusion & Policy Influence</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Youth in Osun are increasingly influential in politics. The &apos;Not Too Young To Run Act&apos; (2018)
                has enabled more young people to seek elective office. Voter turnout among youth is high, and the state
                government includes young Special Advisers and has a Youth Advisory Council.
              </p>
              <p>
                Youth-led NGOs like Kimpact Development Initiative conduct social accountability projects, training
                citizens to track budgets and monitor constituency projects, fostering transparency.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">
              Community Involvement & International Partnerships
            </h2>
            <p className="text-gray-300">
              Osun&apos;s youth are active in community development committees, volunteer groups, and traditional
              festivals. International partners like the U.S. Consulate (e.g., &quot;Osun Girls Can Code&quot;, YALI
              Network), Open Society University Network, and the British Council have supported various youth engagement
              and skills programs, enhancing civic participation.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  )
}
