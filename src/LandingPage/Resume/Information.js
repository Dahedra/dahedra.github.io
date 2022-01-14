import React from "react";
import "animate.css";
import "./Information.css";
import { useWindowScroll } from "react-use";
import { useState, useEffect } from "react";

export default function Information() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 3899) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  return (
    <div className="information-container">
      <div className="information-parent">
        <div className="information-details"></div>

        <div className="information-details-languages">
          <div className="animate__animated animate__fadeInLeft">
            <span className="information-javascript">JavaScript</span>
          </div>

          <div className="animate__animated animate__fadeInLeft animate__delay-1s">
            <span className="information-html">HTML</span>
          </div>

          <div className="animate__animated animate__fadeInLeft animate__delay-2s">
            <span className="information-react">React</span>
          </div>

          <div className="animate__animated animate__fadeInLeft animate__delay-3s">
            <span className="information-c#">C#</span>
          </div>

          <div className="animate__animated animate__fadeInLeft animate__delay-4s">
            <span className="information-postgresql">postgreSQL</span>
          </div>
        </div>

        <div className="information-details-education">
          <div className="animate__animated animate__fadeInLeft">
            <span>5 años de inglés - Advance, School of English</span>
          </div>

          <div className="animate__animated animate__fadeInLeft animate__delay-1s">
            <span>Técnico universitario en programación</span>
          </div>
        </div>
      </div>
    </div>
  );
}
