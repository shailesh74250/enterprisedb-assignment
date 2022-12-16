import React, { FC } from "react";
import pets from "../../assets/pets.jpg";
import "./petsImg.css";

export const PetsImg: FC = () => (
  <div className="meeting_details_section">
    <img src={pets} alt="pets" className="pets_img" />
  </div>
);
