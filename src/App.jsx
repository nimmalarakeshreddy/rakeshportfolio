import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Terminal, Database, Cloud, Briefcase, GraduationCap } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Form from './form';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
      {/* Side Navigation - Desktop */}
      <nav className="hidden lg:flex flex-col w-64 bg-zinc-900 p-8 fixed h-full">
        <div className="mb-12">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            Rakesh Reddy Nimmala
          </h2>
          <p className="text-zinc-400 mt-2">Frontend Developer</p>
        </div>
        <div className="space-y-6">
          <a href="#about" className="block text-zinc-400 hover:text-white transition-colors">About</a>
          <a href="#experience" className="block text-zinc-400 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="block text-zinc-400 hover:text-white transition-colors">Projects</a>
          <a href="#education" className="block text-zinc-400 hover:text-white transition-colors">Education</a>
          <a href="#skills" className="block text-zinc-400 hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="block text-zinc-400 hover:text-white transition-colors">Contact</a>
        </div>
        <div className="mt-auto">
          <div className="flex space-x-4">
            <a href="https://github.com/nimmalarakeshreddy" className="text-zinc-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rakeshn7/" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:rakeshreddynimmala7@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 text-white bg-zinc-800 p-2 rounded-full"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center">
          <div className="space-y-8 text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Rakesh Reddy Nimmala
            </h2>
            <p className="text-zinc-400 mt-2">Frontend Developer</p>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-2xl text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block text-2xl text-zinc-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block text-2xl text-zinc-400 hover:text-white transition-colors">Projects</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="block text-2xl text-zinc-400 hover:text-white transition-colors">Education</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block text-2xl text-zinc-400 hover:text-white transition-colors">Skills</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-2xl text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center p-8 lg:p-16 bg-gradient-to-br from-zinc-900 to-black">
          <div>
            <h2 className="lg:hidden text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Rakesh Reddy Nimmala
            </h2>
            <p className="lg:hidden text-zinc-400 mt-2">Frontend Developer</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-2">
              Transforming Technology</h1>
            <span className="text-5xl lg:text-5xl font-bold block mt-2 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent mb-6">
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer',
                    'Expert in React.js & Angular',
                    'Building Scalable Web Applications',
                    'Enhancing User Experience with Modern UI/UX',
                    'WordPress & HTML/CSS Specialist',
                    'AWS & Cloud Enthusiast',
                    'Driving Digital Innovation with Agile Development'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>

            <p className="text-xl text-zinc-400 max-w-2xl mb-8">
              Frontend Developer with 5+ years of experience building web solutions —
              from WordPress and HTML/CSS-based websites to enterprise-grade React and Angular SPAs.
              Skilled in TypeScript, state management, REST API integration, and frontend performance optimization.
              I deliver polished, accessible, and high-performance user experiences in Agile environments.
              Let's build something amazing together!
            </p>
            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-8 lg:px-16 bg-zinc-900">
          <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
          <div className="space-y-12">
            {[
              {
                title: "Frontend Developer",
                company: "ExxonMobil",
                period: "Jul 2024 – Present",
                location: "Remote",
                description: [
                  "Contributing to the frontend development of an enterprise-grade platform using React 18, Angular, and TypeScript, building and maintaining scalable UI modules aligned with the team's design system.",
                  "Developing Angular-based modules using component architecture, reactive forms, RxJS observables, and NgRx for state management across complex multi-step workflows.",
                  "Building responsive and accessible interfaces using Tailwind CSS and Material UI, translating Figma wireframes into clean, browser-compatible screens following WCAG 2.1 guidelines.",
                  "Implemented reusable React and Angular components with strong TypeScript typing, reducing duplication across modules and improving team-wide code consistency.",
                  "Integrated frontend modules with RESTful APIs, handling async data flows using React Query and RxJS, and managing global state with Redux Toolkit and NgRx.",
                  "Applied performance optimization techniques including lazy loading, code splitting, and memoization to improve page load times and interaction responsiveness.",
                  "Wrote unit and component tests using Jest, React Testing Library, Jasmine, and Karma, contributing to improved test coverage across critical UI flows.",
                  "Actively participated in Agile sprint ceremonies including daily standups, sprint planning, and retrospectives within a cross-functional team."
                ]
              },
              {
                title: "Junior Frontend Developer",
                company: "Multiplier Solutions",
                period: "Jan 2021 – Jul 2022",
                location: "Hyderabad, India",
                description: [
                  "Built and maintained React.js-based web applications, developing reusable functional components using React Hooks (useState, useEffect, useContext) and managing state with Redux and Context API.",
                  "Developed responsive, cross-browser-compatible UI layouts using HTML5, CSS3, Flexbox, Grid, and Bootstrap, translating Figma designs into polished interfaces.",
                  "Integrated RESTful APIs using Axios to fetch and display dynamic data, implementing loading states, error handling, and data caching within React components.",
                  "Implemented client-side routing using React Router, setting up protected routes and dynamic navigation across multi-page React applications.",
                  "Built and optimized WordPress-based pages for client projects, customizing themes, managing plugins, and improving frontend performance through asset minification.",
                  "Gained working knowledge of Angular by building small feature modules, working with Angular components, templates, and basic RxJS observables.",
                  "Identified and resolved UI bugs reported during QA cycles, improving visual consistency and functional reliability across key pages.",
                  "Participated in sprint planning, daily standups, and retrospectives, building solid familiarity with Agile development practices."
                ]
              },
              {
                title: "Junior Web Developer",
                company: "Multiplier Solutions",
                period: "Jan 2020 – Dec 2020",
                location: "Hyderabad, India",
                description: [
                  "Converted PSD and Figma design mockups into clean, semantic, and pixel-perfect HTML5/CSS3 web pages, ensuring full cross-browser compatibility across Chrome, Firefox, Safari, and Edge.",
                  "Developed and customized WordPress websites for small and medium-sized businesses, including theme setup, plugin integration, and page builder configuration using Elementor.",
                  "Built and maintained WooCommerce-based e-commerce pages, configuring product listings, payment gateways, and checkout flows as per client requirements.",
                  "Created custom WordPress child themes by modifying PHP templates, custom CSS overrides, and template hierarchy adjustments to match client branding guidelines.",
                  "Wrote basic PHP scripts to extend WordPress functionality including custom post types, shortcodes, and form handling logic.",
                  "Implemented responsive layouts using Bootstrap and CSS Flexbox, ensuring websites rendered correctly across desktops, tablets, and mobile devices.",
                  "Applied basic SEO practices including meta tags, structured headings, alt text, and sitemap configuration to improve search visibility.",
                  "Maintained and updated existing client websites with content changes, plugin upgrades, and bug fixes, ensuring uptime and visual consistency."
                ]
              }
            ].map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Briefcase size={14} />
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-blue-400">{job.company}</p>
                  <p className="text-sm text-zinc-400">{job.period} | {job.location}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-zinc-400">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-8 lg:px-16 bg-black">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dining Table Reservation System",
                description: "A web-based system that enables customers to view available tables, make reservations, and receive notifications, while helping restaurant staff manage bookings and optimize seating.",
                tags: ["Java", "JavaScript"],
                link: "https://github.com/nimmalarakeshreddy/DiningTableReservation"
              },
              {
                title: "Vision Prime Services",
                description: "A freelancing project — custom WordPress website designed to meet the client's specific needs, featuring a responsive layout, user-friendly navigation, and essential functionalities, ensuring a seamless online experience.",
                tags: ["WordPress", "HTML/CSS", "PHP"],
                link: "https://visionprimeservices.com/"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-zinc-800 hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-500 hover:underline"
                  >
                    Visit Project
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-8 lg:px-16 bg-zinc-900">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="space-y-12">
            {[
              {
                degree: "Master of Science in Computer Science",
                university: "Western Illinois University",
                period: "Aug 2022 – May 2024",
                location: "Macomb, IL, USA",
                GPA: "3.5"
              },
              {
                degree: "Bachelor of Technology in Computer Science & Engineering",
                university: "JNTU Hyderabad",
                period: "Aug 2017 – May 2021",
                location: "Hyderabad, India",
                GPA: "3.1"
              }
            ].map((education, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <GraduationCap size={14} />
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">{education.degree}</h3>
                  <p className="text-blue-400">{education.university}</p>
                  <p className="text-sm text-zinc-400">{education.period} | {education.location} | GPA: {education.GPA}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-8 lg:px-16 bg-black">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: "Frontend",
                skills: [
                  "HTML5, CSS3, JavaScript (ES6+), TypeScript",
                  "React.js, Angular, Next.js",
                  "Redux Toolkit, NgRx, RxJS, React Query",
                  "Tailwind CSS, Material UI, Bootstrap",
                  "WordPress, Elementor, WooCommerce",
                  "WCAG 2.1 Accessibility"
                ]
              },
              {
                icon: <Terminal size={32} />,
                title: "Backend & APIs",
                skills: [
                  "Node.js (Express.js)",
                  "RESTful APIs, GraphQL",
                  "PHP (basic)",
                  "API Integration & Axios"
                ]
              },
              {
                icon: <Database size={32} />,
                title: "Database",
                skills: ["MySQL", "MongoDB", "PostgreSQL"]
              },
              {
                icon: <Cloud size={32} />,
                title: "DevOps & Tools",
                skills: [
                  "AWS (EC2, S3, RDS)",
                  "Docker, CI/CD (GitHub Actions)",
                  "Git, GitHub",
                  "Jest, React Testing Library",
                  "Jasmine, Karma, Cypress",
                  "Figma, Jira, Storybook",
                  "Agile (Scrum, Kanban)"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="p-6 bg-zinc-900 rounded-xl">
                <div className="text-blue-400 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-zinc-400">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 lg:px-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Let's Work Together</h2>
            <p className="text-zinc-400 text-center mb-12">
              I'm currently available for freelance work and full-time opportunities.
              If you're interested in working together, let's connect!
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Side - LinkedIn Button */}
              <div className="w-full lg:w-1/2 flex justify-center items-center h-full">
                <a
                  href="https://www.linkedin.com/in/rakeshn7/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
              </div>

              {/* Right Side - Contact Form */}
              <div className="w-full lg:w-1/2">
                <Form />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 lg:px-16 bg-black border-t border-black">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-zinc-400 mb-4 sm:mb-0">
              © 2025 Rakesh Reddy Nimmala. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/nimmalarakeshreddy" className="text-zinc-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rakeshn7/" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rakeshreddynimmala7@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
