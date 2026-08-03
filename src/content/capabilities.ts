export type CapabilityId = "analysis" | "engineering" | "science";

export type Certification = {
  title: string;
  issuer: string;
  url: string;
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
      },
      {
        title:
          "Applied Data Science Program: Leveraging AI for Effective Decision-Making",
        issuer: "MIT Professional Education",
        url: "https://credentials.professional.mit.edu/49cd825e-fe38-4fc6-bac0-ea2981643e23#acc.GBE3VbSF",
      },
    ],
  },
];
