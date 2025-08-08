import React, { useEffect, useMemo, useState } from 'react';

const Chip = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={
      `px-3 py-1.5 rounded-full text-sm border transition ` +
      (active
        ? 'bg-blue-600 text-white border-blue-600 shadow'
        : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800')
    }
  >{children}</button>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const saved = localStorage.getItem('dc_dark');
    if (saved) setDarkMode(saved === '1');
  }, []);
  useEffect(() => {
    localStorage.setItem('dc_dark', darkMode ? '1' : '0');
  }, [darkMode]);

  const projects = [
    { title: 'Used Cars Price Prediction', image: './images/used-cars.png', link: 'https://github.com/danielcp26/MIT_Data_Science_Projects/blob/main/Used%20Cars%20Prediction.ipynb', tools: ['Python'], blurb: 'EDA + feature engineering + regression models to estimate used car prices.' },
    { title: 'Boston House Price Prediction', image: './images/boston-house.png', link: 'https://github.com/danielcp26/MIT_Data_Science_Projects/blob/main/Regression%20Project%20Boston%20House%20Price%20Prediction.ipynb', tools: ['Python'], blurb: 'Classic regression project comparing linear models with regularization.' },
    { title: 'Olympic Medals Prediction', image: './images/olympic-medals.png', link: 'https://github.com/danielcp26/Oeson_Internship/blob/main/Olympic_medals.ipynb', tools: ['Python'], blurb: 'Predicting country medal counts using socio‑economic features and ML.' },
    { title: 'Iris Flower Classification', image: './images/iris-flower.png', link: 'https://github.com/danielcp26/ML_Projects/blob/main/Iris.ipynb', tools: ['Python'], blurb: 'Baseline classification with LR/KNN/Tree/SVM + GridSearchCV.' },
    { title: 'Remote Work Data Analysis (Python)', image: './images/remote-work.png', link: 'https://github.com/danielcp26/Oeson_Internship/blob/main/Remote_Work.ipynb', tools: ['Python', 'Power BI/Tableau'], blurb: 'Exploratory data analysis on remote vs onsite impacts with visuals.' },
    { title: 'Remote Work Tableau Dashboard', image: './images/remote-dashboard.png', link: 'https://public.tableau.com/app/profile/daniel.chac.n.p.rez/viz/Capstone_Internship/Dashboard1?publish=yes', tools: ['Power BI/Tableau'], blurb: 'Interactive dashboard for trends and employee well‑being.' },
    { title: 'COVID‑19 Data Analysis with PostgreSQL', image: './images/covid-sql.png', link: 'https://github.com/danielcp26/SQL_Projects/blob/main/CovidProjectSQL.sql', tools: ['SQL'], blurb: 'Window functions, CTEs, and views on global COVID data.' },
    { title: 'Nashville Housing Data Cleaning (SQL)', image: './images/nashville-sql.png', link: 'https://github.com/danielcp26/SQL_Projects/blob/main/Nashville_Housing.sql', tools: ['SQL'], blurb: 'Data standardization with SPLIT_PART, CASE, and ROW_NUMBER.' },
    { title: 'British Airways Review Tableau Dashboard', image: './images/british-airways.png', link: 'https://public.tableau.com/app/profile/daniel.chac.n.p.rez/viz/BritishAirwaysReview_17443423700870/Dashboard1?publish=yes', tools: ['Power BI/Tableau'], blurb: 'Customer satisfaction analysis across routes and segments.' },
  ];

  const filters = ['All', 'Python', 'SQL', 'Power BI/Tableau'];
  const filteredProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter(p => p.tools.includes(filter))),
    [filter]
  );

  return (
    <div className={darkMode ? 'dark bg-gray-950 text-gray-100' : 'bg-gradient-to-b from-white to-gray-50 text-gray-900'}>
      <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-950/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight">Daniel Chacón</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <button onClick={() => setDarkMode(v => !v)} className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700">
              {darkMode ? '☀' : '🌙'}
            </button>
          </nav>
          <a href="./CV_DanielCP.pdf" download className="hidden sm:inline-flex px-3 py-1.5 rounded-md bg-blue-600 text-white">Download CV</a>
        </div>
      </header>

      <section id="home" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-200/30 via-fuchsia-200/30 to-transparent dark:from-indigo-500/10 dark:via-fuchsia-500/10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
          <img src="./images/profile.png" alt="Profile" className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-lg" />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Daniel Chacón</h1>
            <p className="text-lg mt-1 text-gray-600 dark:text-gray-300">Data Scientist · Analyst · ML Enthusiast</p>
            <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-300">
              I turn messy data into clear, actionable insights. Recent work spans customer analytics, demand forecasting,
              and predictive modeling. Comfortable across the stack: data cleaning, feature engineering, visualization, and deploying results.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md bg-blue-600 text-white">View Projects</a>
              <a href="mailto:danielcp.26@hotmail.com" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Email Me</a>
              <a href="./CV_DanielCP.pdf" download className="px-4 py-2 rounded-md border border-blue-200 text-blue-700 dark:border-blue-900 dark:text-blue-300">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>Background in <strong>Industrial Engineering</strong> (process, quality, and productivity). Pivoted into data to solve real business problems.</li>
            <li><strong>Stack:</strong> Python (pandas, NumPy, scikit‑learn), SQL (PostgreSQL/MySQL), and BI (Power BI, Tableau). Comfortable with Git and Excel.</li>
            <li>Built models for <strong>churn propensity</strong>, <strong>demand forecasting</strong>, and <strong>segmentation</strong>; delivered dashboards stakeholders actually use.</li>
            <li>Languages: Spanish (Native), English (TOEFL 94), Portuguese (Basic).</li>
          </ul>
        </div>
        <div id="experience">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-5">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-gray-900/40">
              <div className="flex justify-between"><strong>BMA Group — 3D Quality Analyst</strong><span className="text-sm opacity-70">Jun 2021 – Present · Remote</span></div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Quality control and audits for 3D datasets used in autonomous drone navigation.</li>
                <li>Led process improvements to reduce labeling errors and speed up throughput.</li>
                <li>Collaborated with engineers to tighten feedback loops and standards.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-gray-900/40">
              <div className="flex justify-between"><strong>Lollipops Agency — Data Science Specialist</strong><span className="text-sm opacity-70">May 2024 – Nov 2024 · Remote</span></div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Customer analytics and <strong>segmentation</strong> for targeted campaigns.</li>
                <li>Built predictive models for <strong>churn</strong> and <strong>demand</strong> forecasting.</li>
                <li>Published BI dashboards to inform non‑technical stakeholders.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-gray-900/40">
              <div className="flex justify-between"><strong>Oeson — Data Science Intern</strong><span className="text-sm opacity-70">Aug 2024 – Nov 2024 · Remote</span></div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Projects: Olympic medals prediction, PISA reading scores, remote work trends.</li>
                <li>Hands‑on preprocessing, statistics, and regression/classification in Python.</li>
                <li>Communicated insights via notebooks and dashboards.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="flex items-center gap-2">
            {['All', 'Python', 'SQL', 'Power BI/Tableau'].map(f => (
              <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</Chip>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, idx) => (
            <a key={idx} href={p.link} target="_blank" rel="noreferrer" className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow hover:shadow-lg transition">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold leading-tight">{p.title}</h3>
                  <div className="flex gap-1">
                    {p.tools.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-900">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{p.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm opacity-75">© {new Date().getFullYear()} Daniel Chacón — Built with React & Tailwind</footer>
    </div>
  );
}
