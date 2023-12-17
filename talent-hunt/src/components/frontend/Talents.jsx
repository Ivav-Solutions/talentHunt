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
  const [pageIndex, setPageIndex] = useState(1);

  const handlePageIndex = (number) => {
    setPageIndex(number);
  };

  return (
    <div className="talents">
      <div className="talent-container">
        <h1>Talents</h1>
        <p>Discover your Best Talents</p>
        <div className="talent-link">
          <button onClick={() => handlePageIndex(2)} className="all">All Categories</button>
          <button onClick={() => handlePageIndex(3)}>Music</button>
          <button onClick={() => handlePageIndex(4)}>Disc Jockey</button>
          <button><img src={search} alt="" /></button>
        </div>

        {talentsData.map((talent, index) => (
          pageIndex === index + 1 && <TalentCard key={index} {...talent} />
        ))}

        <div className="talents-link">
          <button className="talentlink-Btn">Show me more</button>
        </div>
      </div>
    </div>
  );
};

export default Talents;