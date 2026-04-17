"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto link as a simple handler
    const mailtoLink = `mailto:aryanjha.works@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Hi Aryan,\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <div className="section-label">Get in Touch</div>
        <h2 className="section-title">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          Have a project in mind or just want to chat? I&apos;d love to hear
          from you.
        </p>

        <div className={styles.contactWrapper}>
          {/* Left - Info */}
          <div className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>
              Let&apos;s build something{" "}
              <span className="gradient-text">amazing</span> together.
            </h3>
            <p className={styles.contactDesc}>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to collaborate on something impactful.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactItemIcon}>✉️</span>
                <div>
                  <div className={styles.contactItemLabel}>Email</div>
                  <div className={styles.contactItemValue}>
                    <a href="mailto:aryanjha.works@gmail.com">
                      aryanjha.works@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactItemIcon}>📍</span>
                <div>
                  <div className={styles.contactItemLabel}>Location</div>
                  <div className={styles.contactItemValue}>
                    Chennai, India
                  </div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactItemIcon}>📞</span>
                <div>
                  <div className={styles.contactItemLabel}>Phone</div>
                  <div className={styles.contactItemValue}>
                    +91 9958190540
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a
                href="https://github.com/Aryans06"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com/in/aryan-jha"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://leetcode.com/u/aryan-jha"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LeetCode"
              >
                🧠
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.formInput}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.formInput}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className={styles.formInput}
                placeholder="Project Collaboration"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              {submitted ? "✓ Opening Mail Client..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
