import React from "react";
import "./Description.css";
import "animate.css";
import { useState } from "react";
import $ from "jquery";

export default function Profile() {
  const [visible, setVisible] = useState(false);

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll > 1299 & scroll < 2600) {
      setVisible(true);
      $("#main-container").animate({top: '10px'});
    } else {
      setVisible(false);
    }
  });

  if (!visible) {
    return false;
  }


  return (
    <div id="main-container" className="description-container">
      <div className="description-intro">
        <div className="description-aboutme-text">
          <span className="description-aboutme-parana">
            Soy de <span className="parana">Paraná</span>, Entre Ríos
          </span>

          <span className="description-aboutme-aprender">
            Me encanta aprender y sobre todo
            <span className="innovar"> innovar</span>
          </span>
        </div>
      </div>

      <div className="description-studies">
        <span className="description-aboutme-graduar">
          Estoy a pocas materias de graduarme:
          <br />
          <span className="description-aboutme-tup">
            Tecnica Universitaria en Programación <br />
          </span>
        </span>
      </div>

      <div className="description-likes">
        <span className="description-aboutme-grupo">
          Disfruto de los proyectos grupales dinámicos, 
          <br/>aportando<span className="description-aboutme-vision">visión e ideas</span>
        </span>
      </div>

      <div className="description-hobbys">
        <div className="description-details-games">
          <span>Games</span>
        </div>

        <div className="description-details-exercise">
          <span>Training</span>
        </div>

        <div className="description-details-baking">
          <span>Baking</span>
        </div>
      </div>
    </div>
  );
}
