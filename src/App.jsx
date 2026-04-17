import React, { useEffect, useState } from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

export default function BridalPortfolio() {
  const phoneNumber = "tel:+916379144667";

  const images = [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  ];

  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Banner slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // reset menu on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ fontFamily: "Arial", scrollBehavior: "smooth" }}>

      {/* Navbar */}
      <nav style={styles.nav}>
        <h2>Harini Bridal Studio</h2>

        {isMobile ? (
          <>
            {/* Hamburger */}
            <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div style={styles.mobileMenu}>
                <a href="#home" style={styles.link} onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#gallery" style={styles.link} onClick={() => setMenuOpen(false)}>Gallery</a>
                <a href="#contact" style={styles.link} onClick={() => setMenuOpen(false)}>Contact</a>
              </div>
            )}
          </>
        ) : (
          /* Desktop Menu */
          <div style={styles.menu}>
            <a href="#home" style={styles.link}>Home</a>
            <a href="#gallery" style={styles.link}>Gallery</a>
            <a href="#contact" style={styles.link}>Contact</a>
          </div>
        )}
      </nav>

      {/* Banner */}
      <section
        id="home"
        style={{
          ...styles.banner,
          backgroundImage: `url(${images[current]})`,
        }}
      >
        <div style={styles.overlay}>
          <h1 style={styles.heading}>Bridal Makeup Artist</h1>
          <p style={styles.text}>Make Your Big Day Beautiful ✨</p>

          <a href={phoneNumber} style={styles.callBtn}>
            📞 Call Now
          </a>
        </div>
      </section>

      {/* About */}
      <section style={styles.section}>
        <h1>About Me</h1>
        <p>Professional bridal makeup artist for all occasions.</p>
      </section>

      {/* Gallery */}
      <section id="gallery" style={styles.section}>
        <h1>My Work</h1>
        <div style={styles.gallery}>
          {[img1, img2, img3, img4].map((img, i) => (
            <img key={i} src={img} alt="" style={styles.image} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.section}>
        <h1>Contact</h1>
        <p>📞 +91 63791 44667</p>
        <p>📧 bridalstudio@gmail.com</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 Harini Bridal Studio</p>
      </footer>
    </div>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#ff4d6d",
    color: "white",
  },

  menu: {
    display: "flex",
  },

  mobileMenu: {
    position: "absolute",
    top: "60px",
    right: "20px",
    background: "#ff4d6d",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    borderRadius: "10px",
  },

  hamburger: {
    fontSize: "26px",
    cursor: "pointer",
  },

  link: {
    margin: "10px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },

  banner: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: "clamp(28px, 6vw, 50px)",
  },

  text: {
    fontSize: "clamp(14px, 4vw, 18px)",
  },

  callBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#ff4d6d",
    color: "white",
    borderRadius: "25px",
    textDecoration: "none",
  },

  section: {
    padding: "40px 15px",
    textAlign: "center",
    background: "#f5f5f5",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  footer: {
    background: "#222",
    color: "white",
    padding: "10px",
    textAlign: "center",
  },
};