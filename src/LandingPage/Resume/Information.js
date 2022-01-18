import React from "react";
import "animate.css";
import "./Information.css";

const Information = React.forwardRef(InformationDefinition);

function InformationDefinition({ isVisible }, ref) {
  return (
    <div className="information-container">
      <div
        className="information-parent"
        ref={ref}
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <div className="information-details">
          <span className="information-javascript">JavaScript</span>

          <span className="information-html">HTML</span>

          <span className="information-react">React</span>

          <span className="information-csharp">C#</span>

          <span className="information-postgresql">postgreSQL</span>
        </div>
      </div>
    </div>
  );
}

export default Information;
