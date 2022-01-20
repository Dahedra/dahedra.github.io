import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from "@mui/material";

const Profile = React.forwardRef(ProfileDefinition);

function ProfileDefinition({ isVisible }, ref) {
  return (
    <div className="profile-container">
      <div
        className="profile-details"
        ref={ref}
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
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
            Fullstack Web Developer
          </span>
        </div>

        <div className="profile-details-social">
          <a
            href="https://www.facebook.com/eloisa.villanueva.33/"
            target="_blank"
          >
            <FacebookIcon
              sx={{ fontSize: "calc(1vw + 20px)", marginX: "10px" }}
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
          <a href="https://api.whatsapp.com/send?phone=+543435031123" target="_blank">
            <WhatsAppIcon
              sx={{ fontSize: "calc(1vw + 20px)", marginX: "10px" }}
              className="profile-social-icons"
            />
          </a>
          <a href="mailto:eloisa.villanueva617@gmail.com" target="_blank">
            <EmailIcon
              sx={{ fontSize: "calc(1vw + 20px)", marginX: "10px" }}
              className="profile-social-icons"
            />
          </a>

        </div>

        <a
          className="profile-resume-link"
          href="https://www.canva.com/design/DAEyQXVEO0U/ZJpGVp_MoOY7AbIEVLe9DA/view?utm_content=DAEyQXVEO0U&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
        >
          <Button
            className="resume-button"
            sx={{
              marginTop: "2vh",
              backgroundColor: "#182e53",
              color: "white",
              fontFamily: "lato",
              fontWeight: "600",
            }}
          >
            Curriculum
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
