import styles from "./Hero.module.css";

const STATS = [
  { number: "250+", label: "DSA Problems" },
  { number: "9.59", label: "CGPA" },
  { number: "100+", label: "NPM Downloads" },
  { number: "3+", label: "Projects Shipped" },
];

const FLOATING_TECHS = ["⚛️", "🟢", "🐍", "🐳", "📦", "☁️"];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Animated Background */}
      <div className={styles.heroBg}>
        <div className={styles.orbOne}></div>
        <div className={styles.orbTwo}></div>
        <div className={styles.orbThree}></div>
        <div className={styles.gridOverlay}></div>
      </div>

      {/* Main Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <div className={styles.heroStatus}>
            <span className={styles.statusDot}></span>
            Open to opportunities
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>Hi, I&apos;m</span>
            <span className={`${styles.heroTitleLine} gradient-text`}>
              Aryan Jha
            </span>
          </h1>

          <p className={styles.heroDescription}>
            Pre-final year CS student at SRM IST, building scalable web
            applications and AI-powered developer tools. I turn complex
            problems into elegant, performant solutions.
          </p>

          <div className={styles.heroCTAs}>
            <a href="#projects" className={styles.ctaPrimary}>
              View Projects ↓
            </a>
            <a
              href="https://github.com/Aryans06"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroVisual}>
            <div className={styles.visualRing}></div>
            <div className={styles.visualRing}></div>
            <div className={styles.visualRing}></div>
            <div className={styles.visualCenter}>
              <span className={styles.visualName}>AJ</span>
              <span className={styles.visualRole}>Full-Stack Developer</span>
            </div>
            {FLOATING_TECHS.map((tech, i) => (
              <div key={i} className={styles.floatingIcon}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className={styles.heroStats}>
        {STATS.map((stat, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
