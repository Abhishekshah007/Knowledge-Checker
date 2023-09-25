import { Link } from "react-router-dom";
import img_1 from "../assets/pac.png";

function StartScreen() {
  const h1Style = {
    color: "red",
    fonFamily: "Teko",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
    hover: {
      color: "green",
    },
  };

  return (
    <>
      <Link to="/gameScreen" style={{ textDecoration: "none" }}>
        <div className="startScreen" style={divStyle}>
          <img src={img_1} alt="" width={`20%`} />
          <h1 style={h1Style}>Click Here to Start</h1>
        </div>
      </Link>
    </>
  );
}

export default StartScreen;
