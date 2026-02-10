'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';

// Project data with tool tags
const projects = [
  {
    id: 1,
    title: "CRautos Price Prediction & Market Dashboard (Costa Rica)",
    description: "End-to-end project: Selenium scraping, cleaning, feature engineering and regression models to predict used car prices and visualize market trends.",
    image: "/projects/project-1.svg",
    tools: ["Python", "Machine Learning", "Data Analysis", "Interactive Dashboard"],
    links: [
      { text: "Python + ML", url: "https://github.com/danielcp26/ML_Projects/blob/main/CRautos%20Prediction.ipynb" },
      { text: "Interactive Dashboard", url: "https://github.com/danielcp26/ML_Projects/blob/main/CrAutos%20Analysis.pdf" }
    ]
  },
  {
    id: 2,
    title: "RAG Medical Assistant",
    description: "A Retrieval-Augmented Generation chatbot for medical Q&A, built with Python and deployed on Azure ML.",
    image: "/projects/project-2.svg",
    tools: ["Python", "Azure ML", "Machine Learning", "Data Analysis"],
    links: [
      { text: "View Notebook", url: "https://github.com/danielcp26/MedicalAssistantBot/blob/main/MedicalAssistantProject.ipynb" }
    ]
  },
  {
    id: 3,
    title: "Used Cars Price Prediction",
    description: "EDA, feature engineering and regression modeling to estimate used car prices using scikit-learn and interpretable features.",
    image: "/projects/project-3.svg",
    tools: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    links: [
      { text: "View Project", url: "https://github.com/danielcp26/MIT_Data_Science_Projects/blob/main/Used%20Cars%20Prediction.ipynb" }
    ]
  },
  {
    id: 4,
    title: "Olympic Medals Prediction",
    description: "Modeling and predicting country medal counts using socio-economic features and regression techniques.",
    image: "/projects/project-4.svg",
    tools: ["Python", "Machine Learning", "Data Analysis"],
    links: [
      { text: "View Project", url: "https://github.com/danielcp26/Oeson_Internship/blob/main/Olympic_medals.ipynb" }
    ]
  },
  {
    id: 5,
    title: "Remote Work Data Analysis",
    description: "EDA and dashboards studying remote vs onsite work impacts, employee well-being, and trends visualization.",
    image: "/projects/project-5.svg",
    tools: ["Python", "Tableau", "Data Analysis"],
    links: [
      { text: "Python Analysis", url: "https://github.com/danielcp26/Oeson_Internship/blob/main/Remote_Work.ipynb" },
      { text: "Tableau Dashboard", url: "https://public.tableau.com/app/profile/daniel.chac.n.p.rez/viz/Capstone_Internship/Dashboard1?publish=yes" }
    ]
  },
  {
    id: 6,
    title: "Boston House Price Prediction",
    description: "Comparative regression study on the Boston housing dataset, evaluating regularization and model performance.",
    image: "/projects/project-6.svg",
    tools: ["Python", "Machine Learning", "Scikit-learn"],
    links: [
      { text: "View Project", url: "https://github.com/danielcp26/MIT_Data_Science_Projects/blob/main/Regression%20Project%20Boston%20House%20Price%20Prediction.ipynb" }
    ]
  },
  {
    id: 7,
    title: "COVID-19 Data Analysis (SQL)",
    description: "Advanced PostgreSQL queries, window functions and views applied to COVID-19 datasets for trend analysis.",
    image: "/projects/project-7.svg",
    tools: ["SQL", "PostgreSQL", "Data Analysis"],
    links: [
      { text: "View Project", url: "https://github.com/danielcp26/SQL_Projects/blob/main/CovidProjectSQL.sql" }
    ]
  },
  {
    id: 8,
    title: "Iris Flower Classification",
    description: "Baseline classifiers (LR/KNN/Tree/SVM) with hyperparameter tuning applied to the iris dataset.",
    image: "/projects/project-8.svg",
    tools: ["Python", "Machine Learning", "Scikit-learn"],
    links: [
      { text: "View Project", url: "https://github.com/danielcp26/ML_Projects/blob/main/Iris.ipynb" }
    ]
  },
  {
    id: 9,
    title: "British Airways Review Dashboard",
    description: "Customer satisfaction analysis and an interactive Tableau dashboard for airline service quality insights.",
    image: "/projects/project-9.svg",
    tools: ["Tableau", "Data Analysis"],
    links: [
      { text: "View Dashboard", url: "https://public.tableau.com/app/profile/daniel.chac.n.p.rez/viz/BritishAirwaysReview_17443423700870/Dashboard1?publish=yes" }
    ]
  },
  {
    id: 10,
    title: "Nashville Housing Data Cleaning",
    description: "SQL-driven data cleaning using SPLIT_PART, CASE and window functions to standardize housing datasets.",
    image: "/projects/project-10.svg",
    tools: ["SQL", "Data Analysis"],
    links: [
      { text: "View Project", url: "https://github.com/danielcp26/SQL_Projects/blob/main/Nashville_Housing.sql" }
    ]
  }
];

// Available tools for filtering
const availableTools = ["Python", "Machine Learning", "Data Analysis", "SQL", "PostgreSQL", "Tableau", "Power BI", "Azure ML", "Pandas", "Scikit-learn", "Interactive Dashboard"];

