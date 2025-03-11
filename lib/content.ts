// Import site config from the JS file that can be shared with next.config.mjs
import { siteConfig as baseSiteConfig } from '../site-config.js';

// Content Types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  expandedContent: string;
  image: string;
}

export interface Insight {
  id: string;
  title: string;
  summary: string;
  url: string;
  expandedContent: string;
  image: string;
}

// Re-export the site config with any additional properties
export const siteConfig = {
  ...baseSiteConfig,
  // Add any TypeScript-specific properties here
};

// Skills data
export const skills = [
  { name: "Python, R, C/C++", color: "cyan" },
  { name: "SQL, NoSQL & Vector databases", color: "indigo" },
  { name: "AWS Cloud Platform", color: "orange" },
  { name: "Machine Learning", color: "blue" },
  { name: "Data Science & Engineering", color: "purple" },
  { name: "Statistical Modelling & Analysis", color: "green" },
];

// Job titles for typing animation
export const jobTitles = ["Data Science", "Data Engineering", "Machine Learning", "Analytics"];

// Projects data
export const projects: Project[] = [
  {
    id: "sentiment-analysis",
    title: "S&P 500 Company Removal Prediction",
    description:
      "Predicting S&P 500 Company Removals using Machine Learning algorithms.",
    technologies: ["Python", "Scikit-Learn", "Logistic Regression", "Support Vector Machines (SVM)", "Hyperparameter Tuning"],
    githubUrl: "https://github.com/yourusername/sentiment-analysis",
    demoUrl: "https://demo-sentiment.example.com",
    expandedContent:
      "This project predicts the likelihood of a company being removed from the S&P 500 index using machine learning. Timely identification of at-risk companies can help investors and analysts adjust portfolios, mitigate risks, and anticipate market shifts. By leveraging historical stock data and modeling techniques, the project provides a data-driven approach to understanding market dynamics. \
      - Collected historical data of S&P 500 companies since its inception from open source Yahoo Finance API. \
      - Performed comprehensive feature engineering to obtain a feature set that captures both short-term and long-term financial health of the stocks (price-based, fundamental, trend and lagged features). \
      - Applied scaling techniques such as Z-score Scaling and Robust Scaling. \
      - Trained baseline Logistic Regression Model, achieving ~85 accuracy. \
      - Trained SVM model, achieving ~90 accuracy. \
      - Performed hyperparameter tuning to improve the model performance, achieving ~95% accuracy. ",
    image: "/images/projects/sentiment-analysis.svg",
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance System",
    description:
      "An AI system that predicts equipment failures before they occur, reducing downtime and maintenance costs.",
    technologies: ["Python", "Scikit-learn", "Time Series Analysis", "Docker"],
    githubUrl: "https://github.com/yourusername/predictive-maintenance",
    expandedContent:
      "The predictive maintenance system uses sensor data and machine learning to forecast equipment failures up to 2 weeks in advance. By analyzing patterns in temperature, vibration, and other metrics, the system can detect anomalies that precede failures. Implementation at a manufacturing plant reduced unplanned downtime by 37% and maintenance costs by 28%. The solution includes real-time monitoring dashboards and automated alert systems.",
    image: "/images/projects/predictive-maintenance.svg",
  },
  {
    id: "image-classification",
    title: "Image Classification API",
    description: "A deep learning model that classifies images into different categories with high accuracy.",
    technologies: ["PyTorch", "FastAPI", "AWS Lambda", "React"],
    githubUrl: "https://github.com/yourusername/image-classifier",
    demoUrl: "https://image-classifier.example.com",
    expandedContent:
      "This image classification API uses a fine-tuned ResNet50 architecture to identify objects in images with 94% accuracy. The model was trained on ImageNet and further specialized for 150 custom categories. The system is deployed as a serverless application on AWS Lambda, with a React frontend for easy interaction. The API processes images in under 200ms and handles up to 1000 requests per minute.",
    image: "/images/projects/image-classification.svg",
  },
  {
    id: "data-viz-dashboard",
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets and extracting meaningful insights.",
    technologies: ["D3.js", "React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/data-viz-dashboard",
    demoUrl: "https://dashboard.example.com",
    expandedContent:
      "This interactive data visualization dashboard transforms complex datasets into intuitive visual representations. Built with D3.js and React, it features 15+ chart types, real-time filtering, and drill-down capabilities. The backend uses Node.js with MongoDB to efficiently handle large datasets. Users can create custom views, share insights, and export visualizations in multiple formats.",
    image: "/images/projects/data-viz-dashboard.svg",
  },
];

// Insights data
export const insights: Insight[] = [
  {
    id: "transformer-models",
    title: "Understanding Transformer Models in NLP",
    summary:
      "An in-depth look at how transformer models work and why they've revolutionized natural language processing.",
    url: "/insights/transformer-models",
    expandedContent:
      "Transformer models have fundamentally changed how we approach NLP tasks. This article explores the attention mechanism at the heart of transformers, explaining how self-attention allows these models to process text in parallel rather than sequentially. I break down the architecture of models like BERT and GPT, discuss their training methodology, and examine how they've advanced the state of the art in tasks from translation to question answering. The piece concludes with an analysis of current limitations and promising research directions.",
    image: "/images/insights/transformer-models.svg",
  },
  {
    id: "ml-optimization",
    title: "Optimizing Machine Learning Models for Production",
    summary:
      "Best practices for taking machine learning models from development to production while maintaining performance.",
    url: "/insights/ml-optimization",
    expandedContent:
      "The journey from a working model in a notebook to a production system serving millions of users presents numerous challenges. This article covers techniques for model optimization including quantization, pruning, and knowledge distillation to reduce computational requirements without sacrificing accuracy. I share strategies for efficient deployment using containers, model versioning, monitoring for performance drift, and implementing CI/CD pipelines for ML systems. The insights are drawn from my experience deploying models at scale across cloud and edge environments.",
    image: "/images/insights/ml-optimization.svg",
  },
  {
    id: "computer-vision-future",
    title: "The Future of Computer Vision",
    summary:
      "Examining emerging trends and technologies in computer vision and their potential impact on various industries.",
    url: "/insights/computer-vision-future",
    expandedContent:
      "Computer vision is rapidly evolving beyond basic object detection and classification. This article explores cutting-edge developments including few-shot learning, self-supervised visual representation learning, and neural radiance fields (NeRF) for 3D scene reconstruction. I analyze how these advances will transform industries from healthcare (enabling more accurate diagnostic imaging) to manufacturing (improving quality control) and autonomous vehicles (enhancing environmental perception). The piece also addresses computational challenges and the increasing importance of edge computing for real-time visual processing.",
    image: "/images/insights/computer-vision-future.svg",
  },
];

// Social links
export const socialLinks = {
  github: "https://github.com/ReddiarG",
  linkedin: "https://www.linkedin.com/in/girivardhana-reddiar/",
  email: "mailto:reddiarg@example.com",
  resume: "/resume.pdf",
};

// Personal info
export const personalInfo = {
  name: "Girivardhana Reddiar",
  bio: "I'm a data enthusiast, currently pursuing a Data Science (MS) program, \
    with 3+ years of experience specializing in designing & implimenting data engineering solutions. \
    Like the Voyager exploring the cosmos, I have embarked on an exciting journey, \
    navigating through the vast universe of Data Science, AI and Machine Learning \
    to discover insights and create impactful solutions.",
};

// Navigation sections
export const navigationSections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "insights", label: "Thoughts & Insights" },
];
