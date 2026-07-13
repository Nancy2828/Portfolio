export const profile = {
  name: 'Nancy M',
  role: 'Frontend Developer',
  location: 'Coimbatore, India',
  phone: '9566585407',
  email: 'nancymariyadas@gmail.com',
  linkedin: 'https://linkedin.com/in/your-linkedin-here',
  github: 'https://github.com/your-github-here',
  tagline: 'I build responsive, scalable interfaces with React — turning designs into fast, accessible experiences.',
  about:
    "Frontend Developer with nearly one year of professional experience building responsive, scalable web applications with React.js, JavaScript (ES6+), HTML5 and CSS3. Comfortable across the stack with ASP.NET Core, Entity Framework Core and SQL Server, and focused on writing clean, reusable, component-driven code that ships high-quality, user-centric products.",
}

export const skills = {
  Frontend: [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'HTML5', level: 92 },
    { name: 'CSS3', level: 90 },
    { name: 'Responsive Design', level: 88 },
    { name: 'Angular', level: 70 },
  ],
  Backend: [
    { name: 'ASP.NET Core', level: 65 },
    { name: 'Entity Framework Core', level: 62 },
  ],
  Tools: [
    { name: 'Git / GitHub', level: 85 },
    { name: 'Chrome DevTools', level: 82 },
    { name: 'Postman', level: 78 },
    { name: 'Jira', level: 75 },
    { name: 'Figma', level: 70 },
    { name: 'Canva', level: 68 },
  ],
  Database: [{ name: 'SQL Server', level: 70 }],
}

export const counters = [
  { label: 'Months of professional experience', value: 12, suffix: '+' },
  { label: 'React projects shipped', value: 5, suffix: '+' },
  { label: 'Reusable components built', value: 30, suffix: '+' },
  { label: 'Core technologies', value: 10, suffix: '+' },
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Payoda Technologies',
    period: 'July 2025 — Present',
    points: [
      'Developed and maintained responsive, scalable web applications using React.js, JavaScript (ES6+), HTML5, and CSS3, delivering user-friendly, high-performance interfaces.',
      'Built reusable and modular React components using Hooks (useState, useEffect, useContext), implementing React Router, conditional rendering, and controlled forms.',
      'Integrated RESTful APIs using Axios and the Fetch API, managing asynchronous data fetching, error handling, and application state.',
      'Contributed to a widget-based UI architecture, including a React-based chatbot widget that enabled seamless integration across multiple web applications.',
      'Designed responsive, accessible interfaces using Material UI, ensuring cross-device compatibility.',
      'Collaborated with cross-functional teams using Git/GitHub, following component-based architecture and clean coding practices.',
    ],
  },
  {
    role: 'Web Developer — Internship',
    company: 'Payoda Technologies',
    period: 'Oct 2024 — June 2025',
    points: [
      'Developed responsive websites using WordPress, HTML5, CSS3, and JavaScript.',
      'Customized WordPress themes, templates, and page layouts based on business requirements.',
      'Created responsive, interactive web pages ensuring cross-browser compatibility and mobile responsiveness.',
      'Enhanced website functionality by implementing interactive UI elements and optimizing performance.',
      'Performed website testing, debugging, and maintenance to ensure a seamless user experience.',
    ],
  },
]

export const projects = [
  {
    title: 'Appointment Booking System',
    description:
      'A full-stack doctor appointment booking system with secure Admin, Doctor, and Patient modules supporting booking, rescheduling, cancellation, tracking, and dashboard management.',
    tech: ['ASP.NET Core Web API', 'Angular 15', 'Entity Framework Core', 'SQL Server', 'JWT Auth'],
    highlights: [
      'Designed responsive UIs in Angular 15, integrated with RESTful APIs for seamless data management.',
      'Implemented JWT authentication, role-based authorization, repository pattern, dependency injection, and unit testing.',
    ],
    link: '',
  },
  {
    title: 'Weather Forecast Application',
    description:
      'A responsive weather forecast app displaying conditions for today, tomorrow, and the next 5 days with dynamic city search.',
    tech: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'OpenWeather API'],
    highlights: [
      'Integrated the OpenWeather API with Axios and used React Hooks to manage state and real-time data.',
      'Built reusable components following component-based architecture and clean coding practices.',
    ],
    link: '',
  },
]

export const education = {
  degree: 'B.Sc Computer Science with Data Analytics',
  school: 'KPR College of Arts, Science and Research — Coimbatore',
  period: '2022 — 2025',
}

export const languages = ['English', 'Tamil']
