import React, { useMemo } from "react";
import stl from "./OntbijtService.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion as m } from "framer-motion";

import pic1 from "../../assets/ontbijt/Pic1.webp";
import pic2 from "../../assets/ontbijt/Pic2.webp";
import pic3 from "../../assets/ontbijt/Pic3.webp";
import pic4 from "../../assets/ontbijt/Pic4.webp";
import pic5 from "../../assets/ontbijt/Pic5.webp";
import pic6 from "../../assets/ontbijt/Pic6.webp";

const OntbijtService = ({ currentLanguage }) => {
  const content = {
    Dutch: {
      title: "Luxe Ontbijt",
      description:
        "Begin uw dag met een heerlijk en uitgebreid ontbijt, vers bereid en met zorg geserveerd.",
    },
    German: {
      title: "Luxuriöses Frühstück",
      description:
        "Starten Sie Ihren Tag mit einem köstlichen und reichhaltigen Frühstück.",
    },
    Chinese: {
      title: "豪华早餐",
      description: "用精心准备的新鲜早餐开启美好的一天。",
    },
    English: {
      title: "Luxury Breakfast",
      description:
        "Start your day with a delicious and rich breakfast, freshly prepared and served with care.",
    },
    Spanish: {
      title: "Desayuno de Lujo",
      description:
        "Empieza tu día con un desayuno delicioso y completo, preparado con cuidado.",
    },
  };

  const { title, description } = content[currentLanguage] || content.English;

  const images = useMemo(() => [pic1, pic6, pic2, pic3, pic4, pic5], []);

  return (
    <div className={stl.ontbijtService}>
      <div className={stl.header}>
        <m.h1
          className={stl.title}
          initial={{ opacity: 0, x: "-20px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1.25 }}
        >
          {title}
        </m.h1>
        <p className={stl.description}>{description}</p>
      </div>

      <div className={stl.grid}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3 }}
        >
          <Masonry gutter="16px">
            {images.map((img, index) => (
              <m.img
                key={index}
                src={img}
                alt={`Breakfast ${index + 1}`}
                className={stl.image}
                loading="lazy"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default OntbijtService;
