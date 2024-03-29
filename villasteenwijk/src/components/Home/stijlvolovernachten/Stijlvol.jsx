import stl from "./Stijlvol.module.css";
import { motion as m } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const Stijlvol = ({ currentLanguage }) => {
  const navigate = useNavigate();
  return (
    <section className={stl.stijlvol}>
      <m.h1
        className={stl.hero}
        initial={{ opacity: 0, x: "-30px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {currentLanguage === "Dutch" && "Stijlvol overnachten"}
        {currentLanguage === "German" && "Verbringen Sie die nacht mit stil"}
        {currentLanguage === "Chinese" && "时尚地度过一晚"}
        {currentLanguage === "English" && "Spend the night in style"}
        {currentLanguage === "Spanish" && "Pasar la noche con estilo"}
      </m.h1>
      <div className={stl.contentWrap}>
        <m.p
          className={stl.copy}
          initial={{ opacity: 0, x: "-30px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {currentLanguage === "Dutch" &&
            "Rick & Patrick heten u van harte welkom in Boutique hotel Villa Steenwyck."}
          {currentLanguage === "German" &&
            "Rick & Patrick heißen Sie herzlich willkommen im Boutique-Hotel Villa Steenwyck."}
          {currentLanguage === "Chinese" &&
            "Rick 和 Patrick 热烈欢迎您光临 Villa Steenwyck 精品酒店。"}
          {currentLanguage === "English" &&
            "Rick & Patrick wish you a warm welcome to Boutique hotel Villa Steenwyck."}
          {currentLanguage === "Spanish" &&
            "Rick y Patrick le desean una cálida bienvenida al hotel boutique Villa Steenwyck."}
          <br />
          <br />
          {currentLanguage === "Dutch" &&
            "Luxe, maar voordelig, overnachten kan in 1 van onze 6 gloednieuwe vertrekken in het historische stadscentrum van het vestings stadje Steenwijk."}
          {currentLanguage === "German" &&
            "Sie können die Nacht in einer unserer 6 luxuriösen, aber erschwinglichen Unterkünften verbringen brandneue Quartiere im historischen Stadtzentrum der Festungsstadt Steenwijk."}
          {currentLanguage === "Chinese" &&
            "您可以在我们位于斯滕韦克要塞小镇历史悠久的市中心的 6 间全新客房中的一间度过一个豪华但价格实惠的夜晚。"}
          {currentLanguage === "English" &&
            "You can spend the night in luxury, but affordably, in 1 of our 6 brand new rooms in the historic city center of the fortified town of Steenwijk."}
          {currentLanguage === "Spanish" &&
            "Puede pasar la noche con lujo, pero a un precio asequible, en 1 de nuestras 6 habitaciones nuevas en el centro histórico de la ciudad fortificada de Steenwijk."}
          <br />
          <br />
          {currentLanguage === "Dutch" &&
            "Boutique hotel villa Steenwyck is geopend in januari 2023. Alles is splinternieuw en overal is aan gedacht;"}
          {currentLanguage === "German" &&
            "Das Boutique-Hotel Villa Steenwyck wurde im Januar 2023 eröffnet. Alles ist brandneu und an alles wurde gedacht;"}
          {currentLanguage === "Chinese" &&
            "Steenwyck精品酒店别墅于2023年1月开业。一切都是全新的，一切都经过深思熟虑；"}
          {currentLanguage === "English" &&
            "Boutique hotel villa Steenwyck opened in January 2023. Everything is brand new and everything has been thought of;"}
          {currentLanguage === "Spanish" &&
            "El hotel boutique villa Steenwyck abrió sus puertas en enero de 2023. Todo es nuevo y todo ha sido pensado;"}
          <br />
          <br />
          {currentLanguage === "Dutch" &&
            "Luxe grote “Van der Valk” Boxspring bedden van Swiss Sense, heerlijk wit, fris satijnen beddengoed en badtextiel van het beroemde merk “De Witte Lietaer” uit België en alle kamers zijn voorzien van Daikin warmtepomp airconditioners voor het milieu bewust koelen en verwarmen met ingebouwde flash-streamer luchtreiniging tegen stof, pollen, virussen, bacteriën en allergenen, Voor een altijd frisse “berglucht” in uw kamer. 80% van onze energie wordt opgewekt door onze zonnepanelen voor een zo milieu bewust mogelijk verblijf."}
          {currentLanguage === "German" &&
            "Luxuriöse große „Van der Valk“-Boxspringbetten von Swiss Sense, wunderschöne weiße, frische Satinbettwäsche und Badewäsche der bekannten Marke „De Witte Lietaer“ aus Belgien und alle Zimmer sind mit Daikin-Wärmepumpen-Klimaanlagen für umweltbewusste Kühlung und Klimatisierung ausgestattet Heizung mit integriertem Flash-Streamer, Luftreinigung gegen Staub, Pollen, Viren, Bakterien und Allergene, für immer frische „Bergluft“ in Ihrem Raum. 80 % unserer Energie wird durch unsere Solarpaneele erzeugt, um einen möglichst umweltbewussten Aufenthalt zu gewährleisten."}
          {currentLanguage === "Chinese" &&
            "瑞士Sense豪华大型“Van der Valk”弹簧床，比利时著名品牌“De Witte Lietaer”的精美白色清新缎面床上用品和浴巾，所有房间均配备大金热泵空调，实现环保制冷和内置闪光流光加热可净化空气，防止灰尘、花粉、病毒、细菌和过敏原，让您的房间始终拥有新鲜的“山间空气”。我们 80% 的能源由太阳能电池板产生，以实现最环保的住宿体验。"}
          {currentLanguage === "English" &&
            "Luxurious large “Van der Valk” box spring beds from Swiss Sense, wonderful white, fresh satin bedding and bath linen from the famous brand “De Witte Lietaer” from Belgium and all rooms are equipped with Daikin heat pump air conditioners for environmentally conscious cooling and heating with built-in flash streamer air purification against dust, pollen, viruses, bacteria and allergens, for always fresh 'mountain air' in your room. 80% of our energy is generated by our solar panels for the most environmentally conscious stay possible."}
          {currentLanguage === "Spanish" &&
            "Lujosas camas grandes con somier 'Van der Valk' de Swiss Sense, maravillosa ropa de cama y ropa de baño de satén blanco y fresco de la famosa marca 'De Witte Lietaer' de Bélgica y todas las habitaciones están equipadas con aires acondicionados con bomba de calor Daikin para una refrigeración y un ambiente respetuosos con el medio ambiente. Calefacción con purificación de aire Flash Streamer integrada contra polvo, polen, virus, bacterias y alérgenos, para tener siempre un 'aire de montaña' fresco en su habitación. El 80% de nuestra energía es generada por nuestros paneles solares para una estancia lo más respetuosa con el medio ambiente posible."}
        </m.p>
        <div className={stl.imgWrap}>
          <m.img
            src="./home/Stijlvol.webp"
            alt="Kamer in Boutique Hotel Villa Steenwijk"
            className={stl.stijlvolImg}
            initial={{ opacity: 0, x: "30px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <m.span
            onClick={() => navigate("/kamersprijzen")}
            className={stl.bekijkCta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {currentLanguage === "Dutch" && "Bekijk kamers"}
            {currentLanguage === "German" && "Zimmer ansehen"}
            {currentLanguage === "Chinese" && "查看房间"}
            {currentLanguage === "English" && "See rooms"}
            {currentLanguage === "Spanish" && "Ver habitaciones"}
            <FaArrowRight className={stl.arrowRight} />
          </m.span>
        </div>
      </div>
    </section>
  );
};

export default Stijlvol;
