import React from "react";
import "animate.css";

import CodeIcon from "@mui/icons-material/Code";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";

const Information = React.forwardRef(InformationDefinition);

function InformationDefinition({ isVisible }, ref) {
  return (
    <div
        className="information-container"
        ref={ref}
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <div className="title">
          <h1 className="title-text">Lenguajes & Tecnologias</h1>
          <div className="title-line"/>
        </div>

        <span className="bracket">&#123;</span>

        <div className="information-details">
          <div className="information-javascript">
            <DiJavascript1 fontSize={"calc(2vw + 20px)"} />{" "}
            <span className="information-javascript-text">JavaScript</span>
          </div>

          <div className="information-html">
            <DiHtml5 fontSize={"calc(2vw + 20px)"} />{" "}
            <span className="information-html-text">HTML</span>
          </div>

          <div className="information-react">
            <DiReact fontSize={"calc(2vw + 20px)"} />{" "}
            <span className="information-react-text">React</span>
          </div>

          <div className="information-css">
            <DiCss3Full fontSize={"calc(2vw + 20px)"} />{" "}
            <span className="information-css-text">CSS</span>
          </div>

          <div className="information-csharp">
            <CodeIcon sx={{ fontSize: "calc(2vw + 20px)" }} />{" "}
            <span className="information-csharp-text">C#</span>
          </div>

          <div className="information-postgresql">
            <DiPostgresql fontSize={"calc(2vw + 20px)"} />{" "}
            <span className="information-postgresql-text">postgreSQL</span>
          </div>
        </div>
      </div>
  );
}

export default Information;
