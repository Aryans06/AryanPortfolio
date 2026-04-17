import styles from "./About.module.css";

const INFO_ITEMS = [
  { icon: "🎓", label: "Education", value: "B.Tech CSE @ SRM IST (2027)" },
  { icon: "📍", label: "Location", value: "Chennai, India" },
  { icon: "📊", label: "CGPA", value: "9.59 / 10" },
  { icon: "🗣️", label: "Languages", value: "English & Hindi" },
];

const FEATURES = [
  {
    icon: "🧠",
    title: "AI Integration",
    desc: "Building intelligent features with OpenAI, Gemini, Claude, and Hugging Face APIs.",
  },
  {
    icon: "⚡",
    title: "Full-Stack Dev",
    desc: "End-to-end web apps with React, Next.js, Node.js, and modern databases.",
  },
  {
    icon: "🛠️",
    title: "Developer Tools",
    desc: "Creating CLI tools and packages that streamline developer workflows.",
  },
  {
    icon: "🌐",
    title: "Open Source",
    desc: "Active contributor and maintainer of npm packages used by the community.",
  },
  {
    icon: "🚀",
    title: "What Drives Me",
    desc: "I'm passionate about solving real-world problems with code. From building AI-powered codebase search engines to developer CLI tools, I focus on creating impactful software that developers love to use.",
    highlight: true,
  },
];

export default function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <div className="section-label">About Me</div>
        <h2 className="section-title">
          Crafting <span className="gradient-text">digital experiences</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          A snapshot of who I am, what I do, and what fuels my curiosity.
        </p>

        <div className={styles.aboutGrid}>
          {/* Left Card */}
          <div className={styles.aboutCard}>
            <div className={styles.aboutAvatar}>
              <span className="gradient-text">AJ</span>
            </div>
            <h3 className={styles.aboutName}>Aryan Jha</h3>
            <p className={styles.aboutRole}>Full-Stack Developer & AI Engineer</p>
            <p className={styles.aboutBio}>
              Pre-final year Computer Science student with a strong foundation in
              Data Structures & Algorithms and full-stack development. Experienced
              in building modern scalable web applications and integrating
              AI-powered features using React, Node.js, and OpenAI APIs.
            </p>
            <div className={styles.infoList}>
              {INFO_ITEMS.map((item, i) => (
                <div key={i} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <span className={styles.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Features */}
          <div className={styles.aboutFeatures}>
            {FEATURES.map((feat, i) => (
              <div
                key={i}
                className={`${styles.featureCard} ${
                  feat.highlight ? styles.highlight : ""
                }`}
              >
                <span className={styles.featureIcon}>{feat.icon}</span>
                <h4 className={styles.featureTitle}>{feat.title}</h4>
                <p className={styles.featureDesc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
