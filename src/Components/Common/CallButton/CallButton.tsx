"use client";

import { useState } from "react";
import classes from "./s.module.scss";

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
                         <img src={"/icons/calltg.svg"} alt="CallButton" width={49} height={49} className={classes.button} />
                    </a>
                    <a href={"tel:" + "+998997971407"}>
                         <img src={"/icons/callButton.svg"} alt="CallButton" width={49} height={49} className={classes.button} />
                    </a>
               </div>
               {open === "opened" ? (
                    <img src={"/icons/blackcross.svg"} alt="CallButton" width={49} height={49} className={classes.button} onClick={handleChange} />
               ) : (
                    <img src={"/icons/callButton.svg"} alt="CallButton" width={49} height={49} className={classes.button} onClick={handleChange} />
               )}
          </div>
     );
};

export default CallButton;
