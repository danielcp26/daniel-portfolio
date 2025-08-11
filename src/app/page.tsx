"use client";

import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Database,
  PenTool,
  FileText,
  BarChart3,
  Code
} from "lucide-react";

// Data Science Animation Component
const DataScienceAnimation = () => {
  // Generate data visualization elements
  const dataElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: (i * 25 + 15) % 90,
    top: (i * 17 + 20) % 80,
    delay: (i * 0.8) % 4,
    duration: 6 + (i % 3),
    type: i % 4, // 0: bar chart, 1: line chart, 2: pie chart, 3: data points
  }));

  const DataElement = ({ element }: { element: typeof dataElements[0] }) => {
    const baseClasses = "absolute opacity-60 text-blue-200";

    switch (element.type) {
      case 0: // Bar chart
        return (
          <div
            className={`${baseClasses} flex items-end space-x-1`}
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animation: `dataFloat ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="w-2 h-6 bg-blue-300 opacity-70"></div>
            <div className="w-2 h-4 bg-blue-400 opacity-70"></div>
            <div className="w-2 h-8 bg-blue-200 opacity-70"></div>
          </div>
        );
      case 1: // Line chart
        return (
          <div
            className={baseClasses}
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animation: `dataFloat ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <svg width="32" height="20" className="text-blue-300">
              <polyline
                points="0,15 8,8 16,12 24,4 32,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.7"
              />
            </svg>
          </div>
        );
      case 2: // Pie chart segment
        return (
          <div
            className={baseClasses}
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animation: `dataSpin ${element.duration}s linear infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="w-6 h-6 border-4 border-blue-300 border-t-transparent rounded-full opacity-60"></div>
          </div>
        );
      case 3: // Data points
        return (
          <div
            className={baseClasses}
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animation: `dataFloat ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
              <div className="w-1 h-1 bg-blue-200 rounded-full"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dataElements.map((element) => (
        <DataElement key={element.id} element={element} />
      ))}
    </div>
  );
};

