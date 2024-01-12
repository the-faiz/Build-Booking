import React from "react";
import BenefitCard from "./BenefitCard";
import "./Box5.css";

const Box5 = () => {
  return (
    <div>
      <div className="box5">
        <h1 className="text-success">Benefits</h1>
        <div className="benefits">
          <BenefitCard url="https://vectorified.com/images/clubhouse-icon-19.jpg" text="Club House" />
          <BenefitCard url="https://www.svgrepo.com/show/53083/bar.svg" text="Bar/Lounge" />
          <BenefitCard url="https://tse1.mm.bing.net/th?id=OIP.3wZG3kUxT1z6ugi1E5W0SgHaHa&pid=Api&P=0&h=220" text="Lift" />
          <BenefitCard url="https://cdn3.iconfinder.com/data/icons/kids-flat-colorful/2048/5542_-_Swimming-1024.png" text="Kids Pool" />
          <BenefitCard url="https://www.svgrepo.com/show/219805/swimming-pool.svg" text="Swimming Pool" />
          <BenefitCard url="https://tse1.mm.bing.net/th?id=OIP._oYctPRyIDOdWjnenuGD6gAAAA&pid=Api&P=0&h=220" text="Banquet Hall" />
          <BenefitCard url="https://flyclipart.com/thumb2/gym-png-icon-free-download-838750.png" text="Gymnasium" />
          <BenefitCard url="https://tse2.mm.bing.net/th?id=OIP.9yfWGGyC7leVoFZeHPjQ0AHaHa&pid=Api&P=0&h=220" text="Power BackUp" />
        </div>
      </div>
    </div>
  );
};

export default Box5;
