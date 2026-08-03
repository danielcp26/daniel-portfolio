import { withBasePath } from "@/lib/basePath";

export type CapabilityId = "analysis" | "engineering" | "science";

export type Certification = {
  title: string;
  issuer: string;
  url: string;
  thumbnail: string;
};

export type Capability = {
  id: CapabilityId;
  label: string;
  summary: string;
  projectCategory: string;
  certifications: Certification[];
};

export const capabilities: Capability[] = [
  {
    id: "analysis",
    label: "Data Analysis",
    projectCategory: "Data Analysis",
    summary:
      "Dashboards, SQL exploration, KPI tracking, and business-facing analytics built for clear decision-making.",
    certifications: [
      {
        title: "Microsoft Certified: Power BI Data Analyst Associate",
        issuer: "Microsoft",
        url: "https://learn.microsoft.com/en-us/users/danielchacon-3747/credentials/b5e5c3cb01d412db?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        thumbnail: withBasePath(
          "/images/certifications/microsoft-certified-associate-badge.svg",
        ),
      },
    ],
  },
  {
    id: "engineering",
    label: "Data Engineering",
    projectCategory: "Data Engineering",
    summary:
      "ETL pipelines, lakehouse architecture, cloud data platforms, and production-grade data workflows.",
    certifications: [
      {
        title: "Ingenieria de Datos e IA con Databricks",
        issuer: "SmartData",
        url: "https://smartdata.com.pe/certificados/index.php?id=56428",
        thumbnail: withBasePath(
          "/images/certifications/smartdata-databricks.svg",
        ),
      },
      {
        title: "Academy Accreditation - Platform Administrator",
        issuer: "Databricks",
        url: "https://credentials.databricks.com/79aa7d42-6dd1-4c8c-bc79-b36882f704ee#acc.RD6NFzfr",
        thumbnail: withBasePath(
          "/images/certifications/databricks-platform-admin.png",
        ),
      },
      {
        title: "Academy Accreditation - Databricks Fundamentals",
        issuer: "Databricks",
        url: "https://credentials.databricks.com/a842f40b-99ea-4199-8ff5-2a9380130bab#acc.ZFrta3e4",
        thumbnail: withBasePath(
          "/images/certifications/databricks-fundamentals.png",
        ),
      },
    ],
  },
  {
    id: "science",
    label: "Data Science",
    projectCategory: "Data Science",
    summary:
      "Machine learning, predictive modeling, applied AI, and experimentation for measurable outcomes.",
    certifications: [
      {
        title: "Microsoft AI Professional Program (AI to OpenAI)",
        issuer: "Great Learning / Microsoft",
        url: "https://www.mygreatlearning.com/certificate/NLLYWBCX",
        thumbnail: withBasePath("/images/certifications/microsoft-ai.svg"),
      },
      {
        title:
          "Applied Data Science Program: Leveraging AI for Effective Decision-Making",
        issuer: "MIT Professional Education",
        url: "https://credentials.professional.mit.edu/49cd825e-fe38-4fc6-bac0-ea2981643e23#acc.GBE3VbSF",
        thumbnail: withBasePath("/images/certifications/mit-data-science.svg"),
      },
      {
        title: "Databases and SQL for Data Science with Python",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/verify/MS1JSG5VQV0E",
        thumbnail: withBasePath("/images/certifications/ibm-sql-python.svg"),
      },
    ],
  },
];
