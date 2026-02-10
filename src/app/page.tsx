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
      {/* Enhanced Hero Section with Darker Science Theme */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-green-950 to-slate-900 overflow-hidden">
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
        <div className="relative z-10 mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src="https://ext.same-assets.com/433100065/550191876.jpeg"
              alt="Daniel Chacón Pérez"
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: 'center 15%' }}
            />
          </div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="mb-4">
            <span className="block text-5xl md:text-7xl font-light tracking-wide mb-2">Daniel Chacón Pérez</span>
            <span className="block text-2xl md:text-3xl font-light opacity-90">Data Scientist · Analyst · ML Enthusiast</span>
          </h1>

          <div className="flex justify-center space-x-6 my-8">
            <a href="mailto:danielcp.26@hotmail.com" className="p-3 border-2 border-white rounded-full hover:bg-white hover:text-green-900 transition-all duration-300" aria-label="E-Mail">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
            <a href="https://github.com/danielcp26" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-white rounded-full hover:bg-white hover:text-green-900 transition-all duration-300" aria-label="Github">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/daniel-chacon-perez/" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-white rounded-full hover:bg-white hover:text-green-900 transition-all duration-300" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://public.tableau.com/app/profile/daniel.chac.n.p.rez" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-white rounded-full hover:bg-white hover:text-green-900 transition-all duration-300" aria-label="Tableau">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.678 5.984V2.1h1.645v3.884h3.884v1.645h-3.884v3.884h-1.645V7.629H7.794V5.984h3.884zm6.616 6.616V9.716h.822v2.884h2.884v.822H19.116v2.884h-.822V13.422h-2.884V12.6h2.884zM5.484 12.6v2.884H4.662V12.6H1.778v-.822h2.884V8.894h.822v2.884h2.884v.822H5.484zm6.616 5.484v-1.645H8.616v-.822H12.1v-1.645h.822v1.645h3.484v.822H12.922v1.645h-.822zm-8.778-8.778V7.661h.822v1.645h1.645v.822H3.322v1.645h-.822V10.128H.855V9.306H2.5z"></path>
              </svg>
            </a>
          </div>

          <div className="flex justify-center space-x-8 text-lg font-light">
            <a href="#about" className="hover:text-emerald-200 transition-colors duration-300">About</a>
            <span className="text-emerald-200">·</span>
            <a href="#projects" className="hover:text-emerald-200 transition-colors duration-300">Projects</a>
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

      {/* Projects Section with Tool Filtering */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">Featured Projects</h1>

          {/* Tool Filter */}
          <div className="mb-12">
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-between w-full max-w-md mx-auto bg-white border border-gray-300 rounded-lg px-4 py-3 text-left hover:border-blue-500 transition-colors duration-200"
              >
                <span className="text-gray-700">
                  {selectedTools.length === 0 ? 'Filter by tools' : `${selectedTools.length} tools selected`}
                </span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>

              {isFilterOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {availableTools.map((tool) => (
                      <label key={tool} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedTools.includes(tool)}
                            onChange={() => toggleTool(tool)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                            selectedTools.includes(tool)
                              ? 'bg-blue-500 border-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedTools.includes(tool) && (
                              <CheckIcon className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-gray-700">{tool}</span>
                      </label>
                    ))}
                  </div>
                  {selectedTools.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="w-full text-sm text-blue-600 hover:text-blue-800 py-2"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Selected Tools Display */}
            {selectedTools.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {selectedTools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {tool}
                    <button
                      onClick={() => toggleTool(tool)}
                      className="ml-2 hover:text-blue-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="space-y-20">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
                  <div className="relative group overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'order-2 md:order-1' : 'order-1 md:order-2'}`}>
                  <h3 className="text-3xl font-semibold mb-4 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Tool Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-sm bg-emerald-50 text-emerald-800 rounded-full shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="space-y-2">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 mr-2 mb-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg shadow-sm hover:opacity-90 transition-opacity duration-200"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found with the selected tools.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
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
