import React, { useState, useEffect } from 'react';
import { historicalSites } from './data/sites';
import SiteCard from './components/SiteCard';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const heroSite = historicalSites.find(site => site.id === 'kilwa');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <>
      <header className="hero">
        <img src={heroSite.image} alt="Tanzania Heritage" className="hero-bg" />
        <div className="hero-overlay"></div>
        <nav className="navbar container">
          <div className="nav-logo">UrithiTz</div>
          <button 
            className="theme-toggle" 
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Timeless Heritage</h1>
          <p className="hero-subtitle">Discover the majestic ruins and ancient cultures scattered across Tanzania's beautiful landscapes.</p>
        </div>
      </header>

      <main>
        <section className="section container">
          <h2 className="section-title text-gradient">Discover Historical Sites</h2>
          <p className="section-subtitle">
            Explore the rich tapestry of human history. From ancient coastal empires to the very cradle of mankind.
          </p>
          
          <div className="sites-grid">
            {historicalSites.map(site => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        </section>

        <section className="section about-section">
          <div className="container about-content">
            <h2 className="section-title text-gradient">Our Heritage, Our Pride</h2>
            <p className="about-text">
              Tanzania is home to some of the most significant archaeological and historical sites in the world. 
              These locations offer a glimpse into the early stages of human evolution, the vibrant coastal trading 
              empires, and the diverse cultures that have shaped the region over millennia.
            </p>
            <p className="about-text">
              Preserving these sites ensures that future generations can learn from and appreciate the deep 
              historical roots that connect us all.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-logo">UrithiTz</div>
          <p className="footer-text">&copy; {new Date().getFullYear()} Tanzania Historical Sites. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
