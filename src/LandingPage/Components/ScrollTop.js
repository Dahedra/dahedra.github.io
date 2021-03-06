import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import Button from "@mui/material/Button";
import { IoIosArrowUp } from "react-icons/io";


export default function ScrollTop () {
    var maxHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight)) * 4;
    const { y:pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (pageYOffset >  maxHeight * 0.15) {
          setVisible(true)
        } else{
          setVisible(false)
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({top:0, behavior:"smooth"})

    if(!visible){
      return false;
    }

    return (
        <Button className="scroll-button" onClick={scrollToTop}>
            <IoIosArrowUp className="scroll-icon"/>
        </Button>
    )
}