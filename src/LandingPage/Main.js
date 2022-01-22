import Profile from "./Hello/Profile";
import Description from "./AboutMe/Description";
import Information from "./Resume/Information";
import Portfolio from "./Proyects/Portfolio";
import Menu from "./Components/Menu";
import ScrollTop from "./Components/ScrollTop";
import { useState, useEffect, useRef } from "react";

export default function Main() {
  const profileRef = useRef();
  const descriptionRef = useRef();
  const portfolioRef = useRef();
  const informatioRef = useRef();

  const onScreenProfile = useOnScreen(profileRef, "-100px");
  const onScreenDescription = useOnScreen(descriptionRef, "-100px");
  const onScreenPortfolio = useOnScreen(portfolioRef, "-100px");
  const onScreenInformation = useOnScreen(informatioRef, "-100px");

  const [before, setBefore] = useState(false);
  var bluredBackground = document.getElementById("blured");

  //Top on Reload Page
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  function blurOnScroll () {
    if(onScreenDescription){
      bluredBackground.style.animation = "slowly-blur 1s forwards";
      setBefore(true);

    } else if(before) {
      bluredBackground.style.animation = "slowly-blur-off 1s forwards";
      setBefore(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", blurOnScroll);

    return () => window.removeEventListener("scroll", blurOnScroll);
  });

  function useOnScreen(ref, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []);
    return isIntersecting;
  }

  return (
    <>
      <header className="App-header">
        <Menu />
        <ScrollTop />
      </header>

      <div className="scroll-background">
        <div className="main-background" />
        <div className="blured-screen" id="blured">
          <div className="dark-waves">
            <Profile ref={profileRef} isVisible={onScreenProfile} />
            <Description ref={descriptionRef} isVisible={onScreenDescription} />
            <Portfolio ref={portfolioRef} isVisible={onScreenPortfolio} />
            <Information ref={informatioRef} isVisible={onScreenInformation} />
          </div>
        </div>
      </div>
    </>
  );
}
