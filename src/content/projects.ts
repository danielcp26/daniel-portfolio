import { withBasePath } from "@/lib/basePath";

export const projects = [
  {
    id: 1,
    title: "CR Autos – Used Car Price Prediction",
    slug: "crautos",
    tags: ["Python", "Machine Learning", "Neural Network"],
    description:
      "Built a production-ready ML system to predict used car prices in Costa Rica using 10,600+ real listings; a Neural Network achieved the best test performance.",
    overview:
      "Built a machine learning system to predict used car prices in Costa Rica using 10,600+ real listings scraped from CRAutos. After comparing multiple regression models, a Neural Network (NN) achieved the best predictive performance on the test set.",
    context:
      "Costa Rica’s used car market lacks standardized pricing benchmarks. Listings vary significantly by mileage, vehicle age, brand, engine size, and location, making price estimation inconsistent for buyers and sellers. This project transforms raw marketplace data into a structured dataset and predictive pricing model.",
    objective:
      "Predict vehicle listing price based on available features and uncover market trends across mileage, vehicle age, brand & model, engine size, and province. The goal was to build a robust regression model capable of generalizing to unseen listings.",
    role: [
      "Data collection and web scraping of CRAutos listings",
      "Data cleaning, feature engineering, and exploratory analysis",
      "Model experimentation and evaluation across multiple regression approaches",
      "Dashboard creation to visualize pricing trends and model outputs",
    ],
    approach: [
      "Web scraped 10,600+ real vehicle listings from CRAutos",
      "Cleaned and standardized features (price, mileage, engine size, year, categorical attributes)",
      "Performed feature engineering (vehicle age, encoded categorical variables, numerical scaling)",
      "Trained and compared multiple regression models",
      "Selected a Neural Network (NN) as the best-performing model based on test performance metrics",
      "Built a Power BI dashboard to visualize pricing trends and market segmentation",
    ],
    insights: [
      "Average price: ~$21K",
      "Median mileage: ~114K km",
      "Clear negative relationship between mileage and price",
      "Toyota is the most listed brand",
      "San José shows the highest average price concentration",
      "Engine sizes between 1600–2000cc dominate the market",
      "Achieved R² = 0.84 (84%) on the test set",
    ],
    technologies: [
      "Python",
      "Pandas & NumPy",
      "Scikit-learn",
      "Neural Networks (MLP)",
      "XGBoost (model comparison)",
      "Web scraping",
      "Power BI",
    ],
    results: {
      metric: "Best Model",
      bestModel: "Neural Network (NN)",
      r2: "0.84 (84%)",
      description: "Achieved R² = 0.84 (84%) on the test set.",
    },
    link: "https://github.com/danielcp26/ML_Projects/blob/main/CRautos%20Prediction.ipynb",
    dashboardLink:
      "https://github.com/danielcp26/ML_Projects/blob/main/CrAutos%20Analysis.pdf",
    image: withBasePath("/images/projects/crautos/cover-retro.png"),
    images: {
      cover: withBasePath("/images/projects/crautos/cover-retro.png"),
      detail1: withBasePath("/images/projects/crautos/detail-1.webp"),
      detail2: withBasePath("/images/projects/crautos/detail-2.webp"),
    },
    period: "2024",
    category: "Data Science",
  },
  {
    id: 2,
    title: "Medical Assistance Bot",
    slug: "medical-assistant-bot",
    tags: ["Azure", "RAG", "LLM"],
    description:
      "AI-powered medical assistance chatbot using Retrieval-Augmented Generation on Azure ML Studio.",
    overview:
      "Developed a RAG-based medical assistant chatbot deployed on Azure ML Studio to help healthcare professionals retrieve accurate information from medical manuals and generate contextual diagnostic support.",
    context:
      "Healthcare professionals often need quick access to medical reference materials and diagnostic guidelines during patient consultations. Traditional search methods are time-consuming and may miss relevant context, impacting decision speed and accuracy.",
    objective:
      "Build a proof-of-concept chatbot that combines retrieval from medical knowledge bases with large language model generation to provide fast, accurate, and contextually relevant answers to medical queries.",
    role: [
      "RAG pipeline architecture design and implementation",
      "Document ingestion, preprocessing, and embedding generation",
      "Vector database setup and semantic retrieval optimization",
      "LLM integration, prompt engineering, and response evaluation",
      "Azure ML Studio deployment and API configuration",
    ],
    approach: [
      "Ingested and preprocessed medical reference documents (PDFs, text files)",
      "Generated embeddings using OpenAI's embedding models for semantic representation",
      "Built FAISS vector database for efficient similarity-based retrieval",
      "Implemented retrieval logic with LangChain to query relevant document chunks",
      "Connected OpenAI GPT models for response generation with retrieved context",
      "Added evaluation loop: measured answer accuracy, relevance, and hallucination rate",
      "Deployed on Azure ML Studio with REST API endpoints for querying",
    ],
    insights: [
      "Achieved 92% response accuracy on test medical queries",
      "RAG approach significantly reduced hallucinations vs. standalone LLM",
      "Retrieval performance improved with optimized chunk size and embedding strategy",
      "Demonstrated POC value: faster lookup times and contextually grounded answers for clinical staff",
    ],
    technologies: [
      "Azure ML Studio",
      "Python",
      "LangChain",
      "OpenAI API",
      "FAISS",
      "Vector Embeddings",
      "RAG",
    ],
    results: {
      metric: "Response Accuracy",
      value: "92%",
    },
    link: "https://github.com/danielcp26/MedicalAssistantBot",
    image: withBasePath(
      "/images/projects/medical-assistant-bot/cover-retro.png",
    ),
    images: {
      cover: withBasePath(
        "/images/projects/medical-assistant-bot/cover-retro.png",
      ),
      detail1: withBasePath(
        "/images/projects/medical-assistant-bot/detail-1.webp",
      ),
      detail2: withBasePath(
        "/images/projects/medical-assistant-bot/detail-2.webp",
      ),
    },
    period: "2024",
    category: "Data Science",
  },
  {
    id: 3,
    title: "Boston House Price Prediction",
    slug: "boston-housing",
    tags: ["Python", "Regression", "Analytics"],
    description:
      "Comparative regression analysis on the Boston housing dataset exploring multiple regression approaches.",
    overview:
      "Conducted a comparative regression study on the Boston housing dataset, evaluating Linear, Lasso, and Ridge regression to predict median home values with R² of 0.76.",
    context:
      "Housing price prediction is a fundamental regression problem in data science education and real estate applications. Understanding which regression technique works best and why provides insights into model selection and regularization trade-offs.",
    objective:
      "Compare multiple regression approaches on the Boston housing dataset to identify the best-performing model and understand the impact of regularization on prediction accuracy and feature importance.",
    role: [
      "Exploratory data analysis and visualization",
      "Feature correlation analysis and outlier detection",
      "Model training: Linear, Lasso, and Ridge regression",
      "Cross-validation and hyperparameter tuning",
      "Performance evaluation and residual analysis",
    ],
    approach: [
      "Performed EDA: distributions, correlations, outlier identification",
      "Analyzed feature relationships with target variable (median home value)",
      "Split data into training and test sets with stratification",
      "Trained three models: Linear Regression (baseline), Lasso (L1 regularization), Ridge (L2 regularization)",
      "Used cross-validation to tune alpha hyperparameters for Lasso and Ridge",
      "Evaluated with R², MAE, RMSE; analyzed residual plots for bias and variance",
      "Interpreted coefficients to understand feature importance and regularization effects",
    ],
    insights: [
      "Linear Regression achieved best R² of 0.76 on test set",
      "Lasso regression performed feature selection by shrinking some coefficients to zero",
      "Ridge regression provided slightly better generalization by controlling multicollinearity",
      "Key predictors: number of rooms (RM), % lower status population (LSTAT), and property tax (TAX)",
      "Residual analysis showed reasonable model fit with some heteroscedasticity at higher price ranges",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "NumPy",
    ],
    results: {
      metric: "R² Score",
      bestModel: "Linear Regression",
      value: "0.76",
    },
    link: "https://github.com/danielcp26/MIT_Data_Science_Projects/blob/main/Regression%20Project%20Boston%20House%20Price%20Prediction.ipynb",
    image: withBasePath("/images/projects/boston-housing/cover-retro.png"),
    images: {
      cover: withBasePath("/images/projects/boston-housing/cover-retro.png"),
      detail1: withBasePath("/images/projects/boston-housing/detail-1.webp"),
      detail2: withBasePath("/images/projects/boston-housing/detail-2.webp"),
    },
    period: "2024",
    category: "Data Science",
  },
  {
    id: 4,
    title: "COVID Data Analysis",
    slug: "covid-sql",
    tags: ["SQL", "PostgreSQL", "EDA"],
    description:
      "SQL-based exploratory data analysis of global COVID-19 data analyzing infection rates, mortality, and vaccination progress.",
    overview:
      "Performed SQL-based exploratory analysis on global COVID-19 case, death, and vaccination data across 200+ countries to identify infection trends, mortality rates, and vaccination coverage patterns.",
    context:
      "The COVID-19 pandemic generated massive datasets requiring analysis to understand disease spread, mortality impact, and vaccination progress. Decision-makers needed clear, data-driven insights from complex multi-source datasets.",
    objective:
      "Conduct comprehensive SQL EDA on COVID datasets to calculate infection rates, mortality rates, and vaccination coverage, and identify trends over time and across geographies.",
    role: [
      "Data import and schema design in PostgreSQL",
      "SQL query development for exploratory analysis",
      "Calculation of infection rates, death rates, and vaccination metrics",
      "Temporal trend analysis using window functions",
      "Cross-country and continent-level comparisons",
    ],
    approach: [
      "Imported COVID deaths and vaccinations datasets into PostgreSQL",
      "Joined deaths and vaccinations tables on location and date",
      "Calculated infection rate (cases / population), death rate (deaths / cases), and death percentage",
      "Used window functions (SUM OVER) to compute rolling vaccination totals",
      "Built CTEs to organize complex queries for readability and reuse",
      "Created temp table to store intermediate results for vaccination percentage calculations",
      "Created view for vaccination rollout tracking: % population vaccinated over time",
      "Analyzed trends by continent and country, identifying highest infection and death rates",
    ],
    insights: [
      "Tracked 200+ countries and identified regions with highest infection and mortality rates",
      "Rolling vaccination percentage revealed disparities in vaccine rollout speed across countries",
      "Window functions enabled efficient time-series analysis for trends and comparisons",
      "View creation provided reusable query layer for ongoing monitoring and reporting",
      "Analysis demonstrated advanced SQL techniques: CTEs, temp tables, window functions, and complex joins",
    ],
    technologies: [
      "PostgreSQL",
      "SQL",
      "pgAdmin",
      "Window Functions",
      "CTEs",
      "Temp Tables",
    ],
    results: {
      metric: "Countries Tracked",
      value: "200+",
    },
    link: "https://github.com/danielcp26/SQL_Projects/blob/main/CovidProjectSQL.sql",
    image: withBasePath("/images/projects/covid-sql/cover-retro.png"),
    images: {
      cover: withBasePath("/images/projects/covid-sql/cover-retro.png"),
      detail1: withBasePath("/images/projects/covid-sql/detail-1.webp"),
      detail2: withBasePath("/images/projects/covid-sql/detail-2.webp"),
    },
    period: "2023",
    category: "Data Analysis",
  },
  {
    id: 5,
    title: "Nashville Housing Data Cleaning",
    slug: "nashville-housing",
    tags: ["SQL", "PostgreSQL", "Data Engineering"],
    description:
      "Advanced SQL data cleaning using CTEs, window functions, and string manipulation for large housing datasets.",
    overview:
      "Cleaned and standardized 56,000+ Nashville housing transaction records using advanced SQL techniques including self-joins, string parsing, window functions, and deduplication.",
    context:
      "Raw real estate transaction data often contains inconsistencies, missing values, duplicates, and unstandardized formats. Clean, normalized data is essential for accurate analysis and reporting.",
    objective:
      "Transform messy Nashville housing data into a clean, analysis-ready dataset by addressing missing values, standardizing formats, parsing addresses, and removing duplicates using SQL.",
    role: [
      "Data quality assessment and cleaning strategy design",
      "SQL script development for data transformations",
      "Missing value imputation using self-joins",
      "Address parsing and normalization",
      "Duplicate detection and removal",
    ],
    approach: [
      "Populated missing PropertyAddress values using self-join on ParcelID and COALESCE",
      "Split PropertyAddress into separate columns (street, city) using SPLIT_PART function",
      "Parsed OwnerAddress into street, city, and state columns with SPLIT_PART on delimiter",
      "Standardized SoldAsVacant field from Y/N to Yes/No using CASE WHEN",
      "Identified duplicates with ROW_NUMBER() window function partitioned by key fields",
      "Deleted duplicate records where row_num > 1",
      "Dropped unused columns to streamline final dataset",
    ],
    insights: [
      "Successfully cleaned 56,000+ records, resolving missing addresses and standardizing formats",
      "Self-join approach efficiently filled missing property addresses by matching parcel IDs",
      "String parsing with SPLIT_PART enabled structured address components for geographic analysis",
      "Window function-based deduplication removed redundant records while preserving data integrity",
      "Demonstrated production-grade SQL data engineering best practices",
    ],
    technologies: [
      "PostgreSQL",
      "SQL",
      "Window Functions",
      "CTEs",
      "String Functions",
      "Data Cleaning",
    ],
    results: {
      metric: "Data Quality Improvement",
      description: "Processed and standardized 56,000+ property records",
    },
    link: "https://github.com/danielcp26/SQL_Projects/blob/main/Nashville_Housing.sql",
    image: withBasePath("/images/projects/nashville-housing/cover-retro.png"),
    images: {
      cover: withBasePath(
        "/images/projects/nashville-housing/cover-retro.png",
      ),
      detail1: withBasePath("/images/projects/nashville-housing/detail-1.webp"),
      detail2: withBasePath("/images/projects/nashville-housing/detail-2.webp"),
    },
    period: "2023",
    category: "Data Science",
  },
  {
    id: 6,
    title: "British Airways Review",
    slug: "british-airways",
    tags: ["Tableau", "Data Viz", "Analytics"],
    description:
      "Interactive Tableau dashboard analyzing British Airways customer reviews with sentiment analysis and KPI tracking.",
    overview:
      "Built an interactive Tableau dashboard analyzing 3,500+ British Airways customer reviews, visualizing ratings across service dimensions, time trends, geography, aircraft types, and traveler segments.",
    context:
      "Customer feedback is critical for airlines to identify service strengths and weaknesses. Analyzing review data at scale requires visual tools to uncover patterns in satisfaction across routes, aircraft, and service categories.",
    objective:
      "Create an interactive Tableau dashboard that enables stakeholders to explore British Airways review data by time, geography, service component, aircraft type, and traveler demographics to drive service improvements.",
    role: [
      "Data preparation and cleaning in Excel/Python",
      "Tableau dashboard design and layout",
      "Calculated fields for KPIs and metrics",
      "Interactive filters and parameters for user exploration",
      "Geographic and time-series visualization",
    ],
    approach: [
      "Collected and cleaned 3,500+ British Airways reviews from public sources",
      "Structured data with dimensions: date, country, aircraft, traveler type, seat type, service ratings",
      "Designed multi-chart dashboard: KPI summary, time trends, world map, aircraft comparison, review counts",
      "Built calculated fields for average ratings by service category (cabin staff, entertainment, food, ground service)",
      "Added parameters for dynamic filtering by date range, country, and traveler type",
      "Created geographic heatmap showing review distribution and average rating by country",
      "Built bar charts comparing ratings across aircraft types and seat classes",
      "Designed time-series line chart showing rating trends over months/years",
    ],
    insights: [
      "Analyzed 3,500+ reviews, revealing service category strengths and improvement areas",
      "Geographic analysis showed rating variations across regions and routes",
      "Time-series trends identified periods of rating decline, correlating with operational changes",
      "Aircraft comparison highlighted passenger preference differences by plane model",
      "Interactive dashboard enabled stakeholders to drill down into specific traveler segments and service issues",
    ],
    technologies: [
      "Tableau",
      "Excel",
      "Python",
      "Data Visualization",
      "KPI Design",
    ],
    results: {
      metric: "Reviews Analyzed",
      value: "3,500+",
    },
    link: "https://public.tableau.com/views/BritishAirwaysReview_17443423700870/Dashboard1?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    image: withBasePath("/images/projects/british-airways/cover-retro.png"),
    images: {
      cover: withBasePath("/images/projects/british-airways/cover-retro.png"),
      detail1: withBasePath("/images/projects/british-airways/detail-1.webp"),
      detail2: withBasePath("/images/projects/british-airways/detail-2.webp"),
    },
    period: "2024",
    category: "Data Analysis",
  },
  {
    id: 7,
    title: "SmartData Databricks Lakehouse Pipeline",
    slug: "smartdata-databricks",
    tags: ["Databricks", "PySpark", "Delta Lake"],
    description:
      "Built an Azure Databricks lakehouse ETL pipeline for Olist e-commerce data using Medallion architecture, Unity Catalog, ADLS Gen2, and CI/CD deployment.",
    overview:
      "Designed and implemented a cloud data engineering project in Azure Databricks that transforms raw Olist e-commerce datasets through Bronze, Silver, and Golden lakehouse layers for curated analytics and reliable downstream reporting.",
    context:
      "Modern analytics teams need governed, repeatable pipelines that turn raw operational data into trusted business-ready tables. This project demonstrates a complete Databricks workflow using cloud storage, Delta Lake, catalog governance, and automated deployment practices.",
    objective:
      "Build a production-style data pipeline that ingests raw e-commerce files, applies transformations and quality rules across Medallion layers, and publishes curated datasets for analytics consumption.",
    role: [
      "Lakehouse architecture design using Bronze, Silver, and Golden layers",
      "PySpark ETL development in Azure Databricks notebooks",
      "Delta Lake table creation and transformation workflow implementation",
      "Unity Catalog organization and access-control setup",
      "GitHub Actions deployment workflow configuration",
    ],
    approach: [
      "Ingested Olist e-commerce datasets into Azure Data Lake Storage Gen2",
      "Created Bronze raw ingestion tables to preserve source-level data",
      "Built Silver transformations for cleaning, standardization, joins, and quality checks",
      "Modeled Golden analytics tables for business-ready reporting and downstream analysis",
      "Organized assets through Unity Catalog and workspace structure",
      "Configured repository-driven deployment patterns with GitHub Actions",
    ],
    insights: [
      "Implemented an end-to-end Medallion architecture workflow",
      "Separated raw, cleaned, and analytics-ready datasets for stronger governance",
      "Used PySpark and Delta Lake patterns suited for scalable cloud transformation",
      "Demonstrated practical Databricks project organization and deployment",
    ],
    technologies: [
      "Azure Databricks",
      "PySpark",
      "Delta Lake",
      "Unity Catalog",
      "ADLS Gen2",
      "GitHub Actions",
      "Medallion Architecture",
    ],
    results: {
      metric: "Pipeline Architecture",
      value: "Bronze / Silver / Golden",
      description:
        "Delivered a structured lakehouse pipeline from raw e-commerce data to curated analytics layers.",
    },
    link: "https://github.com/danielcp26/SmartData_Databricks_Project_",
    image: withBasePath(
      "/images/projects/smartdata-databricks/cover-retro.png",
    ),
    images: {
      cover: withBasePath(
        "/images/projects/smartdata-databricks/cover-retro.png",
      ),
      detail1: withBasePath(
        "/images/projects/smartdata-databricks/dashboard-overview.png",
      ),
    },
    period: "2025",
    category: "Data Engineering",
  },
];