// Simple particle background component
const ParticleBackground = () => {
  // Generate consistent positions for SSR/hydration
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: (i * 17 + 23) % 100,
    top: (i * 13 + 37) % 100,
    delay: (i * 0.3) % 2,
    duration: 2 + (i % 3),
  }));

  const lines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: (i * 23 + 41) % 100,
    top: (i * 19 + 29) % 100,
    rotation: (i * 47) % 360,
    duration: 3 + (i % 4),
    delay: (i * 0.5) % 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
        {lines.map((line) => (
          <div
            key={`line-${line.id}`}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"
            style={{
              left: `${line.left}%`,
              top: `${line.top}%`,
              transform: `rotate(${line.rotation}deg)`,
              animation: `float ${line.duration}s ease-in-out infinite`,
              animationDelay: `${line.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Particles */}
      <section id="particles-js" className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
        <ParticleBackground />
        <DataScienceAnimation />

        {/* Header Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-4">
            <span className="block text-5xl md:text-7xl font-light tracking-wide mb-2">
              Daniel Chacón Pérez
            </span>
            <span className="block text-2xl md:text-3xl font-light opacity-90">
              Data Scientist · Analyst · ML Enthusiast
            </span>
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 my-8">
            <a
              href="mailto:danielcp.26@hotmail.com"
              className="p-3 border-2 border-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
              aria-label="E-Mail"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/danielcp26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
              aria-label="Github"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-chacon-perez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://public.tableau.com/app/profile/daniel.chac.n.p.rez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
              aria-label="Tableau"
            >
              <BarChart3 size={24} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 text-lg font-light">
            <a
              href="#about"
              className="hover:text-blue-200 transition-colors duration-300"
            >
              About
            </a>
            <span className="text-blue-200">·</span>
            <a
              href="#projects"
              className="hover:text-blue-200 transition-colors duration-300"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Down Arrow */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Profile */}
          <div className="text-center mb-16">
            <img
              src="https://ugc.same-assets.com/ybhI6L0b3VFpz_VEugsbmMY0R6OISnbL.jpeg"
              alt="Daniel Chacón"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
            />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              I’m a data scientist and analyst who turns noisy datasets into decisions that move the business. I build end-to-end solutions—from data cleaning and feature engineering to predictive models and dashboards—using Python, SQL, and Tableau/Power BI. Trained as an industrial engineer, I focus on customer analytics, demand forecasting, and interpretable ML that stakeholders can trust.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Analyzing</h2>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Database size={48} className="text-blue-700" />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Experienced in customer analytics, demand forecasting, and predictive modeling. I love extracting actionable business insights from complex datasets and building models for churn propensity and segmentation.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Developing</h2>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Code size={48} className="text-blue-700" />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Proficient in Python (pandas, NumPy, scikit-learn), SQL (PostgreSQL/MySQL), and comfortable with Git and Excel. I build end-to-end machine learning pipelines from data cleaning to model deployment.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Visualizing</h2>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <BarChart3 size={48} className="text-blue-700" />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Proficient using BI tools (Power BI, Tableau) for creating dashboards that stakeholders actually use. I communicate insights effectively through notebooks and interactive visualizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-semibold text-center mb-16 text-gray-800">
            Featured Projects
          </h1>

          {/* Project 1 - Used Cars Price Prediction */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Used Cars Price Prediction"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                Used Cars Price Prediction
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                EDA + feature engineering + regression models to estimate used car prices. Comprehensive analysis using Python with pandas and scikit-learn.
              </p>
              <a
                href="https://github.com/danielcp26/MIT_Data_Science_Projects/blob/main/Used%20Cars%20Prediction.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 - Olympic Medals Prediction */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                Olympic Medals Prediction
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Predicting country medal counts using socio-economic features and machine learning. Advanced statistical modeling with Python.
              </p>
              <a
                href="https://github.com/danielcp26/Oeson_Internship/blob/main/Olympic_medals.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                View Project
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Olympic Medals Prediction"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Project 3 - Remote Work Analysis */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Remote Work Analysis"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                Remote Work Data Analysis
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Exploratory data analysis on remote vs onsite impacts with visualizations. Interactive dashboard for trends and employee well-being insights.
              </p>
              <div className="space-y-2">
                <a
                  href="https://github.com/danielcp26/Oeson_Internship/blob/main/Remote_Work.ipynb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mr-2 mb-2 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
                >
                  Python Analysis
                </a>
                <a
                  href="https://public.tableau.com/app/profile/daniel.chac.n.p.rez/viz/Capstone_Internship/Dashboard1?publish=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mr-2 mb-2 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
                >
                  Tableau Dashboard
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 - Boston House Price Prediction */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                Boston House Price Prediction
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Classic regression project comparing linear models with regularization. Comprehensive machine learning approach to real estate pricing.
              </p>
              <a
                href="https://github.com/danielcp26/MIT_Data_Science_Projects/blob/main/Regression%20Project%20Boston%20House%20Price%20Prediction.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                View Project
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Boston House Price Prediction"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Project 5 - COVID-19 Data Analysis */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
                alt="COVID-19 Data Analysis"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                COVID-19 Data Analysis with PostgreSQL
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Window functions, CTEs, and views on global COVID data. Advanced SQL techniques for comprehensive data exploration and insights.
              </p>
              <a
                href="https://github.com/danielcp26/SQL_Projects/blob/main/CovidProjectSQL.sql"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 6 - Iris Flower Classification */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                Iris Flower Classification
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Baseline classification with LR/KNN/Tree/SVM + GridSearchCV. Machine learning fundamentals applied to the classic iris dataset.
              </p>
              <a
                href="https://github.com/danielcp26/ML_Projects/blob/main/Iris.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                View Project
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80"
                alt="Iris Flower Classification"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Project 7 - British Airways Dashboard */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="British Airways Dashboard"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                British Airways Review Dashboard
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Customer satisfaction analysis across routes and segments. Interactive Tableau dashboard providing insights into airline service quality and performance metrics.
              </p>
              <a
                href="https://public.tableau.com/app/profile/daniel.chac.n.p.rez/viz/BritishAirwaysReview_17443423700870/Dashboard1?publish=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                View Dashboard
              </a>
            </div>
          </div>

          {/* Project 8 - Nashville Housing Data Cleaning */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                Nashville Housing Data Cleaning
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data standardization with SPLIT_PART, CASE, and ROW_NUMBER. Advanced SQL techniques for cleaning and preparing real estate data for analysis.
              </p>
              <a
                href="https://github.com/danielcp26/SQL_Projects/blob/main/Nashville_Housing.sql"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                View Project
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                alt="Nashville Housing Data"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">© Daniel Chacón Pérez 2025</p>
          <p className="text-sm opacity-75">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
