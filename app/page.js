
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "JWT",
  "bcrypt",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    category: "BACKEND DEVELOPMENT",
    title: "Task Management API",
    description:
      "A RESTful API for managing tasks and handling task operations, with MongoDB for data storage.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    type: "REST API",
  },
  {
    number: "02",
    category: "BACKEND DEVELOPMENT",
    title: "Chatbot Backend",
    description:
      "A backend system that connects a chatbot application with an external AI API to process messages and responses.",
    technologies: ["Node.js", "Express.js", "External AI API"],
    type: "AI API Integration",
  },
  {
    number: "03",
    category: "FULL STACK DEVELOPMENT",
    title: "E-commerce Backend",
    description:
      "An e-commerce backend project focused on managing application data using MongoDB and MySQL.",
    technologies: ["Node.js", "MongoDB", "MySQL"],
    type: "E-commerce",
  },
  {
    number: "04",
    category: "FRONTEND DEVELOPMENT",
    title: "Mealify",
    description:
      "A responsive restaurant website built with HTML and CSS.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    type: "Website",
  },
  {
    number: "05",
    category: "FRONTEND DEVELOPMENT",
    title: "Bookmarker",
    description:
      "A bookmark management application that allows users to save and manage website links.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    type: "Web Application",
  },
  {
    number: "06",
    category: "EDUCATIONAL PLATFORM",
    title: "Nabta",
    description:
      "An educational platform concept designed to make learning more interactive and enjoyable for children.",
    technologies: ["Next.js", "JavaScript", "Bootstrap"],
    type: "Graduation Project",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Habiba<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Habiba Khater</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build modern web applications and backend systems.
            I enjoy turning ideas into functional and beautiful
            digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/habibakhater01-byte"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            HK
          </div>
          <div className="circle-decoration"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section" id="about">
        <p className="section-label">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>
              I'm a Computer Science student
              <span> & Web Developer.</span>
            </h3>

            <p>
              My name is Habiba Khater. I'm a Computer Science
              student at the Higher Technological Institute,
              passionate about web development and programming.
            </p>

            <p>
              I work with frontend technologies such as React.js
              and Next.js, and backend technologies such as
              Node.js and Express.js.
            </p>

            <p>
              I'm always learning new technologies, improving
              my problem-solving skills, and building projects
              that help me grow as a developer.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <span>01</span>
              <h4>Education</h4>
              <p>Computer Science</p>
            </div>

            <div className="detail-card">
              <span>02</span>
              <h4>Focus</h4>
              <p>Full Stack Development</p>
            </div>

            <div className="detail-card">
              <span>03</span>
              <h4>Backend</h4>
              <p>Node.js & Express.js</p>
            </div>

            <div className="detail-card">
              <span>04</span>
              <h4>Frontend</h4>
              <p>React.js & Next.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <p className="section-label">WHAT I WORK WITH</p>

        <h2>My Skills</h2>

        <p className="section-description">
          Technologies and tools I use to build web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <p className="section-label">MY RECENT WORK</p>

        <h2>Featured Projects</h2>

        <p className="section-description">
          Some of the projects I have worked on during my
          learning journey.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <div className="project-icon">
                {project.number}
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.join(" · ")}
              </div>

              <span className="project-type">
                {project.type}
              </span>
            </div>
          ))}
        </div>

        <div className="backend-stack">
          <h3>My Technical Stack</h3>

          <p>
            Technologies I use in frontend and backend development.
          </p>

          <div className="stack-list">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>JWT</span>
            <span>bcrypt</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <p className="section-label">LET'S CONNECT</p>

        <h2>Get In Touch</h2>

        <p className="section-description">
          Have a project idea or an opportunity?
          Feel free to contact me.
        </p>

        <div className="contact-card">
          <h3>Let's work together!</h3>

          <p>
            I'm open to learning opportunities, internships,
            and collaboration on interesting projects.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="primary-btn"
          >
            Send Me an Email
          </a>

          <a
            href="https://github.com/habibakhater01-byte"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Visit My GitHub ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo">
          Habiba<span>.</span>
        </a>

        <p>Designed & Built by Habiba Khater © 2026</p>
      </footer>
    </main>
  );
}
