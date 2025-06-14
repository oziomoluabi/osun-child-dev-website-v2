"use client"
import { MainLayout } from "@/components/layout/main-layout"
import { StatCard } from "@/components/ui/stat-card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { HeartPulse, Activity, ShieldCheck, Baby } from "lucide-react"

const stuntingData = [
  { name: "Bauchi", "Stunting Rate": 58 }, // Approx. average of 55-61%
  { name: "Nigeria", "Stunting Rate": 37 },
  { name: "Lagos", "Stunting Rate": 10 },
  { name: "Osun", "Stunting Rate": 7.2 },
]

export default function HealthPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-300">Health & Well-being in Osun State</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Analyzing Osun&apos;s commendable health outcomes, including low malnutrition rates and improved healthcare
            access, while addressing ongoing challenges.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Under-5 Stunting"
            value="7.2%"
            description="Among the lowest in Nigeria"
            trend="up" // Positive trend (low is good)
            icon={Baby}
          />
          <StatCard
            title="Zero-Dose Children"
            value="~8%"
            description="Better than national average (18%)"
            trend="up" // Positive trend (low is good)
            icon={ShieldCheck}
          />
          <StatCard
            title="Teenage Pregnancy"
            value="Low"
            description="Consistent with SW region trends"
            trend="up" // Positive trend
            icon={Activity}
          />
          <StatCard
            title="OHIS Enrollment"
            value="Growing"
            description="Thousands of families enrolled"
            trend="up"
            icon={HeartPulse}
          />
        </section>

        <div className="space-y-12">
          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Child Health & Nutrition: A Success Story</h2>
            <p className="text-gray-300 mb-8">
              Osun State stands out with impressively low rates of child malnutrition. Under-5 stunting is only about
              7.2%, and underweight is around 6%, significantly better than the national averages of 37% and 22%
              respectively. This success is attributed to better maternal education and childcare practices. However,
              pockets of severe acute malnutrition still exist, and continuous efforts are needed.
            </p>
            <div className="bg-gray-900/70 p-4 rounded-lg shadow-inner border border-gray-700 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stuntingData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
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
                  <Bar dataKey="Stunting Rate" fill="#66f4e1" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">
              Healthcare Access & Osun Health Insurance Scheme (OHIS)
            </h2>
            <p className="text-gray-300">
              The Osun Health Insurance Scheme (OHIS), launched in 2018, provides affordable health coverage,
              significantly reducing out-of-pocket costs for services like Caesarean sections (from ₦300,000 to ₦30,000
              for insured families). This has encouraged healthcare utilization, especially for pregnant women and
              infants. The state also runs numerous primary healthcare centers, though some rural clinics face staff and
              drug shortages.
            </p>
          </section>

          <section className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
            <h2 className="text-3xl font-bold text-teal-300 mb-6">Adolescent Health</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Youth in Osun generally enjoy better health metrics. Teenage pregnancy rates are relatively low, with
                most girls delaying marriage and childbearing compared to national patterns. However, Female Genital
                Mutilation (FGM) remains a challenge, with a high historical prevalence. Campaigns supported by UNICEF
                and the National Orientation Agency are actively working to end this practice. Mental health is an
                emerging concern, with limited services currently available.
              </p>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  )
}
