'use client';

export default function Home() {
  const selectedWork = [
    {
      id: 1,
      title: "CRautos Price Prediction & Market Dashboard",
      subtitle: "Machine Learning • Data Visualization",
      company: "Portugal • 2024",
      link: "https://github.com/danielcp26/ML_Projects/blob/main/CRautos%20Prediction.ipynb"
    },
    {
      id: 2,
      title: "RAG Medical Assistant",
      subtitle: "Python • Azure ML • NLP",
      company: "Remote • 2024",
      link: "https://github.com/danielcp26/MedicalAssistantBot/blob/main/MedicalAssistantProject.ipynb"
    },
    {
      id: 3,
      title: "COVID-19 Data Analysis",
      subtitle: "SQL • PostgreSQL • Analytics",
      company: "Remote • 2023",
      link: "https://github.com/danielcp26/SQL_Projects/blob/main/CovidProjectSQL.sql"
    }
  ];

  const experience = [
    {
      id: 1,
      title: "Data Scientist",
      company: "Freelance",
      period: "2023 - Current",
      location: "Remote"
    },
    {
      id: 2,
      title: "Machine Learning Analyst",
      company: "Various Projects",
      period: "2022 - 2023",
      location: "Portugal"
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "Oeson Internship",
      period: "2022",
      location: "Remote"
    },
    {
      id: 4,
      title: "Industrial Engineer",
      company: "MIT Data Science",
      period: "2021 - 2022",
      location: "Remote"
    },
    {
      id: 5,
      title: "Analytics & BI Developer",
      company: "Self-Taught",
      period: "2020 - Current",
      location: "Global"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-lg font-semibold">D.C</a>
          <div className="flex gap-8 text-sm">
            <a href="#work" className="hover:opacity-50 transition">Work</a>
            <a href="#about" className="hover:opacity-50 transition">About</a>
            <a href="#contact" className="hover:opacity-50 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-sm tracking-wider uppercase mb-6 opacity-60">Hey there</p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              I'm Daniel<br />
              Chacón Pérez.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl opacity-80">
              Data scientist & analyst building end-to-end solutions from data collection to stakeholder-ready insights. I turn messy datasets into decisions that move the business.
            </p>
          </div>

          {/* Profile Image */}
          <div className="mb-16">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200">
              <img
                src="/projects/Profile%20Picture.jpg"
                alt="Daniel Chacón Pérez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 flex-wrap">
            <a href="#work" className="text-sm font-medium hover:opacity-50 transition">View Work</a>
            <a href="https://github.com/danielcp26" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-50 transition">Github</a>
            <a href="https://www.linkedin.com/in/daniel-chacon-perez/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-50 transition">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-24 px-6 border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Selected work</h2>
            <p className="text-sm opacity-60 mt-2">({selectedWork.length})</p>
          </div>

          <div className="space-y-12">
            {selectedWork.map((work) => (
              <a
                key={work.id}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 pb-8 border-b border-black/5 hover:opacity-60 transition">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:underline">{work.title}</h3>
                    <p className="text-sm opacity-70 mb-3">{work.subtitle}</p>
                    <p className="text-xs opacity-50">{work.company}</p>
                  </div>
                  <div className="text-xs opacity-50 whitespace-nowrap">View →</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a href="https://github.com/danielcp26" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-50 transition">
              See all work →
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="py-24 px-6 border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Worked with</h2>
            <p className="text-sm opacity-60 mt-2">({experience.length})</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="border-b border-black/5 pb-8">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                    <p className="text-sm opacity-70">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:text-right text-xs opacity-60">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">About</h3>
              <p className="text-sm leading-relaxed opacity-80">
                I'm passionate about turning complex data into actionable insights. Trained as an industrial engineer, I specialize in end-to-end ML pipelines, customer analytics, and building dashboards that stakeholders trust.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Skills</h3>
              <ul className="text-sm space-y-2 opacity-80">
                <li>Python • Pandas • NumPy</li>
                <li>SQL • PostgreSQL • MySQL</li>
                <li>Machine Learning • Scikit-learn</li>
                <li>Tableau • Power BI</li>
                <li>Data Visualization • Analytics</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Connect</h3>
              <div className="space-y-3 text-sm">
                <a href="https://www.linkedin.com/in/daniel-chacon-perez/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-50 transition">
                  LinkedIn
                </a>
                <a href="https://github.com/danielcp26" target="_blank" rel="noopener noreferrer" className="block hover:opacity-50 transition">
                  GitHub
                </a>
                <a href="mailto:danielcp.26@hotmail.com" className="block hover:opacity-50 transition">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5 text-center text-xs opacity-60">
        <div className="max-w-4xl mx-auto">
          <p>© D.C - 2026</p>
          <p className="mt-4">
            Say hello at{' '}
            <a href="mailto:danielcp.26@hotmail.com" className="hover:opacity-50 transition">
              danielcp.26@hotmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
