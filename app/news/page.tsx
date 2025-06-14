"use client"
import { MainLayout } from "@/components/layout/main-layout"
import { Rss, ArrowRight } from "lucide-react"

const newsItems = [
  {
    title: "Osun UpSkill Program Aims to Train 50,000 Youths",
    date: "2023",
    summary:
      "The Osun State government launched the 'Osun UpSkill Program' to equip 50,000 youths, entrepreneurs, and SMEs with crucial digital literacy, soft skills, and technology adoption knowledge to thrive in the modern economy.",
    category: "Skills Development",
  },
  {
    title: "Osun Achieves Best NECO SSCE Results in 18 Years",
    date: "2024",
    summary:
      "Osun State climbed to the 7th position nationally in the 2024 NECO Senior School Certificate Examination, with a 71% pass rate (5 credits including Maths & English), marking its best performance in nearly two decades.",
    category: "Education",
  },
  {
    title: "Movement for Good to End FGM Launched in Osun",
    date: "2023",
    summary:
      "In partnership with UNICEF, Osun State initiated the 'Movement for Good to End FGM,' a significant campaign engaging community leaders and birth attendants to abandon the harmful traditional practice.",
    category: "Child Protection",
  },
  {
    title: "Imole Youth Corps (IYC) Unveiled for Youth Engagement",
    date: "Late 2022 / Early 2023",
    summary:
      "The Osun State administration introduced the Imole Youth Corps, a flagship program designed to engage youth aged 18-35 in community service, leadership development, and skills acquisition, replacing the O-YES scheme.",
    category: "Employment",
  },
  {
    title: "U.S. Consulate Launches 'Osun Girls Can Code' Initiative",
    date: "Late 2021",
    summary:
      "The U.S. Consulate launched a STEM initiative to empower 300 high school girls in Osun with coding and STEM skills, also training 60 female teachers and culminating in tech innovation competitions.",
    category: "Education",
  },
  {
    title: "Osun Health Insurance Scheme (OHIS) Expanding Coverage",
    date: "Ongoing since 2018",
    summary:
      "The OHIS continues to provide affordable health coverage to thousands of families in Osun, significantly reducing out-of-pocket expenses for essential health services and particularly benefiting pregnant women and infants.",
    category: "Health",
  },
  {
    title: "Osun Emerging Leaders Summit Held on International Youth Day",
    date: "2023",
    summary:
      "Osun’s Nigerian Youth Parliament representatives hosted the Osun Emerging Leaders Summit, focusing on entrepreneurship, leadership, and civic engagement, honoring exceptional young individuals.",
    category: "Civic Engagement",
  },
]

export default function NewsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <Rss size={56} className="mx-auto text-teal-400 mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-300">Latest News & Highlights</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Stay updated on the latest developments, initiatives, and achievements in child and youth development across
            Osun State.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.title}
              className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-teal-500/30 flex flex-col"
            >
              <span className="text-xs text-teal-400 mb-1 font-semibold">{item.category.toUpperCase()}</span>
              <h2 className="text-xl font-bold text-teal-300 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-400 mb-1">{item.date}</p>
              <p className="text-gray-300 text-sm mb-4 flex-grow">{item.summary}</p>
              <a
                href="#"
                className="text-teal-400 hover:underline text-sm font-medium flex items-center mt-auto"
                onClick={(e) => e.preventDefault()} // Placeholder link
              >
                Read More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
