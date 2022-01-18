import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material//Toolbar";
import Button from "@mui/material/Button";
import "../Data/Fonts/Fonts.css";

export default function Menu() {
  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToDescription = () => {
    window.scrollTo({
      top: 1300,
      behavior: "smooth",
    });
  };

  const goToProyects = () => {
    window.scrollTo({
      top: 2600,
      behavior: "smooth",
    });
  };

  const goToInformation = () => {
    window.scrollTo({
      top: 3900,
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
