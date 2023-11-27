import stl from "./Reviews.module.css";
import { motion as m } from "framer-motion";
import NumberCounter from "../../../utils/NumberCounter";
import { useInView } from "react-intersection-observer";
const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <section className={stl.reviews}>
      {/* <m.h1
        className={stl.hero}
        initial={{ opacity: 0, x: "-30px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Laat onze gasten u overtuigen
      </m.h1> */}
      <div className={stl.avgRatedBox}>
        <m.h2
          className={stl.subHeroTitle}
          initial={{ opacity: 0, y: "-20px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1.25 }}
        >
          Gemiddelde klantwaardering
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
          initial={{ opacity: 0, y: "-30px" }}
          whileInView={{ opacity: 1, y: "0px", duration: 0.4 }}
          animate={{ opacity: 1, y: "30px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className={stl.revToprow}>
            <img
              src="./reviewers/Reviewer1.webp"
              alt="User profile"
              className={stl.userImg}
            />
            <div className={stl.firstBlock}>
              <span className={stl.userName}>Henk W.</span>
              <span className={stl.jobType}>Trompmeesters kamer</span>
            </div>
            <div className={stl.userRating}>9.5/10</div>
          </div>
          <div className={stl.userCopyWrap}>
            <p className={stl.userCopy}>
              "Een charmante plek! De accommodatie was knus en goed onderhouden,
              de eigenaren waren vriendelijk en behulpzaam. Een aangename
              omgeving voor een ontspannen weekendje weg."
            </p>
          </div>
        </m.div>

        <m.div
          className={stl.reviewTile}
          initial={{ opacity: 0, y: "-30px" }}
          whileInView={{ opacity: 1, y: "0px", duration: 0.4 }}
          animate={{ opacity: 1, y: "30px" }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
        >
          <div className={stl.revToprow}>
            <img
              src="./reviewers/Reviewer2.webp"
              alt="User profile"
              className={stl.userImg}
            />
            <div className={stl.firstBlock}>
              <span className={stl.userName}>Lisanne K.</span>
              <span className={stl.jobType}>Hildo Krop kamer</span>
            </div>
            <div className={stl.userRating}>9.5/10</div>
          </div>
          <div className={stl.userCopyWrap}>
            <p className={stl.userCopy}>
              "Een aardig bed and breakfast! De kamer was comfortabel en schoon,
              en het ontbijt smakelijk. Geschikt voor een rustige overnachting."
            </p>
          </div>
        </m.div>

        <m.div
          className={stl.reviewTile}
          initial={{ opacity: 0, y: "-30px" }}
          whileInView={{ opacity: 1, y: "0px", duration: 0.4 }}
          animate={{ opacity: 1, y: "30px" }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        >
          <div className={stl.revToprow}>
            <img
              src="./reviewers/Reviewer3.webp"
              alt="User profile"
              className={stl.userImg}
            />
            <div className={stl.firstBlock}>
              <span className={stl.userName}>Frank H.</span>
              <span className={stl.jobType}>Kleibeuker kamer</span>
            </div>
            <div className={stl.userRating}>9.5/10</div>
          </div>
          <div className={stl.userCopyWrap}>
            <p className={stl.userCopy}>
              "Geweldige B&B! Mooie kamer met een tof uitzicht. Het ontbijt was
              vers en lekker. De mensen daar waren echt gastvrij en maakten ons
              verblijf top. Zeker weer terug!"
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Reviews;
