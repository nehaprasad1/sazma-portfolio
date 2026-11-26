import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone,
  Menu, X, Database, BrainCircuit, Code2, Workflow, GraduationCap,
  BriefcaseBusiness, Award, Sparkles, ChevronDown, FileCheck2
} from 'lucide-react';

const GITHUB = 'https://github.com/sazmaaa';
const LINKEDIN = 'https://www.linkedin.com/in/sazmaparween/';
const resume = '/Sazma_Parween_Resume.pdf';

const skills = [
  { title: 'Programming', icon: Code2, items: ['Python', 'SQL', 'C++', 'R'] },
  { title: 'Data & Analytics', icon: Database, items: ['Pandas', 'NumPy', 'PySpark', 'EDA', 'Data Cleaning', 'Feature Engineering', 'Statistical Analysis'] },
  { title: 'Machine Learning', icon: BrainCircuit, items: ['Classification', 'Logistic Regression', 'Random Forest', 'Gradient Boosted Trees', 'DBSCAN', 'Isolation Forest', 'SMOTE', 'Optuna', 'Model Evaluation'] },
  { title: 'MLOps & Deployment', icon: Workflow, items: ['MLflow', 'ZenML', 'FastAPI', 'Docker', 'Prometheus', 'Grafana', 'Streamlit'] },
  { title: 'Big Data & Databases', icon: Database, items: ['Apache Spark', 'Kafka', 'HDFS', 'Redis', 'DBMS'] },
  { title: 'Tools & Frameworks', icon: Code2, items: ['Git/GitHub', 'Jupyter', 'Linux', 'PyTorch', 'TensorFlow', 'XGBoost', 'Power BI', 'scikit-learn', 'Matplotlib'] }
];

const projects = [
  {
    number: '01',
    category: 'BIG DATA · MACHINE LEARNING',
    title: 'Digital Marketing Conversion Prediction',
    description: 'Built a PySpark machine-learning pipeline to predict campaign conversion and uncover campaign effectiveness insights.',
    tags: ['Python', 'PySpark', 'Spark MLlib', 'Random Forest'],
    detail: 'Compared Logistic Regression, Random Forest and Gradient Boosted Trees. Random Forest achieved the best AUC. Created 12 visualisations and a 17-slide presentation.',
    icon: Database,
    link: 'https://github.com/sazmaaa',
    linkLabel: 'View GitHub Profile'
  },
  {
    number: '02',
    category: 'LLM · MLOPS',
    title: 'LLM Fine-Tuning with MLOps Pipeline',
    description: 'Fine-tuned an instruction-following language model and built an end-to-end experiment, deployment and monitoring workflow.',
    tags: ['LoRA', 'Qwen2.5', 'ZenML', 'MLflow', 'FastAPI', 'Docker'],
    detail: 'Fine-tuned Qwen2.5-0.5B-Instruct on Alpaca-Cleaned. Used Optuna for tuning, MLflow for experiment tracking, and Prometheus/Grafana for monitoring.',
    icon: BrainCircuit,
    link: 'https://github.com/sazmaaa/Sequence-Prediction-and-Sentiment-Analysis-Using-RNN-and-LSTM',
    linkLabel: 'View on GitHub'
  },
  {
    number: '03',
    category: 'HEALTHCARE · CLASSIFICATION',
    title: 'PCOS Prediction System',
    description: 'Developed a machine-learning classifier to estimate PCOS status from medical dataset features.',
    tags: ['Python', 'Pandas', 'Random Forest', 'SMOTE'],
    detail: 'Performed exploratory analysis, data cleaning, feature encoding and visualisation. Applied SMOTE to address class imbalance; achieved approximately 78% accuracy.',
    icon: Sparkles,
    link: 'https://github.com/sazmaaa/pcos-prediction',
    linkLabel: 'View on GitHub'
  },
  {
    number: '04',
    category: 'AI · SOCIAL IMPACT',
    title: 'AI-Based Poverty & Hunger Prediction',
    description: 'Used socioeconomic and demographic data to identify vulnerable populations and classify hunger-risk levels.',
    tags: ['Python', 'Machine Learning', 'Socioeconomic Data'],
    detail: 'Developed an AI-driven approach to support the identification of vulnerable populations through data-informed hunger-risk classification.',
    icon: Database,
    link: 'https://github.com/sazmaaa/AI-Based-Poverty-Hunger-Prediction-System-Python-Machine-Learning',
    linkLabel: 'View on GitHub'
  }
];

