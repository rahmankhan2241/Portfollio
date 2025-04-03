export type Skill = {
  name: string;
  logo: string;
};

export type Experience = {
  company: string;
  logo: string;
  position: string;
  duration: string;
  description: string[];
};

export type Project = {
  title: string;
  image: string;
  video?: string;
  description: string;
  skills: string[];
  category: 'Excel' | 'Python' | 'Power BI' | 'SQL';
  link: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  logo: string;
  date: string;
  skills: string[];
  image: string;
};

export const skills: Skill[] = [
  { name: 'Excel', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'SQL', logo: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
  { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'Automation', logo: 'https://www.svgrepo.com/download/331794/automation.svg' },
  { name: 'Web Scraping', logo: 'https://www.svgrepo.com/download/283563/analytics-seo-and-web.svg' },
  { name: 'Google Sheets', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Google_Sheets_2020_Logo.svg' },
  { name: 'Machine Learning', logo: 'https://www.svgrepo.com/download/296553/robot.svg' },
  { name: 'App Script', logo: 'https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png' },
];

export const experiences: Experience[] = [
  {
    company: 'K12 Techno Services Pvt Ltd',
    logo: 'https://res.cloudinary.com/divva13vc/image/upload/v1743067777/Ahtesham_Portfollio/oo73zrqn5xvtusbslgb3.png',
    position: 'Data Analyst Intern',
    duration: 'June 2024 - Present',
    description: [
      'Collected, cleaned, and analyzed data from various sources to identify trends, generate insights, and support data-driven decision-making.',
      'Designed and developed interactive dashboards in Power BI to track social media and sales KPIs, reducing analysis time and improving decision-making.',
      'Built efficient data models using Power BI and Power Query to optimize report performance and scalability.',
      'Wrote complex DAX formulas to create measures and custom calculations enhancing reporting capabilities.',
      'Extracted and transformed data from SQL databases using optimized SQL queries for Power BI reporting.',
      'Delivered clear, actionable insights through data storytelling techniques in dashboards.',
      'Conducted ad-hoc analyses using Excel and Google Sheets as required.',
      'Worked closely with clients to identify key business challenges, analyze data-driven solutions, and deliver actionable insights.'
    ]
  },
  {
    company: 'Atem R Tech Solutions Pvt Ltd',
    logo: 'https://res.cloudinary.com/divva13vc/image/upload/v1743067776/Ahtesham_Portfollio/kv7gakm5zxcgstgx3lyj.png',
    position: 'Data Analyst',
    duration: 'Mar 2020 - Dec 2021',
    description: [
      'Utilized Excel for accurate data entry, leveraging advanced formulas like VLOOKUP , Data Validation , and more to enhance efficiency and reduce errors up to % .',
      ' Mentored new team members by providing guidance on processes and best practices, ensuring smooth onboarding and efficient workflow management to align with project goals',
      ' Collaborated with clients to understand their challenges and provided data-driven solutions to improve decision-making and efficiency'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Social Media Traffic Analysis Dashboard',
    image: 'https://res.cloudinary.com/dkptwn7nn/image/upload/v1743135202/Social_Media_Dashboard_image_yg4drk.png',
    video: 'https://res.cloudinary.com/dkptwn7nn/video/upload/v1743138584/Social_Media_Dashboard_mqawpi.mp4',
    description: 'Power BI Dashboard Visuals for Social Media Traffic Analysis',
    skills: ['Data Analysis', 'Data Visualization'],
    category: 'Power BI',
    link: 'https://app.powerbi.com/groups/me/reports/51a08bc1-fe83-435f-87e4-d0d43a41de74/2298b3577d09093470c0?experience=power-bi'
  },
  {
    title: 'E commerce Sales Analysis',
    image: 'https://res.cloudinary.com/dkptwn7nn/image/upload/v1743136015/ecommerce_sales_pxtzw7.jpg',
    video: '/python-project.mp4',
    description: 'Python-based customer segmentation using machine learning algorithms.',
    skills: ['Advanced dashboard','vlookup', 'hlookup',  'Pivot Chart', 'Pivot Table'],
    category: 'Excel',
    link: 'https://onedrive.live.com/personal/8900a99a426a5c07/_layouts/15/Doc.aspx?resid=8900A99A426A5C07!118&cid=8900A99A426A5C07&migratedtospo=true&app=Excel'
  },
  {
    title: 'Blikit Sales Analysis Dashboard',
    image: 'https://res.cloudinary.com/dkptwn7nn/image/upload/v1743139272/blinkit_zd3scf.png',
    video: '/powerbi-project.mp4',
    description: 'Interactive Power BI dashboard for blinkit sales.',
    skills: ['Power BI', 'DAX', 'Data Modeling', 'Data Visualziation'],
    category: 'Power BI',
    link: 'https://app.powerbi.com/groups/me/reports/b35ed9de-eced-4344-9b4b-6ce6dc3000d2/5aa2055e9dd2d8a35a4c?experience=power-bi'
  }
];

export const certificates: Certificate[] = [
  {
    title: 'Data Science Professional Certificate',
    issuer: 'DataCamp',
    logo: '/datacamp-logo.png',
    date: 'June 2023',
    skills: ['Python', 'Data Analysis', 'Machine Learning'],
    image: '/certificate1.jpg'
  },
  {
    title: 'Advanced SQL for Data Analysis',
    issuer: 'Udemy',
    logo: '/udemy-logo.png',
    date: 'March 2023',
    skills: ['SQL', 'Database Management'],
    image: '/certificate2.jpg'
  },
  {
    title: 'Power BI Desktop for Business Intelligence',
    issuer: 'Coursera',
    logo: '/coursera-logo.png',
    date: 'January 2023',
    skills: ['Power BI', 'Data Visualization', 'DAX'],
    image: '/certificate3.jpg'
  }
];
