import React from "react";
import Typical from "react-typical";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <a
            href="https://www.facebook.com/eloisa.villanueva.33/"
            target="_blank"
          >
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/astronomy_12/" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://github.com/Dahedra" target="_blank">
            <GitHubIcon />
          </a>
          <a href="#" target="_blank">
            <ContactPhoneIcon />
          </a>
          <a href="#" target="_blank">
            <EmailIcon />
          </a>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hola, soy <span className="highlighted-text">Eloisa</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Proactiva",
                    1500,
                    "Creativa🎨",
                    1500,
                    "Acertiva",
                    1500,
                    "Dedicada",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Pequeña descripción del rol.
              </span>
            </span>
          </div>

          <div className="profile-options">
              <a href="cv.pdf" download="Villanueva Eloisa.pdf">
              <Button>Descargar CV</Button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
