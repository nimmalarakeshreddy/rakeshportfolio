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
          <p className="text-zinc-400 mt-2">Full Stack Developer</p>
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
          <p className="text-zinc-400 mt-2">Full Stack Developer</p>
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
          <p className="lg:hidden text-zinc-400 mt-2">Full Stack Developer</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-2">
              Transforming Technology</h1>
            <span className="text-5xl lg:text-5xl font-bold block mt-2 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent mb-6">

              <Typewriter
                options={{
                  strings: ['Full-Stack Java Developer',
                    'Expert in React, JavaScript, and Node.js',
                    'Building Scalable Web Applications',
                    'Enhancing User Experience with Modern UI/UX',
                    'AWS & Cloud Enthusiast',
                    'Freelancer & Problem Solver',
                    'Driving Digital Innovation with Agile Development'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />

            </span>

            <p className="text-xl text-zinc-400 max-w-2xl mb-8">
              Passionate Full Stack Developer with hands-on experience in building dynamic and user-friendly web applications.
              Skilled in Java, React, Node.js, and cloud technologies like AWS.
              I specialize in creating scalable solutions that enhance user engagement and streamline business processes.
              With a deep understanding of front-end and back-end development, I craft high-performance applications using modern frameworks and best practices.
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
                title: "Full Stack Java Developer,",
                company: "CVS Health",
                period: "Aug 2023 - Present",
                location: "Chicago, IL, USA",
                description: [
                  "Designed and developed WCAG 2.1 AA-compliant responsive user interfaces using HTML, CSS3, and JavaScript (ES6), delivering seamless experiences across devices and browsers",
                  "Created Restful microservices using spring boot",
                  "Involved in creating and designing databases and connecting databases with Hibernate",
                  "Developer single page applications using react using Hooks, redux for stateful management",
                  "Leveraged ReactJS to develop reusable component architectures, incorporating modern front-end development practices",
                  "Implemented intuitive navigation structures and interactive features, increasing user retention rates by 15%",
                  "Developed and deployed scalable AWS solutions using EC2, S3, and RDS",
                  "Contributed to CI/CD pipelines using Git and Agile methodologies, collaborating with cross-functional teams to iteratively deliver features aligned with business goals and user needs"
                ]
              },
              {
                title: "Software Application Developer",
                company: "Multiplier Solutions ",
                period: "Nov 2021 - Jul 2022",
                location: "Hyderabad, India",
                description: [
                  " Developed and optimized web applications using React.js, JavaScript, PHP, and WordPress, achieving a 30% performance boost and a 20% reduction in page load times",
                  " Designed and maintained dynamic, reusable React components, leveraging React hooks for efficient state management and component lifecycle handling",
                  " Built and maintained user-friendly interfaces with a focus on responsive design and cross-browser compatibility",
                  " Integrated RESTful APIs with React.js for seamless data flow between front-end and back-end systems",
                  " Designed and implemented custom WordPress themes and plugins, improving website functionality and visual appeal",
                  " Ensured cross-browser compatibility and seamless performance using Bootstrap framework",
                  " Executed automated email and WhatsApp campaigns using Python scripting, enhancing customization and outreach efficiency",
                  " Collaborated with a team of 5 developers to implement new features, reducing bugs by 40% and increasing customer satisfaction by 25%",
                  " Developed server-side logic using Node.js to support React.js front-end applications"
                ]
              },
              {
                title: "Software Developer Executive",
                company: "Multiplier Solutions",
                period: "Oct 2020 - Oct 2021",
                location: "Hyderabad, India",
                description: [
                  " Leveraged JavaScript ES6+ features to create clean, modular, and maintainable code, reducing technical debt",
                  " Built and deployed interactive dashboards with React.js and integrated with back-end systems for real-time data visualization",
                  " Designed chatbots using TypeScript, tailored to specific client requirements for lead generation and customer support",
                  " Leveraged Bootstrap's extensive documentation for rapid prototyping and consistent UI standards",
                  " Administered Vtiger CRM user accounts, streamlining processes and reducing overhead by 25%, while improving data security protocols",
                  " Optimized website performance, reducing page load times by 40% and increasing average session duration by 20%",
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

        {/* Work Section"py-20 px-8 lg:px-16 bg-zinc-900" */}
        <section id="projects" className="py-20 px-8 lg:px-16 bg-black">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dining Table Reservation System",
                description: "A web-based system that enables customers to view available tables, make reservations, and receive notifications, while helping restaurant staff manage bookings and optimize seating",
                tags: ["Java", "JavaScript"],
                link: "https://github.com/nimmalarakeshreddy/DiningTableReservation"
              },

              {
                title: "Vision Prime Services",
                description: "A Freelancing project with custom WordPress website designed to meet the client's specific needs, featuring a responsive layout, user-friendly navigation, and essential functionalities, ensuring a seamless online experience.",
                tags: ["WordPress"],
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
        {/* education section */}
        <section id="education" className="py-20 px-8 lg:px-16 bg-zinc-900">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="space-y-12">
            {[
              {
                degree: "Masters in Computer Science",
                university: "Western Illinois University",
                period: "Aug 2022 - May 2024",
                location: "Macomb, IL, US",
                GPA: "3.5"

              },
              {
                degree: "Bachelors in Computer Science & Technology",
                university: "Bharat Institute of Engineering & Technology",
                period: "Aug 2017 - Sep 2021",
                location: "Hyderabad, India",
                GPA: "3.1"

              },

            ].map((education, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <GraduationCap size={14} />
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">{education.degree}</h3>
                  <p className="text-blue-400">{education.university}</p>
                  <p className="text-sm text-zinc-400">{education.period} | {education.location} | GPA : {education.GPA}</p>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Skills Section"py-20 px-8 lg:px-16 bg-black" */}
        <section id="skills" className="py-20 px-8 lg:px-16 bg-black">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: "Frontend",
                skills: ["HTML, CSS, JavaScript (ES6+), TypeScript",
                  "React.js, Vue.js, jQuery, Bootstrap",
                  "WordPress, Elementor",
                  "UI/UX Design"]
              },
              {
                icon: <Terminal size={32} />,
                title: "Backend",
                skills: ["Java, Python, PHP, Node.js",
                  "Spring Boot, Spring, Hibernate",
                  "PHP CodeIgniter, Ajax",
                  "RESTful APIs"]
              },
              {
                icon: <Database size={32} />,
                title: "Database",
                skills: ["MySQL", "MongoDB", "Vtiger CRM"]
              },
              {
                icon: <Cloud size={32} />,
                title: "DevOps",
                skills: ["AWS (EC2, S3, RDS)", " GitHub", "Postman", "CI/CD Pipelines", "Agile & Lean UX Methodologies"]
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
              {/* Left Side - LinkedIn Button (Centered) */}
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
