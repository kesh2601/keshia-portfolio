import React from "react";
import "../Home/home.css";

import photo_without_bg from "../../images/photo_without_bg.png"
function Home () {
  return(
    <>
      <section className="container-fluid">
        <div className="d-flex flex-row justify-content-around align-items-center">
          <div className="flex-column">
            <div className="cinzel-ord">Hey there! I'm</div>
            <div className="cinzel-decorative-black"> Keshia Adrin</div>
            <div className="caveat-brush-regular"> Turning visions into sites is my thing</div>
          </div>
          <img src= {photo_without_bg} className="img"/>
        </div>
      </section>
    </>
  );
}

export default Home;