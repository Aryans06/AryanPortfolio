import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              <span className="gradient-text">AJ</span>
            </div>
            <p className={styles.footerTagline}>
              Building the future, one commit at a time.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <a
              href="https://github.com/Aryans06"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aryan-jha"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/aryan-jha"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              LeetCode
            </a>
            <a
              href="mailto:aryanjha.works@gmail.com"
              className={styles.footerLink}
            >
              Email
            </a>
          </div>

          <div className={styles.footerRight}>
            © {year} Aryan Jha. Made with{" "}
            <span className={styles.footerHeart}>♥</span> and Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