export default function Home() {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter projects based on selected tools
  useEffect(() => {
    if (selectedTools.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        selectedTools.some(tool => project.tools.includes(tool))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedTools]);

  const toggleTool = (tool: string) => {
    setSelectedTools(prev =>
      prev.includes(tool)
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  const clearFilters = () => {
    setSelectedTools([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean Hero Section */}
      <section className="relative pt-20 pb-24 flex flex-col items-center justify-center bg-gradient-to-b from-white to-emerald-50 overflow-hidden">
        {/* Science-themed Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating molecular structures */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-emerald-400/30 rounded-full animate-pulse">
            <div className="absolute top-8 left-8 w-3 h-3 bg-emerald-300/40 rounded-full"></div>
            <div className="absolute -top-2 left-6 w-2 h-2 bg-emerald-500/35 rounded-full"></div>
          </div>

          {/* DNA-like helix structure */}
          <div className="absolute top-1/4 right-1/4 animate-spin-slow">
            <div className="relative w-16 h-32">
              <div className="absolute top-0 left-0 w-2 h-2 bg-green-400/40 rounded-full"></div>
              <div className="absolute top-4 right-0 w-2 h-2 bg-green-300/40 rounded-full"></div>
              <div className="absolute top-8 left-0 w-2 h-2 bg-green-500/40 rounded-full"></div>
              <div className="absolute top-12 right-0 w-2 h-2 bg-green-400/40 rounded-full"></div>
              <div className="absolute top-16 left-0 w-2 h-2 bg-green-300/40 rounded-full"></div>
              <div className="absolute top-20 right-0 w-2 h-2 bg-green-500/40 rounded-full"></div>
              <div className="absolute top-24 left-0 w-2 h-2 bg-green-400/40 rounded-full"></div>
              <div className="absolute top-28 right-0 w-2 h-2 bg-green-300/40 rounded-full"></div>
            </div>
          </div>

          {/* Network connections */}
          <div className="absolute bottom-1/3 left-1/4">
            <div className="relative w-24 h-24 animate-pulse">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-emerald-400/30 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-emerald-300/30 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500/30 rounded-full"></div>
              <div className="absolute top-1/2 right-0 w-3 h-3 bg-emerald-400/30 rounded-full"></div>
              {/* Connection lines */}
              <div className="absolute top-2 left-1/2 w-px h-8 bg-emerald-400/20 rotate-45"></div>
              <div className="absolute top-2 left-1/2 w-px h-8 bg-emerald-400/20 -rotate-45"></div>
              <div className="absolute bottom-2 left-2 w-8 h-px bg-emerald-400/20"></div>
            </div>
          </div>

          {/* Floating geometric shapes */}
          <div className="absolute top-1/3 left-1/3 w-6 h-6 border border-emerald-400/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-8 h-8 border border-green-400/25 rounded-full animate-pulse"></div>

          {/* Data visualization elements */}
          <div className="absolute top-3/4 right-1/4">
            <div className="flex items-end space-x-1 animate-pulse">
              <div className="w-1 h-4 bg-emerald-400/30"></div>
              <div className="w-1 h-6 bg-emerald-300/30"></div>
              <div className="w-1 h-3 bg-emerald-500/30"></div>
              <div className="w-1 h-8 bg-emerald-400/30"></div>
              <div className="w-1 h-5 bg-emerald-300/30"></div>
            </div>
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="border border-emerald-400/30 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image - Better Centered */}
        <div className="relative z-10 mb-8 flex flex-col items-center">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-emerald-100 shadow-xl">
            <img
              src="https://ext.same-assets.com/433100065/550191876.jpeg"
              alt="Daniel Chacón Pérez"
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: 'center 15%' }}
            />
          </div>
          <div className="text-center mt-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">Daniel Chacón Pérez</h1>
            <p className="mt-2 text-lg text-gray-600">Data Scientist · Analyst · ML Enthusiast</p>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <a href="mailto:danielcp.26@hotmail.com" className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:opacity-95">Email</a>
            <a href="https://github.com/danielcp26" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">GitHub</a>
            <a href="https://www.linkedin.com/in/daniel-chacon-perez/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">LinkedIn</a>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDownIcon className="w-6 h-6" />
        </a>
      </section>

      {/* About Section with Modern HD Icons */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              I'm a data scientist and analyst who turns noisy datasets into decisions that move the business. I build end-to-end solutions—from data cleaning and feature engineering to predictive models and dashboards—using Python, SQL, and Tableau/Power BI. Trained as an industrial engineer, I focus on customer analytics, demand forecasting, and interpretable ML that stakeholders can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Analyzing Section - Modern Chart Icon */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Analyzing</h2>
              <p className="text-gray-600 leading-relaxed">
                Experienced in customer analytics, demand forecasting, and predictive modeling. I love extracting actionable business insights from complex datasets and building models for churn propensity and segmentation.
              </p>
            </div>

            {/* Developing Section - Modern Code Icon */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-slate-800 rounded-xl flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Developing</h2>
              <p className="text-gray-600 leading-relaxed">
                Proficient in Python (pandas, NumPy, scikit-learn), SQL (PostgreSQL/MySQL), and comfortable with Git and Excel. I build end-to-end machine learning pipelines from data cleaning to model deployment.
              </p>
            </div>

            {/* Visualizing Section - Modern Dashboard Icon */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Visualizing</h2>
              <p className="text-gray-600 leading-relaxed">
                Proficient using BI tools (Power BI, Tableau) for creating dashboards that stakeholders actually use. I communicate insights effectively through notebooks and interactive visualizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Selected Projects</h2>
            <p className="text-sm text-gray-500">Interactive filters available — click tags to filter</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-44 md:h-56 object-cover" />
                  <div className="absolute left-4 top-4 px-3 py-1 bg-emerald-600 text-white rounded-full text-xs">{project.tools[0]}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((t) => (
                      <button key={t} onClick={() => toggleTool(t)} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-2 bg-emerald-600 text-white rounded-lg hover:opacity-95">{link.text}</a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">© Daniel Chacón Pérez 2026</p>
          <p className="text-sm opacity-75">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
