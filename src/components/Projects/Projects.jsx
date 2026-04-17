import styles from "./Projects.module.css";

const PROJECTS = [
  {
    label: "Featured Project",
    badge: "AI-Powered",
    title: "CodeAtlas",
    desc: "An AI-powered codebase search engine built with Next.js and Supabase (pgvector), utilizing the Groq API to deliver Llama-3 (70B) responses at over 800 tokens/sec.",
    highlights: [
      "AST-based context chunker processing up to 1,000 files per minute via Hugging Face",
      'Localized "Privacy Mode" routing AI requests to a local Ollama instance (8B params)',
      "100% data privacy for proprietary enterprise code",
    ],
    tech: ["Next.js", "TypeScript", "Llama-3", "TailwindCSS", "Supabase", "Clerk"],
    image: "/codeatlas.png",
    github: "https://github.com/Aryans06",
    live: null,
    reverse: false,
  },
  {
    label: "Backend Project",
    badge: "REST API",
    title: "VideoTube",
    desc: "A YouTube-clone REST API with Node.js, Express & MongoDB featuring JWT authentication with access + refresh tokens and bcrypt password hashing.",
    highlights: [
      "Cloudinary media pipeline with Multer for file uploads and automatic local cleanup",
      "MVC architecture with custom error handling, async wrappers, and versioned API routes",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Bcrypt", "JWT", "React"],
    image: "/videotube.png",
    github: "https://github.com/Aryans06",
    live: null,
    reverse: true,
  },
  {
    label: "Open Source",
    badge: "NPM Package",
    title: "git-pulse",
    desc: "An AI-powered CLI utilizing the Google Gemini API to generate automated conventional commits from staged code changes. Adopted rapidly by the community.",
    highlights: [
      "Over 100 organic downloads on NPM in its first week",
      "Contextual prompt engineering to categorize file changes (feat, fix, chore) without sacrificing speed",
      "Leverages @google/genai SDK for intelligent commit message generation",
    ],
    tech: ["Node.js", "LLM", "CLI Architecture", "NPM"],
    image: "/gitpulse.png",
    github: "https://github.com/Aryans06/git-pulse",
    live: "https://www.npmjs.com/package/git-pulse",
    reverse: false,
  },
];

export default function Projects() {
  return (
    <section className={`${styles.projects} section`} id="projects">
      <div className="container">
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          Real-world applications showcasing full-stack development, AI
          integration, and developer tooling.
        </p>

        <div className={styles.projectsList}>
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`${styles.projectCard} ${
                project.reverse ? styles.reverse : ""
              }`}
            >
              {/* Image */}
              <div className={styles.projectImage}>
                <span className={styles.projectBadge}>{project.badge}</span>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className={styles.projectInfo}>
                <span className={styles.projectLabel}>{project.label}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>

                <div className={styles.projectHighlights}>
                  {project.highlights.map((h, j) => (
                    <div key={j} className={styles.highlight}>
                      <span className={styles.highlightDot}></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.projectTech}>
                  {project.tech.map((t, j) => (
                    <span key={j} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.primary}`}
                  >
                    GitHub →
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.projectLink} ${styles.secondary}`}
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
