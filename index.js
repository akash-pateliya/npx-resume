#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const colors = {
  primary: chalk.cyan,
  secondary: chalk.yellow,
  success: chalk.green,
  info: chalk.blue,
  text: chalk.white,
  muted: chalk.gray,
  highlight: chalk.magenta
};

const resume = {
  name: 'Akash Pateliya',
  title: 'Senior Software Engineer',
  contact: {
    email: 'akash.pateliya@outlook.com',
    phone: '+91-7000478809',
    location: 'India',
    linkedin: 'https://linkedin.com/in/akashpateliya',
    github: 'https://github.com/akash-pateliya/'
  },
  summary: 'Experienced Senior Software Engineer with a strong background in backend systems, RESTful API development, and scalable web architectures. Proven ability to design and deliver performant microservices and web solutions in production-grade environments using Node.js, Angular, and cloud platforms like AWS.',
  skills: [
    'JavaScript', 'TypeScript', 'Angular', 'Node.js', 'MongoDB', '.NET', 'C#', 'SQL',
    'Express.js', 'Git', 'AWS', 'Redis', 'MySQL', 'Spring Boot', 'Java', 'Azure', 'WPF'
  ],
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'JiBe Shipping ERP',
      duration: 'April 2021 - Present',
      description: [
        '• Designed, developed, and optimized RESTful APIs using Node.js (Express), efficiently handling over 500,000 monthly requests in a microservices-based ecosystem.',
        '• Engineered backend services for a Crew Management Platform using Node.js and MongoDB, automating complex workflows related to crew onboarding for over 1,000 maritime professionals.',
        '• Built an integration bridge between web Angular and native desktop interfaces using custom protocol handlers, enabling smooth cross-platform interactions.',
        '• Enhanced system scalability and performance by integrating Redis caching and optimizing MongoDB indexes, resulting in a 40% reduction in database load and faster API responses.',
        '• Implemented secure JWT-based authentication and fine-grained role-based access control (RBAC) in Node.js APIs, ensuring secure and compliant access to application services.',
        '• Leveraged AWS services (EC2, S3, CloudWatch) for application deployment, logging, and storage, enabling a robust and scalable production environment.',
        '• Created responsive, cross-browser user interfaces using HTML5, CSS3, and Angular, enhancing usability and reducing bounce rates across key workflows.'
      ]
    }
  ],
  education: [
    {
      degree: 'Post Graduation Diploma in Advanced Computing',
      field: 'Advanced Computing',
      institution: 'CDAC - Vidyanidhi InfoTech Academy, Mumbai, India',
      year: 'February 2021'
    },
    {
      degree: 'Bachelor of Technology',
      field: 'Agricultural Engineering',
      institution: 'RDKF University, Bhopal, India',
      year: 'June 2019'
    }
  ],
  projects: [
    {
      name: 'Crew Management Platform',
      description: 'Backend services and APIs to automate crew onboarding workflows for maritime professionals.',
      technologies: 'Node.js, MongoDB, Redis, JWT, Angular, AWS (EC2, S3)'
    },
    {
      name: 'Vehicle Configurator (v-conf)',
      description: 'REST API-based web application to configure vehicles with real-time dropdown options and secure PDF invoicing.',
      technologies: 'JavaScript, Express.js, MySQL, AJAX, JavaMail, Jasypt'
    }
  ]
};


function createSection(title, content) {
  return `${colors.primary.bold(title)}\n${colors.muted('─'.repeat(50))}\n${content}\n`;
}

function buildResume() {
  let output = '';

  // Header
    const header = `${colors.highlight.bold(resume.name)}
${colors.secondary(resume.title)}

${colors.info('📧')} ${resume.contact.email}
${colors.info('📱')} ${resume.contact.phone}
${colors.info('📍')} ${resume.contact.location}
${colors.info('💼')} ${resume.contact.linkedin}
${colors.info('🔗')} ${resume.contact.github}`;

  output += createSection('CONTACT INFORMATION', header);

  // Summary
  output += createSection('PROFESSIONAL SUMMARY', colors.text(resume.summary));

  // Skills
  const skillsText = resume.skills.map(skill => colors.success(`• ${skill}`)).join('\n');
  output += createSection('TECHNICAL SKILLS', skillsText);

  // Experience
  let experienceText = '';
  resume.experience.forEach(exp => {
    experienceText += `${colors.highlight.bold(exp.title)} at ${colors.secondary.bold(exp.company)}\n`;
    experienceText += `${colors.muted(exp.duration)}\n`;
    exp.description.forEach(desc => {
      experienceText += `${colors.text(desc)}\n`;
    });
    experienceText += '\n';
  });
  output += createSection('WORK EXPERIENCE', experienceText);

  // Projects
  let projectsText = '';
  resume.projects.forEach(project => {
    projectsText += `${colors.highlight.bold(project.name)}\n`;
    projectsText += `${colors.text(project.description)}\n`;
    projectsText += `${colors.muted('Technologies: ' + project.technologies)}\n\n`;
  });
  output += createSection('PROJECTS', projectsText);

  // Education
  let educationText = '';
  resume.education.forEach(edu => {
    educationText += `${colors.highlight.bold(edu.degree)} - ${colors.secondary(edu.field)}\n`;
    educationText += `${colors.text(edu.institution)} (${colors.muted(edu.year)})\n`;
  });
  output += createSection('EDUCATION', educationText);

  return output;
}

function main() {
  console.clear();
  
  const resumeContent = buildResume();
  
  const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
    backgroundColor: 'black'
  };
  
  console.log(boxen(resumeContent, boxenOptions));
  
  // Footer
  console.log(colors.muted('\n📄 Thank you for viewing my resume!'));
  console.log(colors.info('💡 Run "npx akashpateliya" anytime to view this resume'));
  console.log(colors.success('🚀 Let\'s connect and build something amazing together!'));
}

main();