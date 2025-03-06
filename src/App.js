// src/App.js
import React, { useState, useRef, useEffect } from 'react';

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isVisible, setIsVisible] = useState({});

    // Simplified click handler
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Refs for scroll-to functionality
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const educationRef = useRef(null);
    const contactRef = useRef(null);

    // Scroll to section function (updated for clarity)
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
            // Close the nav menu on mobile after clicking a link
            if (window.innerWidth < 769) {  // Only close on mobile
              setIsNavOpen(false);
            }
        }
    };

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            {
                threshold: 0.1, // Adjust as needed
            }
        );

        // Observe elements with animation
        document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
            el.id = `section-${index}`; // give each one a unique ID
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // --- Content Updates ---
    const experiences = [
        {
            title: 'Lead Backend Developer',
            company: 'Symmatric',
            location: 'Ahmedabad, Gujarat',
            date: 'Feb 2024 - Present', // More concise date format
            bullets: [
                "Developed and maintained high-performance REST APIs using Python (FastAPI) and Redis, resulting in a 30% improvement in application response time.",
                "Deployed and managed cloud infrastructure on AWS (EC2, S3, RDS) using Nginx and Gunicorn, achieving 98% system uptime and ensuring scalability.",
                "Implemented automated data processing pipelines using SQL Events and stored procedures, reducing data processing time by 50%.",
                "Led the full-stack development of Symmatric.com, a dynamic web platform, delivering the project from concept to launch in under one month.",
            ],
        },
        {
            title: 'Content Writer & Editor',
            company: 'Techstory Media',
            location: 'Remote',
            date: 'Dec 2022 - Mar 2024',
            bullets: [
                "Led a team of 5 content writers, ensuring consistent quality and adherence to project deadlines, resulting in high client satisfaction.",
                "Created compelling technical blog posts and articles across various niches, contributing to a significant increase in organic traffic and a $250,000 revenue boost.",
                "Leveraged data analytics to track content performance, identify trends, and optimize content strategy, leading to a 120,000 increase in site visits.",
                "Developed and executed SEO strategies to improve content visibility and organic search rankings, demonstrating strong analytical and data-driven decision-making skills.",
            ],
        },
    ];

    const skills = {
        Languages: ['Python', 'R', 'SQL', 'JavaScript'],
        'Cloud & Tools': ['AWS (EC2, S3, RDS)', 'Nginx', 'Git', 'Docker', 'CI/CD'], // Added Docker and CI/CD
        Web: ['Flask', 'FastAPI', 'HTML', 'CSS', 'Bootstrap', 'React'], // Added React
        Databases: ['MySQL', 'Redis', 'PostgreSQL'], // Added PostgreSQL
        'AI & ML': ['TensorFlow', 'OpenCV', 'scikit-learn', 'NLTK', 'Gensim'], // Added Gensim
        Other: ['Celery', 'Pytest', 'Tableau', 'PowerBI', 'REST APIs'], // Consolidated and added REST APIs
    };

    const projects = [
        {
            title: 'AI-Powered Pull Request Reviewer',
            year: 2024,
            description:
                "Built an AI-driven system to automate the analysis and summarization of GitHub pull requests.  The system uses FastAPI for the backend, Celery for asynchronous task management, Redis for caching and message brokering, and the Gemini API for AI-powered code analysis.  It detects potential bugs, suggests improvements, and generates concise summaries of code changes.",
            technologies: ['Python', 'FastAPI', 'Celery', 'Redis', 'Gemini API', 'GitHub API'], // More specific
            link: 'https://github.com/khilav23', // Replace with your actual link!
        },
        {
            title: 'Real-time Emotion Analysis Model',
            year: 2024,
            description:
                "Developed a real-time emotion recognition system using Python, TensorFlow, and OpenCV.  The model analyzes video input to detect and classify human emotions (e.g., happy, sad, angry, neutral) with high accuracy. This project won recognition at the Indus University Project Showcase.",
            technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
            link: 'https://github.com/khilav23', // Replace with your actual link!
        },
        {
            title: 'Multilingual Translator and Summarizer',
            year: 2022,
            description:
                "Created a versatile NLP application that translates text between multiple languages and generates concise summaries of input text.  The application leverages Python libraries like NLTK and Gensim for natural language processing tasks.",
            technologies: ['Python', 'NLTK', 'Gensim', 'NLP'],
            link: 'https://github.com/khilav23', // Replace with your actual link!
        },
    ];
    return (
        <div className="app">
            <header className="header">
                <div className="container">
                    <a href="/" className="logo">Khilav Jadav</a>
                    <button className="hamburger" onClick={toggleNav} aria-label="Toggle navigation">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    {/* Use a nav element for semantic HTML */}
                    <nav className={`nav-list ${isNavOpen ? 'active' : ''}`}>
                        {/* Use a ul for the list of links */}
                        <ul>
                            <li><a href="#about" onClick={() => scrollToSection(aboutRef)} className="nav-link">About</a></li>
                            <li><a href="#experience" onClick={() => scrollToSection(experienceRef)} className="nav-link">Experience</a></li>
                            <li><a href="#skills" onClick={() => scrollToSection(skillsRef)} className="nav-link">Skills</a></li>
                            <li><a href="#projects" onClick={() => scrollToSection(projectsRef)} className="nav-link">Projects</a></li>
                            <li><a href="#education" onClick={() => scrollToSection(educationRef)} className="nav-link">Education</a></li>
                            <li><a href="#contact" onClick={() => scrollToSection(contactRef)} className="nav-link">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section id="hero" className="hero">
                    <div className="container">
                        <h1 className="title">Khilav Jadav</h1>
                        <p className="subtitle">Backend Developer & AI Enthusiast</p>
                        <p className="description">
                            Building innovative solutions with Python, AWS, and AI.
                        </p>
                        <a href="#projects" className="cta-button" onClick={() => scrollToSection(projectsRef)}>Explore My Projects</a>
                    </div>
                </section>

                <section id="about" className="about section" ref={aboutRef}>
                    <div className="container">
                        <h2 className="section-title">About Me</h2>
                        <div className={`about-content animate-on-scroll ${isVisible['section-0'] ? 'is-visible' : ''}`}>
                            <p>
                                I'm a passionate and results-oriented backend developer with a strong foundation in building scalable, robust, and high-performance web applications.  I specialize in Python, Flask, and FastAPI, and I have extensive experience with cloud technologies, particularly AWS.  I'm also deeply interested in Artificial Intelligence and Machine Learning, and I enjoy applying these technologies to solve real-world problems. I thrive in collaborative environments and am always eager to learn and adapt to new challenges.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="experience" className="experience section" ref={experienceRef}>
                    <div className="container">
                        <h2 className="section-title">Experience</h2>
                        {experiences.map((exp, index) => (
                            <div key={index} className={`experience-item animate-on-scroll ${isVisible[`section-${index + 1}`] ? 'is-visible' : ''}`}>
                                <h3 className="experience-title">{exp.title}</h3>
                                <p className="company">{exp.company} | {exp.location}</p>
                                <p className="date">{exp.date}</p>
                                <ul className="bullets">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="skills" className="skills section" ref={skillsRef}>
                    <div className="container">
                        <h2 className="section-title">Skills</h2>
                        <div className="skills-grid">
                            {Object.entries(skills).map(([category, skillList], index) => (
                                <div key={category} className={`skill-category animate-on-scroll ${isVisible[`section-${index + experiences.length + 1}`] ? 'is-visible' : ''}`}>
                                    <h3 className="skill-category-title">{category}</h3>
                                    <ul className="skill-list">
                                        {skillList.map((skill) => (
                                            <li key={skill} className="skill-item">{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="projects" className="projects section" ref={projectsRef}>
                    <div className="container">
                        <h2 className="section-title">Projects</h2>
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <div key={index} className={`project-card animate-on-scroll ${isVisible[`section-${index + experiences.length + Object.keys(skills).length + 1}`] ? 'is-visible' : ''}`}>
                                    <h3 className="project-title">{project.title} ({project.year})</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="tech-list">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-item">{tech}</span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            View Project
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="education" className="education section" ref={educationRef}>
                    <div className="container">
                        <h2 className="section-title">Education</h2>
                         <div className={`education-item animate-on-scroll ${isVisible[`section-${projects.length + experiences.length + Object.keys(skills).length + 1}`] ? 'is-visible' : ''}`}>
                            <h3 className='education-title'>Indus University</h3>
                            <p className="degree">BSc(Data Science) | CGPA: 9.4</p>
                            <ul className="bullets">
                                <li>Specialized in programming (Python, R, SQL), database management, and data analysis.</li>
                                <li>Developed predictive models and data visualizations using TensorFlow, scikit-learn, and PowerBI.</li>
                                <li>Top 2% ranking in Advanced Python, R Programming, Machine Learning & Deep Learning courses.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact section" ref={contactRef}>
                    <div className="container">
                        <h2 className="section-title">Contact</h2>
                        <p className="contact-message">
                            I'm always open to new opportunities and collaborations. Get in touch!
                        </p>
                        <p>Email: <a href="mailto:khilav.jadav@gmail.com" className="contact-link">khilav.jadav@gmail.com</a></p>
                        <p>Phone:  86908 84200</p>
                        <p>Location:  Ahmedabad, Gujarat</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/khilavjadav/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                LinkedIn
                            </a>
                            <a href="https://github.com/khilav" target="_blank" rel="noopener noreferrer" className="social-icon">
                                GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Khilav Jadav. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;