import React from "react";
import "../../assets/css/index.css";

const TalentCard = ({
  image,
  talentImage,
  talentName,
  talentTitle,
  talentBtn,
}) => {
  return (
    <div className="talentCard">
      <img className="talentCard-thumbnail" src={image} alt="" />
      <div className="talentCard-info">
        <img className="talent-avatar" src={talentImage} alt="" />
        <div className="talent-text">
          <h3>{talentName}</h3>
          <p>{talentTitle}</p>
        </div>
      </div>
      <button className="talent-btn">{talentBtn}</button>
    </div>
  );
};

export default TalentCard;
