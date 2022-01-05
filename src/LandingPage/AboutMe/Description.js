import React from "react";
import "./Description.css";
import "animate.css";

export default function Profile() {
  return (
    <div className="description-container">
      <div className="description-parent">

        <div className="description-aboutme-left">
          <span className="description-aboutme-text">
            Soy de Paraná, Entre Ríos.
          </span>
          
          <span className="description-aboutme-text">
            Me encanta aprender y sobre todo innovar.
          </span>
          
        </div>

        <div className="description-aboutme-right">
          
          <span className="description-aboutme-text">
            Estoy a pocas materias de graduarme de Tecnica Universitaria en
            Programación en la Universidad tecnólogico Regional de Paraná.
          </span>
          
          <span className="description-aboutme-text">
            Disfruto de los proyectos grupales dinámicos en el que cada persona
            puede aportar su visión e ideas.
          </span>
        </div>

        <div className="description-hobbys">
          <div className="description-details-hobby1">
            <span>VICIAR</span>
          </div>

          <div className="description-details-hobby2">
            <span>ENTRENAR</span>
          </div>

          <div className="description-details-hobby3">
            <span>COCINAR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
