import React from 'react'
import './Talents.css'
import { Link } from 'react-router-dom'
import search from '../assets/search.png'
import TalentCard from '../components/TalentCard'
import music from '../assets/music.png'
import James from '../assets/James.png'
import angela from '../assets/angela.png'
import shoe from '../assets/shoe.png'
import harry from '../assets/harry.png'
import decorations from '../assets/decorations.png'
import paul from '../assets/paul.png'
import cloth from '../assets/cloth.png'
import mary from '../assets/mary.png'
import chef from '../assets/chef.png'
import deejay from '../assets/deejay.png'
import dj from '../assets/dj.png'



const Talents = () => {
  return (
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
       
    </div>
  )
}

export default Talents