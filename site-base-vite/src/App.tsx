import './App.css';
import React from 'react';

export default function App() {
  return (
    <>
      {/* ================= NAVIGATION ================= */}
      <nav className="nav-bar">
        <div className="nav-logo">SiteRevamp 48</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <header className="hero" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="overlay">
          <h1 className="headline">Your Website in 48 Hours</h1>
          <p className="intro">No risk. No upfront cost. A modern, grant‑ready site that converts visitors into believers.</p>
          <a href="#contact" className="cta primary-cta">Get My Free Demo</a>
        </div>
      </header>

      {/* ================= VISUAL EVIDENCE ================= */}
      <section className="social-proof fade-in-section">
        <h2>Trusted by orgs like</h2>
        <div className="logos">
          <img src="/logo1.svg" alt="Client 1" />
          <img src="/logo2.svg" alt="Client 2" />
          <img src="/logo3.svg" alt="Client 3" />
          <img src="/logo4.svg" alt="Client 4" />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="services fade-in-section">
        <h2>What We Deliver</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Lightning Build</h3>
            <p>A fully‑hosted React site assembled in under 48 hours—perfect for tight grant deadlines.</p>
          </div>
          <div className="card">
            <h3>Grant‑Optimised Copy</h3>
            <p>Messaging tuned to grant reviewers and donors, not just customers.</p>
          </div>
          <div className="card">
            <h3>AI Chatbot Integration</h3>
            <p>24/7 visitor engagement without extra staff.</p>
          </div>
          <div className="card">
            <h3>Mobile & ADA Ready</h3>
            <p>Score 95+ on Lighthouse and meet WCAG 2.2 guidelines out of the box.</p>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="process fade-in-section">
        <h2>Our 3‑Step Process</h2>
        <ol className="steps">
          <li><strong>Discovery Call</strong> – 15 min to capture goals & branding.</li>
          <li><strong>48‑Hour Demo</strong> – we build & host a live preview site.</li>
          <li><strong>Launch or Leave</strong> – you keep it only if you love it.</li>
        </ol>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="testimonials fade-in-section">
        <h2>Client Stories</h2>
        <blockquote>
          “GrantCut rebuilt our site in two days and our grant approval rate jumped 30 %. Couldn’t be happier.”
          <cite>— S. Clark, Hope 4 All Foundation</cite>
        </blockquote>
        <blockquote>
          “The 48‑hour demo blew us away. We signed off immediately and saw donor engagement double.”
          <cite>— L. Nguyen, Community Roots NGO</cite>
        </blockquote>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact fade-in-section">
        <h2>Ready for your demo?</h2>
        <p>Email <a href="mailto:hello@grantcut.com">hello@grantcut.com</a> or click below.</p>
        <a href="mailto:hello@grantcut.com" className="cta secondary-cta">Request a Demo Slot</a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © {new Date().getFullYear()} GrantCut · SiteRevamp 48 • All rights reserved
      </footer>
    </>
  );
}
