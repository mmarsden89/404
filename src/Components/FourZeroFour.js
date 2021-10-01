import "./FourZeroFour.scss";

const FourZeroFour = () => {
  const starArr = new Array(100).fill(0, 0, 99);
  const starsHTML = starArr.map((star, idx) => (
    <div
      className="star"
      style={{
        bottom: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        height: `${Math.round(Math.random() * 2)}px`,
        width: `${Math.round(Math.random() * 2)}px`,
        animation: `animation: starshine ${
          Math.random() * 15
        }s linear infinite`,
      }}
      key={idx}
    ></div>
  ));

  const loadHome = () => {
    console.log("are we at least getting here?");
    console.log(
      "is this location not equal to parent?",
      window.location !== window.parent.location
    );
    console.log("current location", window.location);
    if (window.location !== window.parent.location) {
      window.parent.postMessage({ message: "how bout message?" }, "*");
    }
  };

  return (
    <div className="fourohfour-container">
      {starsHTML}
      {/* will use this somewhere else cause its kinda cool */}
      {/* <div data-hover="404" className="fourohfour">
        404
      </div> */}
      <div className="comet"></div>
      <div className="comet2"></div>
      <div className="sun"></div>
      <div className="title-container">
        <div className="moon-container">
          <div className="four">4</div>
          <div className="moon"></div>
          <div className="four">4</div>
        </div>
        <div className="just-space">NO PAGE HERE, JUST SPACE</div>
        <div className="go-home">
          <div onClick={loadHome}>GO HOME?</div>
        </div>
      </div>
      <div className="spaceship-container">
        <div className="spaceship">
          <div className="back-engine"></div>
        </div>
      </div>
      <div className="alien">
        <div className="alien-smoke"></div>
        <div className="alien-smoke2"></div>
        <div className="alien-smoke3"></div>
        <div className="alien-smoke4"></div>
        <div className="alien-smoke5"></div>
      </div>
      <div className="cloud"></div>
      <div className="cloud2"></div>
    </div>
  );
};
export default FourZeroFour;
