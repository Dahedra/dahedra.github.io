import Profile from "./Home/Profile";
import Description from "./AboutMe/Description";
import Information from "./Resume/Information";
import Menu from "./Components/Menu";
import "./Main.css";
import $ from "jquery";

export default function Main() {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll > 1200) {
      $("#blured").addClass("blur");
    } else {
      $("#blured").removeClass("blur");
    }
  });

  return (
    <>
      <header className="App-header">
        <Menu />
      </header>

      <div className="scroll-background">
        <div className="main-container">
          <div className="blured-screen" id="blured">
            <Profile />
            <Description />
            <Information />
          </div>
        </div>
      </div>
    </>
  );
}
