import styles from "./Skills.module.css";

const SKILL_CARDS = [
  {
    icon: "💻",
    title: "Languages",
    desc: "Core programming languages I work with daily.",
    span: "span2",
    tags: [
      { name: "C", color: "" },
      { name: "C++", color: "" },
      { name: "Java", color: "" },
      { name: "Python", color: "green" },
      { name: "JavaScript", color: "cyan" },
      { name: "TypeScript", color: "cyan" },
    ],
  },
  {
    icon: "⚛️",
    title: "Frontend",
    desc: "Modern UI frameworks and styling tools.",
    span: "",
    tags: [
      { name: "React", color: "cyan" },
      { name: "Next.js", color: "" },
      { name: "Tailwind CSS", color: "purple" },
    ],
  },
  {
    icon: "🔧",
    title: "Backend",
    desc: "Server-side technologies and APIs.",
    span: "",
    tags: [
      { name: "Node.js", color: "green" },
      { name: "Express.js", color: "green" },
    ],
  },
  {
    icon: "🗄️",
    title: "Databases",
    desc: "SQL and NoSQL database systems.",
    span: "",
    tags: [
      { name: "MongoDB", color: "green" },
      { name: "MySQL", color: "cyan" },
      { name: "PostgreSQL", color: "" },
      { name: "Supabase", color: "green" },
    ],
  },
  {
    icon: "🤖",
    title: "AI & APIs",
    desc: "AI models and API integrations for intelligent features.",
    span: "span2",
    tags: [
      { name: "OpenAI API", color: "purple" },
      { name: "Claude", color: "pink" },
      { name: "Gemini", color: "cyan" },
      { name: "Hugging Face", color: "pink" },
      { name: "Groq", color: "green" },
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & DevOps",
    desc: "Development tools and deployment platforms.",
    span: "",
    tags: [
      { name: "Git", color: "pink" },
      { name: "Docker", color: "cyan" },
      { name: "Postman", color: "purple" },
      { name: "Prisma", color: "" },
      { name: "Vercel", color: "" },
    ],
  },
];

export default function Skills() {
  return (
    <section className={`${styles.skills} section`} id="skills">
      <div className="container">
        <div className="section-label">Tech Stack</div>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          The tools and technologies I use to bring ideas to life.
        </p>

        <div className={styles.bentoGrid}>
          {SKILL_CARDS.map((card, i) => (
            <div
              key={i}
              className={`${styles.bentoCard} ${
                card.span ? styles[card.span] : ""
              }`}
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.desc}</p>
              <div className={styles.skillTags}>
                {card.tags.map((tag, j) => (
                  <span
                    key={j}
                    className={`${styles.skillTag} ${
                      tag.color ? styles[tag.color] : ""
                    }`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
