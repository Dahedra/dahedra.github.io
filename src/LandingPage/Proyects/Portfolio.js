import React from "react";

const Portfolio = React.forwardRef(PortfolioDefinition);

function PortfolioDefinition({isVisible}, ref) {
  return (
    <div
      className="portfolio-container"
      ref={ref}
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      <h1>Sección en Construcción.</h1>
    </div>
  );
}

export default Portfolio;