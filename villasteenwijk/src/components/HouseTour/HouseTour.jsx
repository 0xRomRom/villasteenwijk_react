import stl from "./HouseTour.module.css";

const HouseTour = () => {
  return (
    <>
      <div className={stl.portfolio}>
        <iframe
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          style={{ width: "100vw", height: "100vh" }}
          src="https://my.matterport.com/show/?m=GqLhy5y9YcB&back=1"
          frameborder="0"
          allowfullscreen
          allow="xr-spatial-tracking"
        ></iframe>
      </div>
    </>
  );
};

export default HouseTour;
