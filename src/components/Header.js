import React, { useRef } from "react";
import Nav from "./Nav";
import Registration from "./Registration";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const registrationRef = useRef(null);
  let navigate = useNavigate()
  const open = (e) => {
    if (localStorage.getItem("token") !== "null") {
      let userData = JSON.parse(localStorage.getItem("userData"))

      switch (userData.status) {
        case ("user"): navigate("../user")
        break;

        case ("admin"): navigate("../admin")
        break;

        case ("tech"): navigate("../tech")
        break;

        case ("customer"): navigate("../customer")
        break;

        default: navigate("../createUser")
        break;
      }

      if (userData.status == "user") {
        navigate("../user")
      } else {
        navigate("../admin")
      }
      return;
    } else {
      registrationRef.current.openForm();
    }
  };

  return (
    <header>
      <div className="container" id="header">
        <div className="absoluteCenter">Safe Society</div>
        <Nav />
      </div>
      <div className="autorisation" onClick={open}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="#fff"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </div>
      <Registration ref={registrationRef} />

      <div className="mobile mobile-header">Safe Society</div>
    </header>
  );
};

export default Header;
