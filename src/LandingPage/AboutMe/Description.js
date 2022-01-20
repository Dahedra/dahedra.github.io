import React from "react";
import "animate.css";

const Description = React.forwardRef(DescriptionDefinition);

function DescriptionDefinition({ isVisible }, ref) {
  return (
    <div
      id="main-container"
      className="description-container"
      ref={ref}
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      <link
        rel="stylesheet"
        href="https://unpkg.com/emoji.css/dist/emoji.min.css"
      />
      <div className="description-details">
        <div className="description-intro">
          <div className="description-aboutme-text">
            <span className="description-aboutme-parana">
              Soy de <span className="parana">Paraná</span>, Entre Ríos <span class="ec ec-house-with-garden" />
            </span>

            <span className="description-aboutme-aprender">
              Me encanta aprender y sobre todo
              <span className="innovar"> innovar </span>
              <span class="ec ec-bulb"/>
            </span>
          </div>
        </div>

        <div className="description-studies">
          <span className="description-aboutme-graduar">
            Estoy a pocas materias de graduarme:
            <br />
            <span className="description-aboutme-tup">
              Técnica Universitaria en Programación <br />
            </span>
            <span class="ec ec-mortar-board" />
          </span>
        </div>

        <div className="description-hobbys">
          <span>
            En mi tiempo libre disfruto de{" "}
            <span className="description-hobbys-videogames">videojuegos </span>
            <span class="ec ec-video-game"/>
          </span>
          <span>
            También me apasiona la{" "}
            <span className="description-hobbys-baking">reposteria </span>
            <span class="ec ec-cake"/>
          </span>
        </div>

        <div className="description-lifestyle">
          <span>Procuro ejercitarme regularmente</span>
          <span class="ec ec-muscle"/>
        </div>
      </div>
    </div>
  );
}

export default Description;
