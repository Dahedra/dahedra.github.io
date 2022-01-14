import React from "react";
import { useWindowScroll } from "react-use";
import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import "./Profile.css";

import $ from "jquery";

export default function Profile() {
  


  const { y:pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
      if (pageYOffset < 1300) {
        setVisible(true)
      } else{
        setVisible(false)
      }
  }, [pageYOffset]);

  if(!visible){
    return false;
  }

  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="profile-details-name">
          <span className="primary-text">
            {""}
            HOLA<span className="soy-text">, soy</span>
          </span>
          <br />
          <span className="name-text">ELOISA</span>
        </div>

        <div className="profile-details-role">
          <br />
          <span className="profile-role-tagline">
            Fullstack Junior Web Developer
          </span>
        </div>

        <div className="profile-details-social">
          <a
            href="https://www.facebook.com/eloisa.villanueva.33/"
            target="_blank"
          >
            <FacebookIcon
              sx={{ fontSize: "calc(1vw + 20px)", marginX: "10px"}}
              className="profile-social-icons"
            />
          </a>
          <a href="https://www.instagram.com/astronomy_12/" target="_blank">
            <InstagramIcon
              sx={{ fontSize: "calc(1vw + 20px)", marginX: "10px" }}
              className="profile-social-icons"
            />
          </a>
          <a href="https://github.com/Dahedra" target="_blank">
            <GitHubIcon
              sx={{ fontSize: "calc(1vw + 20px)", marginX: "10px" }}
              className="profile-social-icons"
            />
          </a>
          <a href="#" target="_blank">
            <ContactPhoneIcon
              sx={{ fontSize: "calc(1vw + 20px)", marginX: "10px" }}
              className="profile-social-icons"
            />
          </a>
          <a href="#" target="_blank">
            <EmailIcon
              sx={{ fontSize: "calc(1vw + 20px)", marginX: "10px" }}
              className="profile-social-icons"
            />
          </a>
        </div>

        <a
          className="profile-resume-link"
          href="cv.pdf"
          download="Villanueva Eloisa.pdf"
        >
          <Button className="resume-button"
            sx={{
              marginTop: "2vh",
              backgroundColor: "#182e53",
              color: "white",
              fontFamily: "lato",
              fontWeight: "600",
            }}
          >
            Descargar CV
          </Button>
        </a>
      </div>
    </div>
  );
}
