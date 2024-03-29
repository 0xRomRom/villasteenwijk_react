import stl from "./Reviews.module.css";
import { motion as m } from "framer-motion";
import NumberCounter from "../../../utils/NumberCounter";
import { useInView } from "react-intersection-observer";
const Reviews = ({ currentLanguage }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <section className={stl.reviews}>
      <div className={stl.avgRatedBox}>
        <m.h2
          className={stl.subHeroTitle}
          initial={{ opacity: 0, y: "-20px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1.25 }}
        >
          {currentLanguage === "Dutch" && "Gemiddelde klantwaardering"}
          {currentLanguage === "German" && "Durchschnittliche Kundenbewertung"}
          {currentLanguage === "Chinese" && "平均客户评分"}
          {currentLanguage === "English" && "Average visitor rating"}
          {currentLanguage === "Spanish" &&
            "Calificación promedio de visitantes"}
        </m.h2>
        <m.span
          className={stl.rating}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          {inView && <NumberCounter n={9.5} />}
          {inView && " / 10"}
        </m.span>
      </div>

      <div className={stl.modalsGrid}>
        <m.div
          className={stl.reviewTile}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.25 }}
        >
          <div className={stl.revToprow}>
            <img
              src="./reviewers/Reviewer1.webp"
              alt="User profile"
              className={stl.userImg}
            />
            <div className={stl.firstBlock}>
              <span className={stl.userName}>Henk W.</span>
              <span className={stl.jobType}>
                {currentLanguage === "Dutch" && "Trompmeesters kamer"}
                {currentLanguage === "German" && "Trompmeesters zimmer"}
                {currentLanguage === "Chinese" && "特罗姆梅斯特的房间"}
                {currentLanguage === "English" && "Trompmeesters room"}
                {currentLanguage === "Spanish" && "Sala de Trompmeesters"}
              </span>
            </div>
            <div className={stl.userRating}>9.3/10</div>
          </div>
          <div className={stl.userCopyWrap}>
            <p className={stl.userCopy}>
              {currentLanguage === "Dutch" &&
                "Een charmante plek! De accommodatie was knus en goed onderhouden, de eigenaren waren vriendelijk en behulpzaam. Een aangename omgeving voor een ontspannen weekendje weg."}
              {currentLanguage === "German" &&
                "Ein bezaubernder Ort! Die Unterkunft war gemütlich und gepflegt, die Besitzer waren freundlich und hilfsbereit. Eine angenehme Umgebung für einen erholsamen Wochenendausflug."}
              {currentLanguage === "Chinese" &&
                "一个迷人的地方！住宿很舒适，维护得很好，业主很友好，乐于助人。环境宜人，适合度过轻松的周末。"}
              {currentLanguage === "English" &&
                "A charming place! The accommodation was cozy and well maintained, the owners were friendly and helpful. A pleasant environment for a relaxing weekend away."}
              {currentLanguage === "Spanish" &&
                "¡Un lugar encantador! El alojamiento era acogedor y estaba bien mantenido, los propietarios eran amables y serviciales. Un ambiente agradable para un fin de semana relajante."}
            </p>
          </div>
        </m.div>

        <m.div
          className={stl.reviewTile}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.25 }}
        >
          <div className={stl.revToprow}>
            <img
              src="./reviewers/Reviewer2.webp"
              alt="User profile"
              className={stl.userImg}
            />
            <div className={stl.firstBlock}>
              <span className={stl.userName}>Lisanne K.</span>
              <span className={stl.jobType}>
                {currentLanguage === "Dutch" && "Hildo Krop kamer"}
                {currentLanguage === "German" && "Hildo Krop zimmer"}
                {currentLanguage === "Chinese" && "希尔多·克罗普房间"}
                {currentLanguage === "English" && "Hildo Krop room"}
                {currentLanguage === "Spanish" && "Sala de Hildo Krop"}
              </span>
            </div>
            <div className={stl.userRating}>9.5/10</div>
          </div>
          <div className={stl.userCopyWrap}>
            <p className={stl.userCopy}>
              {currentLanguage === "Dutch" &&
                "Een aardig bed and breakfast! De kamer was comfortabel en schoon, en het ontbijt smakelijk. Geschikt voor een rustige overnachting."}
              {currentLanguage === "German" &&
                "Ein schönes Bed & Breakfast! Das Zimmer war komfortabel und sauber und das Frühstück lecker. Geeignet für eine ruhige Übernachtung."}
              {currentLanguage === "Chinese" &&
                "一个不错的床和早餐！房间舒适干净，早餐美味。适合安静的过夜。"}
              {currentLanguage === "English" &&
                "A nice bed and breakfast. The room was comfortable and clean, and the breakfast tasty. Suitable for a quiet overnight stay."}
              {currentLanguage === "Spanish" &&
                "Una buena cama y desayuno. La habitación era cómoda y limpia, y el desayuno delicioso. Adecuado para pasar una noche tranquila."}
            </p>
          </div>
        </m.div>

        <m.div
          className={stl.reviewTile}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.25 }}
        >
          <div className={stl.revToprow}>
            <img
              src="./reviewers/Reviewer3.webp"
              alt="User profile"
              className={stl.userImg}
            />
            <div className={stl.firstBlock}>
              <span className={stl.userName}>Frank H.</span>
              <span className={stl.jobType}>
                {currentLanguage === "Dutch" && "Kleibeuker kamer"}
                {currentLanguage === "German" && "Kleibeuker zimmer"}
                {currentLanguage === "Chinese" && "粘土打击室"}
                {currentLanguage === "English" && "Kleibeuker room"}
                {currentLanguage === "Spanish" && "Sala de Kleibeuker"}
              </span>
            </div>
            <div className={stl.userRating}>9.7/10</div>
          </div>
          <div className={stl.userCopyWrap}>
            <p className={stl.userCopy}>
              {currentLanguage === "Dutch" &&
                "Geweldige B&B! Mooie kamer met een tof uitzicht. Het ontbijt was vers en lekker. De mensen daar waren echt gastvrij en maakten ons verblijf top. Zeker weer terug!"}
              {currentLanguage === "German" &&
                "Tolles B&B! Schönes Zimmer mit toller Aussicht. Das Frühstück war frisch und lecker. Die Menschen dort waren sehr gastfreundlich und haben unseren Aufenthalt großartig gemacht. Auf jeden Fall wieder!"}
              {currentLanguage === "Chinese" &&
                "很棒的民宿！漂亮的房间，景色优美。早餐新鲜可口。那里的人们非常热情好客，让我们住得很愉快。绝对会再次回来！"}
              {currentLanguage === "English" &&
                "Great B&B! Nice room with a nice view. The breakfast was fresh and delicious. The people there were really hospitable and made our stay perfect. Definitely coming back again!"}
              {currentLanguage === "Spanish" &&
                "Gran B&B! Bonita habitación con una bonita vista. El desayuno era fresco y delicioso. La gente de allí fue muy hospitalaria e hizo que nuestra estancia fuera perfecta. ¡Definitivamente regresaremos otra vez!"}
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Reviews;
