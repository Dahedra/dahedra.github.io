import Profile from "./Home/Profile";
import Description from "./AboutMe/Description";
import Information from "./Resume/Information";
import Menu from "./Components/Menu";

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
  return (
    <div className="main-container">
      <header className="App-header">
        <Menu />
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
              <Animator animation={MoveOut(0, -200)}>
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
