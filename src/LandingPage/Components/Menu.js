import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material//Toolbar";
import Button from "@mui/material/Button";
import "../Data/Fonts/Fonts.css";
import $ from "jquery";

export default function Menu() {
  var maxHeight = $(window).height() * 4;

  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToDescription = () => {
    window.scrollTo({
      top: maxHeight * 0.25,
      behavior: "smooth",
    });
  };

  const goToProyects = () => {
    window.scrollTo({
      top: maxHeight * 0.5,
      behavior: "smooth",
    });
  };

  const goToInformation = () => {
    window.scrollTo({
      top: maxHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Button
            sx={{
              color: "#24447C",
              fontSize: "calc(1vmin + 10px)",
              fontFamily: "Lato",
              fontWeight: "800",
              marginX: "1%",
            }}
            onClick={goToHome}
          >
            Home
          </Button>
          <Button
            sx={{
              color: "#24447C",
              fontSize: "calc(1vmin + 10px)",
              fontFamily: "Lato",
              fontWeight: "800",
              marginX: "1%",
            }}
            onClick={goToDescription}
          >
            Sobre mí
          </Button>
          <Button
            sx={{
              color: "#24447C",
              fontSize: "calc(1vmin + 10px)",
              fontFamily: "Lato",
              fontWeight: "800",
              marginX: "1%",
            }}
            onClick={goToProyects}
          >
            Proyectos
          </Button>
          <Button
            sx={{
              color: "#24447C",
              fontSize: "calc(1vmin + 10px)",
              fontFamily: "Lato",
              fontWeight: "800",
              marginX: "1%",
            }}
            onClick={goToInformation}
          >
            Información
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
