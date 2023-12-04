import React from 'react'
import '../assets/css/Talents.css'
import { Link } from 'react-router-dom'
import search from '../assets/images/search.png'
import TalentCard from '../components/frontend/TalentCard'
import music from '../assets/images/music.png'
import James from '../assets/images/James.png'
import angela from '../assets/images/angela.png'
import shoe from '../assets/images/shoe.png'
import harry from '../assets/images/harry.png'
import decorations from '../assets/images/decorations.png'
import paul from '../assets/images/paul.png'
import cloth from '../assets/images/cloth.png'
import mary from '../assets/images/mary.png'
import chef from '../assets/images/chef.png'
import deejay from '../assets/images/deejay.png'
import dj from '../assets/images/dj.png'

const Talents = () => {
  return (
    <div className="talents">
      <div className="talent-container">
        <h1>Talents</h1>
       <ul className="talent-link">
         <li><Link>Discover your Best Talents</Link></li>
         <li><Link>All Categories</Link></li>
         <li><Link>Music</Link></li>
         <li><Link>Disc Jockey</Link></li>
         <li><Link>Event Planner</Link></li>
         <li><Link><img src={search} alt="" /></Link></li>
       </ul>
       <div className="talentContainer-cards">
          <TalentCard
          talentName="James cold"
          talentTitle="singer"
          talentImage={James}
          image={music}
          talentBtn="Book"
          />

          <TalentCard
          talentName="Angela Peters"
          talentTitle="Music Producer"
          talentImage={angela}
          image={shoe}
          talentBtn="Book"
          />

          <TalentCard
          talentName="Harry Stone"
          talentTitle="Event Planner"
          talentImage={harry}
          image={decorations}
          talentBtn="Book" 
          />

          <TalentCard
          talentName="Paul Smith"
          talentTitle="Fashion Designer"
          talentImage={paul}
          image={cloth}
          talentBtn="Book" 
          />

          <TalentCard
          talentName="Mary Blues"
          talentTitle="chef"
          talentImage={mary}
          image={chef}
          talentBtn="Book"
          />

          <TalentCard
          talentName="Deejay Ivav"
          talentTitle="Disc Jockey"
          talentImage={deejay}
          image={dj}
          talentBtn="Book"
          />
       </div>

        <div className="talents-link">
          <button className="talentlink-Btn"><Link>Show me more</Link></button>
        </div>
  
      </div>

    </div>
  )
}

export default Talents