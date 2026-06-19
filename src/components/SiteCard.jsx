import React from 'react';
import { MapPin } from 'lucide-react';

const SiteCard = ({ site }) => {
  return (
    <article className="site-card">
      <div className="site-card-image-wrapper">
        <img 
          src={site.image} 
          alt={site.title} 
          className="site-card-image"
        />
      </div>
      <div className="site-card-content">
        <h3 className="site-card-title">{site.title}</h3>
        <div className="site-card-location">
          <MapPin size={16} />
          <span>{site.location}</span>
        </div>
        <p className="site-card-desc">{site.description}</p>
      </div>
    </article>
  );
};

export default SiteCard;
