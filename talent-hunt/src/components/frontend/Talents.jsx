import React, { useState } from 'react';
import '../../assets/css/index.css';
import search from '../../assets/images/search.png';
import TalentCard from './TalentCard';
import music from '../../assets/images/music.png';
import James from '../../assets/images/James.png';
import angela from '../../assets/images/angela.png';
import shoe from '../../assets/images/shoe.png';
import harry from '../../assets/images/harry.png';
import decorations from '../../assets/images/decorations.png';
import paul from '../../assets/images/paul.png';
import cloth from '../../assets/images/cloth.png';
import mary from '../../assets/images/mary.png';
import chef from '../../assets/images/chef.png';
import deejay from '../../assets/images/deejay.png';
import dj from '../../assets/images/dj.png';

const talentsData = [
  { talentName: 'James Cold', talentTitle: 'Singer', talentImage: James, image: music, talentBtn: 'Book' },
  { talentName: 'Angela Peters', talentTitle: 'Music Producer', talentImage: angela, image: shoe, talentBtn: 'Book' },
  { talentName: 'Harry Stone', talentTitle: 'Event Planner', talentImage: harry, image: decorations, talentBtn: 'Book' },
  { talentName: 'Paul Smith', talentTitle: 'Fashion Designer', talentImage: paul, image: cloth, talentBtn: 'Book' },
  { talentName: 'Mary Blues', talentTitle: 'Chef', talentImage: mary, image: chef, talentBtn: 'Book' },
  { talentName: 'Deejay Ivav', talentTitle: 'Disc Jockey', talentImage: deejay, image: dj, talentBtn: 'Book' },
  // Add more talents as needed
];

const Talents = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="talents">
      <div className="talent-container">
        <h1>Talents</h1>
        <div className="talent-link">
          <p>Discover your Best Talents</p>
          <button className="buttonLink" onClick={() => handleCategoryChange('All')}>All Categories</button>
          <button className="btn-link" onClick={() => handleCategoryChange('Music')}>Music</button>
          <button className="btn-link" onClick={() => handleCategoryChange('Disc Jockey')}>Disc Jockey</button>
          <button className="btn-link" onClick={() => handleCategoryChange('Event Planner')}>Event Planner</button>
          {/* Add more category buttons as needed */}
          <button className="btn-link"><img src={search} alt="" /></button>
        </div>

        <div className="card">
          {talentsData
            .filter((talent) => selectedCategory === 'All' || talent.talentTitle === selectedCategory)
            .map((talent, index) => (
              <TalentCard key={index} {...talent} />
            ))}
          </div>

        <div className="talents-link">
          <button className="talentlink-Btn">Show me more</button>
        </div>
      </div>
    </div>
  );
};

export default Talents;