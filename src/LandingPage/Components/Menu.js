import ScrollTop from "./ScrollTop";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import VolumeSlider from "./VolumeSlider";
import Button from "@mui/material/Button";
import "./Menu.css";
import "../Data/Fonts/Fonts.css";

export default function Menu () {
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

    return(
        <>
        <Breadcrumbs className="menu" aria-label="breadcrumb">
            <Button sx={{color:"white", fontSize:"20px", fontFamily:"Lato", fontWeight:"800"}} onClick={goToHome}>Home</Button>
            <Button sx={{color:"white", fontSize:"20px", fontFamily:"Lato", fontWeight:"800"}} onClick={goToDescription}>Sobre mí</Button>
            <Button sx={{color:"white", fontSize:"20px", fontFamily:"Lato", fontWeight:"800"}} onClick={goToProyects}>Proyectos</Button>
            <Button sx={{color:"white", fontSize:"20px", fontFamily:"Lato", fontWeight:"800"}} onClick={goToInformation}>Información</Button>
            
          </Breadcrumbs>
          
          <ScrollTop />
        </>
    )
}