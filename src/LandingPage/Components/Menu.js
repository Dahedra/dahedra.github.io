import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material//Toolbar";
import Button from "@mui/material/Button";
import "../Data/Fonts/Fonts.css";
import $ from "jquery";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";

export default function CheckMobileScreen() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return MobileMenu();
  } else {
    return Menu();
  }
}

var maxHeight = $(window).height() * 4;
var scroll = $(window).scrollTop();

const goToHome = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const goToDescription = () => {
  window.scrollTo({
    top: maxHeight * 0.25,
    behavior: "smooth",
  });
};

const goToDescriptionMobile = () => {
  window.scrollTo({
    top: maxHeight * 0.283,
    behavior: "smooth",
  });
};

const goToProyects = () => {
  window.scrollTo({
    top: maxHeight * 0.5,
    behavior: "smooth",
  });
};

const goToProyectsMobile = () => {
  window.scrollTo({
    top: maxHeight * 0.55,
    behavior: "smooth",
  });
};

const goToInformation = () => {
  window.scrollTo({
    top: maxHeight,
    behavior: "smooth",
  });
};

function Menu() {
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Button
            sx={{
              color: scroll < maxHeight * 0.42 ? "#24447C" : "#F2BB72",
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
              color: scroll < maxHeight * 0.42 ? "#24447C" : "#F2BB72",
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
              color: scroll < maxHeight * 0.42 ? "#24447C" : "#F2BB72",
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
              color: scroll < maxHeight * 0.42 ? "#24447C" : "#F2BB72",
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

function MobileMenu() {
  const [state, setState] = React.useState({ left: false });
  const anchor = "left";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={goToHome}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button onClick={goToDescriptionMobile}>
          <ListItemIcon>
            <StarBorderIcon />
          </ListItemIcon>
          <ListItemText primary={"Sobre Mí"} />
        </ListItem>
        <ListItem button onClick={goToProyectsMobile}>
          <ListItemIcon>
            <FolderOpenIcon />
          </ListItemIcon>
          <ListItemText primary={"Proyectos"} />
        </ListItem>
        <ListItem button onClick={goToInformation}>
          <ListItemIcon>
            <LogoDevIcon />
          </ListItemIcon>
          <ListItemText primary={"Información"} />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <a
            href="https://www.facebook.com/eloisa.villanueva.33/"
            target="_blank"
          >
            <ListItemText primary={"Facebook"} />
          </a>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InstagramIcon />
          </ListItemIcon>
          <a href="https://www.instagram.com/astronomy_12/" target="_blank">
            <ListItemText primary={"Instagram"} />
          </a>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <a href="https://github.com/Dahedra" target="_blank">
            <ListItemText primary={"GitHub"} />
          </a>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
          <a
            href="https://api.whatsapp.com/send?phone=+543435031123"
            target="_blank"
          >
            <ListItemText primary={"Whatssap"} />
          </a>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <a href="mailto:eloisa.villanueva617@gmail.com" target="_blank">
            <ListItemText primary={"Email"} />
          </a>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(anchor, true)}>
        <MenuIcon sx={{color:"white", fontSize:"calc(3vw + 30px)"}}/>
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}
