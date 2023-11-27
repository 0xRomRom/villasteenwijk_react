import stl from "./KamerModal.module.css";
import hildoImg1 from "../../assets/hildokrop/Pic1.webp";

const KamerModal = () => {
  return (
    <div className={stl.kamermodal}>
      <div className={stl.modal}>
        <h1 className={stl.hero}>Hildo krop</h1>
        <img src={hildoImg1} alt="Hildo Krop Kamer" className={stl.roomImg} />
      </div>
    </div>
  );
};

export default KamerModal;
