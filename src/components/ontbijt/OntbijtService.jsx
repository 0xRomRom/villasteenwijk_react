import React from "react";
import stl from "./OntbijtService.module.css";

const OntbijtService = ({ currentLanguage }) => {
  return (
    <div className={stl.ontbijtService}>
      <h1 className={stl.title}>
        {currentLanguage === "Dutch" && "Luxe Ontbijt"}
        {currentLanguage === "German" && "Luxuriöses Frühstück"}
        {currentLanguage === "Chinese" && "豪华早餐"}
        {currentLanguage === "English" && "Luxury Breakfast"}
        {currentLanguage === "Spanish" && "Desayuno de Lujo"}
      </h1>
    </div>
  );
};

export default OntbijtService;
