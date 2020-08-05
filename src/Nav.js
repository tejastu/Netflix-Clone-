import React ,{useEffect, useState}from "react";
import "./Nav.css";

function Nav() {
        const [show, handleShow]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){      /// height is set upto 100px after scroll above 100px the black background will appear
                handleShow(true);
            }else handleShow(false)
        });
        return () =>{
            window.removeEventListener("scroll");
            };       
    }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E?format=jpg&name=small"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
