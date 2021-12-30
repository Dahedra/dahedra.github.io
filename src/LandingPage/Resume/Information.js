import React from "react";
import "animate.css";

export default function Information() {
  return (
    <div className="information-container">
      <div className="information-parent">
        <div className="information-details"></div>

        <div className="information-details-languages">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="information-javascript">JavaScript</h1>
          </div>

          <div className="animate__animated animate__fadeInLeft animate__delay-1s">
            <h1 className="information-html">HTML</h1>
          </div>

          <div className="animate__animated animate__fadeInLeft animate__delay-2s">
            <h1 className="information-react">React</h1>
          </div>

          <div className="animate__animated animate__fadeInLeft animate__delay-3s">
            <h1 className="information-c#">C#</h1>
          </div>

          <div className="animate__animated animate__fadeInLeft animate__delay-4s">
            <h1 className="information-postgresql">postgreSQL</h1>
          </div>
        </div>

        <div className="information-details-hobby2">
          <span></span>
        </div>

        <div className="information-details-hobby3">
          <span></span>
        </div>
      </div>
    </div>
  );
}
