import React, { useState } from 'react'
import '../../assets/css/index.css'
import search from '../../assets/images/search.png'
import TalentCard from './TalentCard'
import music from '../../assets/images/music.png'
import James from '../../assets/images/James.png'
import angela from '../../assets/images/angela.png'
import shoe from '../../assets/images/shoe.png'
import harry from '../../assets/images/harry.png'
import decorations from '../../assets/images/decorations.png'
import paul from '../../assets/images/paul.png'
import cloth from '../../assets/images/cloth.png'
import mary from '../../assets/images/mary.png'
import chef from '../../assets/images/chef.png'
import deejay from '../../assets/images/deejay.png'
import dj from '../../assets/images/dj.png'

const Talents = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const handlePageIndex = (number) => {
    setPageIndex(number)
  }
  return (
    <div className="talents">
      <div className="talent-container">
        <h1>Talents</h1>
       <div className="talent-link">
         <button onClick={() => handlePageIndex(1)}>Discover your Best Talents</button>
         <button onClick={() => handlePageIndex(2)} className="all">All Categories</button>
         <button onClick={() => handlePageIndex(3)}>Music</button>
         <button onClick={() => handlePageIndex(4)}>Disc Jockey</button>
         <button onClick={() => handlePageIndex(5)}>Event Planner</button>
         <button><img src={search} alt="" /></button>
       </div>
       {pageIndex == 1 && <div className="talentContainer-cards">
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
       </div>}

       {pageIndex == 2 &&<div className="talentContainer-cards">
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
       </div>}

       {pageIndex == 3 && <div className="talentContainer-cards">
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
       </div>}

       {pageIndex == 4 && <div className="talentContainer-cards">
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
       </div>}

       {pageIndex == 5 && <div className="talentContainer-cards">
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
       </div>}

        <div className="talents-link">
          <button className="talentlink-Btn">Show me more</button>
        </div>
  
      </div>

    </div>
  )
}

export default Talents