const experience = [
  {
    role: 'On-the-Job Trainee – Web Development & Digital Marketing',
    company: 'GAO Tek Inc. (GAO Group)',
    date: 'Jul 2024 – Nov 2024',
    mode: 'Remote',
    text: 'Developed responsive web pages using HTML, CSS and JavaScript; created digital content and applied basic SEO.',
    certificateUrl: 'https://drive.google.com/file/d/1RiKcBhUrnzg9ddUbd9DVcnTExBkGG6cV/view?usp=drivesdk'
  },
  {
    role: 'App Development and Web Development Training Intern',
    company: 'IntrnForte & IntrAinz',
    date: '2023 – 2024',
    mode: 'Online / Remote',
    text: 'Completed project-based training programmes in app and web development.',
    certificateUrl: 'https://drive.google.com/file/d/1aGKsVzBkPXNrzOU6D8POeGNyCbT3Hqup/view?usp=drivesdk'
  }
];

const certifications = [
  {
    title: 'Exploratory Data Analysis for Machine Learning',
    issuer: 'IBM / Coursera · Mar 2026',
    certificateUrl: 'https://drive.google.com/file/d/1QcqrsnSiN2SDn5aMCiaIptG1WoXlSWTg/view?usp=drivesdk'
  },
  {
    title: 'Introduction to Deep Learning & Neural Networks',
    issuer: 'Course Certificate',
    certificateUrl: 'https://drive.google.com/file/d/1jkEGJbkDtrcuAN-YXH15qWd_UiNqyZNg/view?usp=drivesdk'
  },
  {
    title: 'Convolutional Neural Networks',
    issuer: 'Course Certificate',
    certificateUrl: 'https://drive.google.com/file/d/15yaPXjrdnY6EHuQEoXku9NC5W-l8TjfO/view?usp=drivesdk'
  },
  {
    title: 'Big Data Modeling and Management Systems',
    issuer: 'Course Certificate',
    certificateUrl: 'https://drive.google.com/file/d/1djseIX74Yu65nmsk7A87EUq954L34Hk_/view?usp=drivesdk'
  },
  {
    title: 'Crash Course in Data Science',
    issuer: 'Course Certificate',
    certificateUrl: 'https://drive.google.com/file/d/1Q9UPBNV2fOKintQlzkX1rDjfqU7FqCvY/view?usp=drivesdk'
  },
  {
    title: 'Data Structures',
    issuer: 'Course Certificate',
    certificateUrl: 'https://drive.google.com/file/d/10_p9iO9gO_0MbTqG7cdciRWecaWQjPFK/view?usp=drivesdk'
  }
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <i />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Contact', '#contact']
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Sazma<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <div className="topbar-actions">
          <a className="icon-btn" href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <Github size={16} />
          </a>
          <a className="icon-btn" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a className="button button-small top-cta" href="#contact">
            Let&apos;s connect <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="status-pill"><span className="status-dot" /> M.Sc. DATA SCIENCE STUDENT</div>
            <p className="hero-kicker">Hello, I&apos;m</p>
            <h1>Sazma <span>Parween</span></h1>
            <h2>Turning data into <span className="gradient-text">meaningful insights.</span></h2>
            <p className="hero-description">
              I explore the intersection of data science, machine learning and MLOps to build practical, data-driven solutions to real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-outline" href={resume} download="Sazma_Parween_Resume.pdf">
                Download resume <Download size={17} />
              </a>
            </div>
            <div className="hero-socials">
              <a className="social-chip" href={LINKEDIN} target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <a className="social-chip" href={GITHUB} target="_blank" rel="noreferrer">
                <Github size={15} /> GitHub <ArrowUpRight size={13} />
              </a>
            </div>
            <div className="hero-tools">
              <span>WORKING WITH</span>
              <div className="tool-chips">
                <b>Python</b><b>SQL</b><b>PySpark</b><b>ML</b><b>MLOps</b><b>Docker</b>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img src="/sazma-profile.jpg" alt="Portrait of Sazma Parween" />
            </div>
            <div className="floating-card code-card">
              <div className="card-top"><span>✦ data_profile.py</span><span className="live-dot" /></div>
              <pre><span className="code-purple">profile</span> = {'{'}{`\n  `}<span className="code-blue">"focus"</span>: <span className="code-green">"Data Science"</span>,{`\n  `}<span className="code-blue">"interests"</span>: [{`\n    `}<span className="code-green">"Machine Learning"</span>,{`\n    `}<span className="code-green">"Big Data"</span>,{`\n    `}<span className="code-green">"MLOps"</span>{`\n  `}]{`\n`}{'}'}</pre>
            </div>
            <div className="floating-card mini-card">
              <BrainCircuit size={19} />
              <span>Curious mind.<br /><strong>Data-driven work.</strong></span>
            </div>
            <div className="decor-dots" />
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-copy">
            <span className="eyebrow">A LITTLE ABOUT ME</span>
            <h2>Curiosity meets<br /><span className="gradient-text">analytical thinking.</span></h2>
            <p>
              I&apos;m currently pursuing my M.Sc. in Data Science at Alliance University, Bengaluru, building upon my Bachelor&apos;s degree (B.Sc.) in Physics, Mathematics &amp; Computer Science from Jain University. I enjoy exploring data, building machine-learning models and learning how to take ML workflows closer to production.
            </p>
            <p>
              My interests span predictive modelling, big data technologies and MLOps — with a focus on applying these skills to meaningful business and social problems.
            </p>
            <a className="text-link" href="#experience">More about my journey <ArrowUpRight size={16} /></a>
          </div>
          <div className="about-facts">
            <div className="fact-card">
              <span className="fact-icon"><GraduationCap /></span>
              <div><strong>M.Sc. &amp; B.Sc.</strong><small>Data Science · PMCs (7.16 CGPA)</small></div>
            </div>
            <div className="fact-card">
              <span className="fact-icon"><Database /></span>
              <div><strong>4</strong><small>Featured projects</small></div>
            </div>
            <div className="fact-card">
              <span className="fact-icon"><BrainCircuit /></span>
              <div><strong>ML + MLOps</strong><small>Areas of interest</small></div>
            </div>
            <div className="fact-card">
              <span className="fact-icon"><MapPin /></span>
              <div><strong>Bengaluru</strong><small>India</small></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Skills & technologies"
            subtitle="Tools and concepts I use to explore, build and deliver data-driven solutions."
          />
          <div className="skills-grid">
            {skills.map((group, i) => {
              const Icon = group.icon;
              return (
                <motion.article
                  className="skill-card"
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="skill-title">
                    <span className="skill-icon"><Icon size={19} /></span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="tag-list">
                    {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects I'm proud of"
            subtitle="A selection of academic and personal projects across machine learning, big data and MLOps."
          />
          <div className="projects-grid">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.article
                  className="project-card"
                  key={project.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a className="project-art-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                    <div className="project-art">
                      <span className="project-number">{project.number}</span>
                      <div className="project-art-icon"><Icon size={42} /></div>
                      <span className="project-category">{project.category}</span>
                      <div className="art-grid" />
                    </div>
                  </a>
                  <div className="project-content">
                    <h3>
                      <a className="project-title-link" href={project.link} target="_blank" rel="noreferrer">
                        {project.title}
                      </a>
                    </h3>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                    </div>
                    <details className="project-details">
                      <summary>Project details <ChevronDown size={15} /></summary>
                      <p>{project.detail}</p>
                    </details>
                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                      <Github size={14} /> {project.linkLabel || 'View on GitHub'} <ArrowUpRight size={15} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="journey-section section-wrap" id="experience">
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Education & experience"
            subtitle="My postgraduate and bachelor's academic background alongside hands-on internship experience."
          />
          <div className="journey-grid">
            <div className="journey-column">
              <h3 className="column-title"><GraduationCap /> Education</h3>
              <article className="timeline-card">
                <span className="timeline-date">2025 – 2027 · EXPECTED</span>
                <h4>Master of Science (M.Sc.) in Data Science</h4>
                <p className="place">Alliance University · Bengaluru</p>
                <p>
                  Relevant Coursework: Machine Learning, Statistical Analysis, Big Data Technologies, MLOps, Data Visualisation, Artificial Intelligence, DBMS and Data Structures.
                </p>
              </article>
              <article className="timeline-card">
                <span className="timeline-date">2022 – 2025 · BACHELOR&apos;S DEGREE</span>
                <h4>Bachelor of Science (B.Sc.) in Physics, Mathematics &amp; Computer Science</h4>
                <p className="place">Jain University · Bengaluru</p>
                <p>
                  Completed a 3-year undergraduate degree with a strong quantitative and programming foundation across Physics, Mathematics, and Computer Science. <strong>CGPA: 7.16 / 10</strong>.
                </p>
              </article>
            </div>

            <div className="journey-column">
              <h3 className="column-title"><BriefcaseBusiness /> Experience &amp; Internships</h3>
              {experience.map((item) => (
                <article className="timeline-card" key={item.company}>
                  <span className="timeline-date">{item.date} · {item.mode.toUpperCase()}</span>
                  <h4>{item.role}</h4>
                  <p className="place">{item.company}</p>
                  <p>{item.text}</p>
                  {item.certificateUrl && (
                    <a
                      className="cert-link"
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FileCheck2 size={14} /> View Internship Certificate <ArrowUpRight size={14} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="extras-section section-wrap">
          <div className="extras-card">
            <div className="extras-icon"><Award /></div>
            <div className="extras-body">
              <span className="eyebrow">CONTINUOUS LEARNING</span>
              <h3>Certifications &amp; activities</h3>
              <ul className="cert-list">
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    <a
                      className="cert-item-link"
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{cert.title}{cert.issuer ? ` — ${cert.issuer}` : ''}</span>
                      <span className="cert-badge">
                        <FileCheck2 size={13} /> View Certificate <ArrowUpRight size={13} />
                      </span>
                    </a>
                  </li>
                ))}
                <li>Team Leader, College Recamp Decoration Committee (2024–2025)</li>
                <li>Participant, SciCon 2024 — Jain University academic conference</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">LET&apos;S CONNECT</span>
            <h2>Have a data challenge<br />or opportunity in mind?</h2>
            <p>I&apos;m eager to learn, collaborate and contribute to meaningful data science and machine-learning work.</p>
            <div className="contact-cta-group">
              <a className="button" href="mailto:sazmaparween246@gmail.com">Get in touch <ArrowUpRight size={17} /></a>
              <a className="button button-outline" href={LINKEDIN} target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="contact-panel">
            <span className="eyebrow">CONTACT &amp; PROFILES</span>
            <a href="mailto:sazmaparween246@gmail.com">
              <span className="contact-icon"><Mail /></span>
              <span><small>Email</small><strong>sazmaparween246@gmail.com</strong></span>
              <ArrowUpRight className="contact-arrow" />
            </a>
            <a href="tel:+917019913521">
              <span className="contact-icon"><Phone /></span>
              <span><small>Phone</small><strong>+91 70199 13521</strong></span>
              <ArrowUpRight className="contact-arrow" />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Linkedin /></span>
              <span><small>LinkedIn</small><strong>linkedin.com/in/sazmaparween</strong></span>
              <ArrowUpRight className="contact-arrow" />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Github /></span>
              <span><small>GitHub</small><strong>github.com/sazmaaa</strong></span>
              <ArrowUpRight className="contact-arrow" />
            </a>
            <a className="button button-outline resume-bottom" href={resume} download="Sazma_Parween_Resume.pdf">
              Download resume <Download size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Sazma<span className="brand-dot">.</span></span>
        </a>
        <span>Designed with purpose · © {new Date().getFullYear()} Sazma Parween</span>
        <div className="footer-links">
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
