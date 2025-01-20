"use client";

import { useState } from "react";
import classes from "./s.module.scss";
import Image from "next/image";
import calltg from "@/../public/Icons/calltg.svg";
import callButton from "@/../public/Icons/callButton.svg";
import blackCross from "@/../public/Icons/blackcross.svg";

const CallButton = () => {
     const [open, setOpen] = useState("none");

     const handleChange = () => {
          if (open === "opened") {
               setOpen("closed");
          } else {
               setOpen("opened");
          }
     };
     return (
          <div className={classes.button_wrapper}>
               <div className={`${classes.buttons} ${classes[open]}`}>
                    <a href={"https://t.me/Buytodayuz"} target="_blank">
                         <Image src={calltg} alt="CallButton" width={49} height={49} className={classes.button} />
                    </a>
                    <a href={"tel:" + "+998771343660"}>
                         <Image src={callButton} alt="CallButton" width={49} height={49} className={classes.button} />
                    </a>
               </div>
               {open === "opened" ? (
                    <Image src={blackCross} alt="CallButton" width={49} height={49} className={classes.button} onClick={handleChange} />
               ) : (
                    <Image src={callButton} alt="CallButton" width={49} height={49} className={classes.button} onClick={handleChange} />
               )}
          </div>
     );
};

export default CallButton;
