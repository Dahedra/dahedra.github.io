import React from "react";
import Typical from "react-typical";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="profile-details-name">
          <span className="primary-text">
            {""}
            HOLA, soy
          </span>
          <br />
          <span className="name-text">ELOISA</span>
        </div>

        <div className="profile-details-role">
          <br/>
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
              sx={{ fontSize: "40px" }}
              className="profile-social-icons"
            />
          </a>
          <a href="https://www.instagram.com/astronomy_12/" target="_blank">
            <InstagramIcon
              sx={{ fontSize: "40px" }}
              className="profile-social-icons"
            />
          </a>
          <a href="https://github.com/Dahedra" target="_blank">
            <GitHubIcon
              sx={{ fontSize: "40px" }}
              className="profile-social-icons"
            />
          </a>
          <a href="#" target="_blank">
            <ContactPhoneIcon
              sx={{ fontSize: "40px" }}
              className="profile-social-icons"
            />
          </a>
          <a href="#" target="_blank">
            <EmailIcon
              sx={{ fontSize: "40px" }}
              className="profile-social-icons"
            />
          </a>
        </div>

        <div className="profile-options">
          <a href="cv.pdf" download="Villanueva Eloisa.pdf">
            <Button variant="outlined">Descargar CV</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
