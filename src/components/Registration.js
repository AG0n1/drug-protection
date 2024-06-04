import React, { useState, forwardRef, useImperativeHandle, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import cross from "./images/cross.svg";

const emailForm = (emailValue) => {
  const arrOfDomain = ["@tut.by", "@gmail.com", "@mail.com", "@yandex.ru", "@"];
  const deniedSymbols = [".", "/", "<", ">", "{", "}", "[", "]", "|", "\\", "(", ")", "*", ";", ":", "&", "^", "%", "$", "#", "!", "\"", "№"];

  const atIndex = emailValue.indexOf('@');
  if (atIndex === -1 || deniedSymbols.some(symbol => emailValue.includes(symbol))) {
    return false;
  }

  const domain = emailValue.slice(atIndex);
  return arrOfDomain.includes(domain);
};

const styles = {
  defaultStyle: { display: "none" },
  success: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid green",
    background: "#32a852",
    width: "100%",
    height: "40px",
    borderRadius: "5px",
    fontWeight: "bold"
  },
  error: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid red",
    background: "#c41834",
    width: "100%",
    height: "40px",
    borderRadius: "5px",
    fontWeight: "bold"
  },
  loggedIn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "gray",
    width: "100%",
    height: "40px",
    borderRadius: "5px",
    fontWeight: "bold"
  }
};

const Registration = forwardRef(({ openFormCallback }, ref) => {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const [display, setDisplay] = useState("none");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isUserStyle, setIsUserStyle] = useState(styles.defaultStyle);
  const [isUserMessage, setIsUserMessage] = useState("");

  useImperativeHandle(ref, () => ({
    openForm: () => setDisplay("flex"),
  }));

  const closeForm = () => {
    setIsUserStyle(styles.defaultStyle);
    setIsUserMessage("");
    setDisplay("none");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!emailForm(login)) {
      alert("Wrong Email Format!");
      return;
    }

    const formData = { email: login, password };
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.user) {
        alert("User already exists");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = { email: login, password };

    try {
      const response = await fetch("http://localhost:3001/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.user) {
        if (data.user === "Wrong password") {
          setIsUserStyle(styles.error);
          setIsUserMessage("Wrong password");
        } else {
          setIsUserStyle(styles.success);
          setIsUserMessage(`Welcome, ${data.user.name || "user"}`);
          setUserData(data.user);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userData', JSON.stringify(data.user));
        }
      } else {
        setIsUserStyle(styles.error);
        setIsUserMessage("User not found");
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className="formZone" style={{ display }}>
      <form className="form">
        <p id="heading">Login</p>
        <div className="field">
          <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="input-icon">
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
          </svg>
          <input
            type="text"
            className="input-field"
            placeholder="example@email.com"
            autoComplete="off"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="field">
          <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="input-icon">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input
            type="password"
            className="input-field"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div id="input-div-isuser" style={isUserStyle}>
          {isUserMessage}
        </div>
        <div className="btn">
          <button className="button1" onClick={handleLogin}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <button onClick={handleSignUp} className="button2">Sign Up</button>
        </div>
        <button className="button3">Forgot Password?</button>
        <div className="closeForm" onClick={closeForm}>
          <img width="40px" src={cross} alt="Close" />
        </div>
      </form>
    </div>
  );
});

export default Registration;
