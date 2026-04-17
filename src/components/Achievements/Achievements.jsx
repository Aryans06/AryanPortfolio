import styles from "./Achievements.module.css";

const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Smart India Hackathon",
    desc: "Selected among the Top 100 teams nationally in one of India's largest hackathon competitions.",
    featured: false,
  },
  {
    icon: "💡",
    value: "250+",
    title: "DSA Problems Solved",
    desc: "Consistent problem-solving practice on LeetCode covering arrays, trees, graphs, DP, and more.",
    featured: true,
  },
  {
    icon: "🎖️",
    title: "4th Rank in School",
    desc: "Secured 4th rank with 94% in CBSE Class X Board Examinations.",
    featured: false,
  },
  {
    icon: "📦",
    value: "100+",
    title: "NPM Downloads",
    desc: "git-pulse achieved over 100 organic downloads in its first week on the NPM registry.",
    featured: false,
  },
  {
    icon: "🎓",
    value: "9.59",
    title: "CGPA at SRM IST",
    desc: "Maintaining a strong academic record in B.Tech Computer Science (6th Semester).",
    featured: false,
  },
];

const CERTIFICATIONS = [
  { icon: "📜", name: "Data Structures", issuer: "Coding Ninjas" },
  { icon: "🧩", name: "Problem Solving (Basic)", issuer: "HackerRank" },
  { icon: "🤖", name: "Machine Learning with Python", issuer: "IBM" },
];

export default function Achievements() {
  return (
    <section className={`${styles.achievements} section`} id="achievements">
      <div className="container">
        <div className="section-label">Milestones</div>
        <h2 className="section-title">
          Achievements & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          Key milestones, competitive highlights, and professional credentials.
        </p>

        <div className={styles.achieveGrid}>
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={i}
              className={`${styles.achieveCard} ${
                item.featured ? styles.featured : ""
              }`}
            >
              <span className={styles.achieveIcon}>{item.icon}</span>
              {item.value && (
                <span className={styles.achieveValue}>{item.value}</span>
              )}
              <h3 className={styles.achieveTitle}>{item.title}</h3>
              <p className={styles.achieveDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={styles.certSection}>
          <h3 className="section-title" style={{ fontSize: "1.5rem" }}>
            Certifications
          </h3>
          <div className={styles.certGrid}>
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className={styles.certCard}>
                <span className={styles.certIcon}>{cert.icon}</span>
                <div>
                  <div className={styles.certName}>{cert.name}</div>
                  <div className={styles.certIssuer}>{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
