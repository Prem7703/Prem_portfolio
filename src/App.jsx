import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import emailjs from "emailjs-com"; // ✅ Added for email sending

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Typing effect
  const fullText = "Cybersecurity student. I am on my race to CEH(certified ethical hacker)";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [index]);

  // Scroll reveal animation effect
  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    };

    revealSections();
    window.addEventListener("scroll", revealSections);
    return () => window.removeEventListener("scroll", revealSections);
  }, []);

  // Contact form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l7a671x",      // ✅ Replace with your EmailJS Service ID
        "template_5l9n17f",     // ✅ Replace with your EmailJS Template ID
        e.target,
        "w_Zif9WB9I6epv9Mr"       // ✅ Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <section id="home" className="section home">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/videos/3d046a430fe7be23d8e064768e1a2350.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="intro-container">
          <div className="intro-photo">
            <img src="/images/prem.jpeg" alt="Prem Kumar" />
          </div>
          <div className="intro-text">
            <h2>Hi, I'm Challagali Prem kumar</h2>
            <p>
              {typedText}
              <span className="cursor">|</span>
            </p>
            <div className="button-and-icons">
              <div className="buttons">
                <a href="/Premcv.pdf" download>
                  <button>Download CV</button>
                </a>
                <button>Contact</button>
              </div>
              <div className="social-icons">
                <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/_prem_6201?igsh=MWUyaXJrZDU5eXE4Nw==" target="_blank" rel="noopener noreferrer" className="icon instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/7396158856" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/in/prem-kumar-958899250?" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about new-about-section">
        <div className="about-content">
          <div className="about-image">
            <img src="/images/674208.gif" alt="Illustration" />
          </div>
          <div className="about-text">
            <h2>
              <span>
                A LITTLE BIT ABOUT MYSELF
              </span>
            </h2>
            <p>
              I am currently pursuing my master's degree in Cybersecurity from <strong><a href="https://pallaviengineeringcollege.ac.in/">Pallavi engineering college</a></strong>. I am concentrating on subjects related to ethical hacking, penetration testing, and network security. I am also preparing for CEH (Certified Ethical Hacker) certification.
            </p>
            <p>
              I have completed my Diploma in Computer Engineering from T.R.R College of Polytechnic in Meerpet. During my academic journey, I developed a strong foundation in computing and technology, and I have worked on various web-based projects that helped me strengthen my technical skills.
            </p>
            <p>
              Outside academics, I love playing volleyball and spend time every day surfing Google to explore new topics and learn interesting things.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <h2>My certifications</h2>
        <div className="project-gallery">
          <div className="card">
            <img src="/images/introductiontocip.jpeg" alt="Project 1" />
            <div className="card-content">
              <h3>ICIP Certification</h3>
              <p>Introduction to Critical Infrastructure Protection.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/my certificate 2.png" alt="Project 2" />
            <div className="card-content">
              <h3>Cyber Security</h3>
              <p>Certificate of Participation in CyberSec Training.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/Programming with Python.png" alt="Project 3" />
            <div className="card-content">
              <h3>Project 3</h3>
              <p>Description about project 3 here.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/cybersecurity Bootcamp.png" alt="Project 4" />
            <div className="card-content">
              <h3>Project 4</h3>
              <p>Description about project 4 here.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/my certificate 5.png" alt="Project 5" />
            <div className="card-content">
              <h3>Project 3</h3>
              <p>Description about project 3 here.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/my certificate 6.png" alt="Project 6" />
            <div className="card-content">
              <h3>Project 3</h3>
              <p>Description about project 3 here.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/my certificate 7.png" alt="Project 7" />
            <div className="card-content">
              <h3>Project 3</h3>
              <p>Description about project 3 here.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/my certificate 8.png" alt="Project 8" />
            <div className="card-content">
              <h3>Project 3</h3>
              <p>Description about project 3 here.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2025 challagali prem kumar</p>
      </footer>
    </div>
  );
}

export default App;
