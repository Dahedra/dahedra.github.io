import Profile from "./Home/Profile";
import Description from "./AboutMe/Description";
import Information from "./Resume/Information";
import ScrollTop from "./Components/ScrollTop";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import VolumeSlider from "./Components/VolumeSlider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Components/ScrollTop.css";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

export default function Main() {
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
    <div className="main-container">
      <header className="App-header">
        
          <Breadcrumbs sx={{backgroundColor:"burlywood"}} aria-label="breadcrumb">
            <Button onClick={goToHome}>Home</Button>
            <Button onClick={goToDescription}>Sobre mí</Button>
            <Button onClick={goToProyects}>Proyectos</Button>
            <Button onClick={goToInformation}>Información</Button>
            <VolumeSlider />
          </Breadcrumbs>
          
          <ScrollTop />
      </header>

      <ScrollContainer className="App">
        <div className="profile-page-0">
          <ScrollPage page={0}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <Profile />
              </Animator>
            </div>
          </ScrollPage>
        </div>

        <div className="description-page-1">
          <ScrollPage page={1}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Animator animation={MoveIn(-1000, 0)}>
                <Description />
              </Animator>
            </div>
          </ScrollPage>
        </div>

        <div className="proyects-page-2">
          <ScrollPage page={2}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Animator animation={MoveIn(1000, 0)}>
                {/* <Recetario/> */}
              </Animator>
            </div>
          </ScrollPage>
        </div>

        <div className="information-page-3">
          <ScrollPage page={3}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Animator animation={MoveIn(-1000, 0)}>
                <Information />
              </Animator>
            </div>
          </ScrollPage>
        </div>
      </ScrollContainer>
    </div>
  );
}
