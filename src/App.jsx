import React from 'react';
import { historicalSites } from './data/sites';
import SiteCard from './components/SiteCard';

function App() {
  const heroSite = historicalSites.find(site => site.id === 'kilwa');

  return (
    <>
      <header className="hero">
        <img src={heroSite.image} alt="Tanzania Heritage" className="hero-bg" />
        <div className="hero-overlay"></div>
        <nav className="navbar container">
          <div className="nav-logo">UrithiTz</div>
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
      </main>
    </>
  );
}

export default App;
