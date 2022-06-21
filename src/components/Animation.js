import React from 'react'
import {BiDownArrow} from "react-icons/bi"
const Animation = () => {
  return (
    <div
      className="p-5 bg-dark text-white text-center"
      style={{ height: "100vh" }}
    >
      <div>
        <h2 className="text_shadows font-monospace">Welcome!</h2>
      </div>
      <div className="container text-bottom" style={{ height: "100%" }}>
        <div className="planet">
          <div className="wrap">
            <div className="background"></div>
            <div className="clouds"></div>
          </div>
          <div className="mask"></div>
        </div>
        <div style={{ fontSize: "100px", marginTop: "460px" }}>
          <a href="#nav">
            <BiDownArrow />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Animation