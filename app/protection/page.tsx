"use client"
import { MainLayout } from "@/components/layout/main-layout"
import { StatCard } from "@/components/ui/stat-card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Shield, Gavel, Ban, AlertCircle } from "lucide-react"

const childLaborData = [
  { name: "Bauchi", "Child Labor Rate": 55 },
  { name: "Nigeria", "Child Labor Rate": 31.5 },
  { name: "Osun", "Child Labor Rate": 12.5 }, // Approx. average of 10-15%
  { name: "Lagos", "Child Labor Rate": 7.5 }, // Approx. average of 5-10%
]

export default function ProtectionPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-300">
            Child Protection & Welfare in Osun State
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Detailing Osun&apos;s strong legal framework for child rights, efforts to combat child labor and abuse, and
            initiatives for juvenile justice and ending harmful practices like FGM.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Child Rights Act"
            value="Domesticated"
            description="Strong legal basis for protection"
            icon={Gavel}
          />
          <StatCard
            title="Child Labor Prevalence"
            value="~10-15%"
            description="Lower than national average (31.5%)"
            trend="up" // Positive trend (low is good)
            icon={Ban}
          />
          <StatCard
            title="FGM Prevalence (Adult Women)"
            value="~45%"
            description="High, with active campaigns to end it"
            trend="down" // Efforts to reduce
            icon={AlertCircle}
          />
          <StatCard
            title="Family Courts"
            value="Established"
            description="For juvenile justice & child welfare"
            icon={Shield}
          />
        </section>

        <div className="space-y-12">
          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">
              Child Labor: Lower Rates but Persistent Challenges
            </h2>
            <p className="text-gray-300 mb-8">
              Child labor in Osun, estimated at 10-15%, is significantly lower than Nigeria&apos;s national average of
              31.5%. Common forms include street hawking and agricultural work. Enforcement agencies conduct raids and
              awareness campaigns, but poverty remains a key driver.
            </p>
            <div className="bg-gray-900/70 p-4 rounded-lg shadow-inner border border-gray-700 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={childLaborData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
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
                  <Bar dataKey="Child Labor Rate" fill="#66f4e1" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Legal Framework & Institutional Support</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Osun State has domesticated the Child Rights Act (CRA) of 2003, prohibiting child marriage, labor, and
                exploitation. This act guarantees rights to education, health, and protection.
              </p>
              <p>
                <strong className="text-teal-400">Family Courts:</strong> Established at state and local levels to
                handle juvenile justice and child welfare cases with a rehabilitation approach.
              </p>
              <p>
                <strong className="text-teal-400">Child Protection Network:</strong> A coalition of government and civil
                society monitors and responds to child rights violations.
              </p>
              <p>
                The Ministry of Women Affairs and Child Development coordinates protection services and collaborates
                with partners like UNICEF on action plans and training.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Combating Abuse, Trafficking & Harmful Practices</h2>
            <p className="text-gray-300">
              The state takes child abuse seriously, with publicized enforcement by agencies like the NSCDC. Internal
              trafficking for domestic work or hawking occurs, and NAPTIP collaborates on rescue operations. A
              significant focus is on ending Female Genital Mutilation (FGM), with Osun having one of the highest
              prevalence rates. The &quot;Movement for Good to End FGM&quot; was launched in 2023 with UNICEF.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  )
}
