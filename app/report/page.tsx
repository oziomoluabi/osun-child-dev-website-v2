"use client"
import { MainLayout } from "@/components/layout/main-layout"

export default function ReportPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <article className="prose prose-invert prose-headings:text-teal-300 prose-h2:text-teal-400 prose-strong:text-teal-400 max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-teal-500/30">
          <h1>Comprehensive Report: Child & Youth Development in Osun State (2022-2025 Analysis)</h1>

          <h2>Executive Summary & Overview</h2>
          <p>
            Osun State, located in southwest Nigeria, demonstrates notable progress in child and youth development,
            often outperforming national averages. However, it concurrently faces persistent challenges requiring
            sustained, multi-stakeholder intervention. This report synthesizes findings across five key dimensions:
            Education, Health, Employment & Skills, Child Protection, and Civic Engagement, drawing from data spanning
            approximately 2018 to 2025.
          </p>
          <p>
            Key strengths include high adult literacy (84.5%), very low under-5 stunting (7.2%), and the lowest national
            unemployment rate (11.7% in Q4 2020). Conversely, challenges such as a 13% out-of-school children rate
            (highest in the South-West), the need for sustainable private sector job creation, and addressing
            multidimensional poverty, particularly in rural areas, are prominent.
          </p>

          <h2>1. Education: Literacy Gains vs. Access Gaps</h2>
          <p>
            Osun's adult literacy rate (84.5%) significantly surpasses the national average (62%). The state has seen
            remarkable improvements in NECO SSCE rankings, achieving 7th position in 2024 with a 71% pass rate.
            Initiatives like the O'MEALS school feeding program (boosting enrollment by ~25% initially) and the
            &quot;Opon Imo&quot; digital learning tablets have been impactful.
          </p>
          <p>
            Despite these successes, about 13% of children were out-of-school in 2021, the highest in the South-West.
            Challenges include teacher shortages (projected 11,000), inadequate infrastructure in some rural schools,
            and overcrowded classrooms. The World Bank-supported BESDA program and state efforts to rehabilitate schools
            and hire teachers aim to address these issues.
          </p>

          <h2>2. Health & Well-being: Strong Indicators, Targeted Interventions</h2>
          <p>
            Osun&apos;s commendable health outcomes, including low malnutrition rates and improved healthcare Osun
            excels in child health, with under-5 stunting at 7.2% (national: 37%) and underweight at 6% (national: 22%).
            Immunization coverage is good, with only ~8% of children receiving no vaccinations (national: ~18%). The
            Osun Health Insurance Scheme (OHIS), launched in 2018, has improved healthcare access and affordability for
            thousands.
          </p>
          <p>
            Adolescent health is relatively positive, with low teenage pregnancy rates. However, Female Genital
            Mutilation (FGM) remains a concern (45% prevalence among adult women), prompting dedicated campaigns like
            the "Movement for Good to End FGM" (2023). Mental health services for youth are limited and represent an
            emerging area of need.
          </p>

          <h2>3. Employment & Skills: Low Unemployment, Focus on Sustainability</h2>
          <p>
            Osun&apos;s 11.7% unemployment rate (Q4 2020) was the lowest in Nigeria, largely attributed to state-led
            initiatives like the Osun Youth Empowerment Scheme (O-YES), which engaged 20,000 youths per batch. The new
            Imole Youth Corps (IYC) aims to continue this legacy.
          </p>
          <p>
            However, underemployment and the need for sustainable private-sector jobs persist. The &quot;Osun UpSkill
            Program&quot; (launched 2023) targets training 50,000 youths in digital and entrepreneurial skills. Support
            for SMEs and agripreneurship is also emphasized, though access to finance remains a hurdle.
          </p>

          <h2>4. Child Protection: Robust Framework, Ongoing Vigilance</h2>
          <p>
            Osun has domesticated the Child Rights Act (CRA), providing a strong legal basis for child protection. Child
            labor prevalence (~10-15%) is lower than the national average (31.5%). Family Courts are established for
            juvenile justice.
          </p>
          <p>
            The state actively combats child abuse and trafficking, with agencies like NSCDC and NAPTIP involved.
            Significant efforts are underway to eradicate FGM. The Ministry of Women Affairs and Child Development,
            along with NGOs and UNICEF, plays a crucial role in monitoring, response, and prevention.
          </p>

          <h2>5. Youth Participation & Civic Engagement: Active and Influential</h2>
          <p>
            Youth (under 30) constitute ~55-60% of Osun&apos;s population. The &apos;Not Too Young To Run Act&apos; has
            increased youth participation in politics. The National Youth Council of Nigeria (NYCN) Osun chapter is
            active, and events like the Osun Emerging Leaders Summit (2023) foster youth leadership.
          </p>
          <p>
            State initiatives like the Imole Youth Corps and Osun Youth Ambassadors encourage civic service. Youth-led
            NGOs contribute to social accountability. International partnerships (e.g., U.S. Consulate, British Council)
            further bolster youth engagement and skills.
          </p>

          <h2>Conclusion: Sustaining Progress Through Collaboration</h2>
          <p>
            Osun State&apos;s trajectory in child and youth development showcases significant strengths and a commitment
            to progressive policymaking. The state compares favorably to national benchmarks in many areas, particularly
            health and literacy.
          </p>
          <p>
            Sustaining and building upon these achievements requires continued investment in quality education,
            transitioning from temporary job schemes to sustainable employment, and persistent efforts to change harmful
            social norms. Strengthening the collaboration between government agencies, NGOs, international organizations
            (UNICEF, WHO, World Bank, USAID), and local communities is paramount. By reinforcing successes and
            addressing gaps, Osun can solidify its position as a model for positive child and youth development in
            Nigeria.
          </p>
        </article>
      </div>
    </MainLayout>
  )
}
