import React, { useState, forwardRef, useImperativeHandle } from "react";
let isLoggedIn = false

function emailForm(emailValue) {
  const arrOfDomain = ["@tut.by", "@gmail.com", "@mail.com", "@yandex.ru", "@"]
  const deniedSimbols = [".", "/", "<", ">", "{", "}", "[", "]", "|", "\\", "(", ")", "*", ";", ":", "&", "^", "%", "$", "#", "!", "\"", "№"]
  let subStr = ""
  for (let i = 0; i < emailValue.length; i++) {
    if (emailValue[i] === "@") {
      for (let j = i; j < emailValue.length; j++) {
        subStr += emailValue[j]
      }
      break;
    } else {
      if (deniedSimbols.find((u) => u === emailValue[i])) {
        return false;
      }
    }
  }
  console.log(subStr)
  return true ? arrOfDomain.find((u) => u === subStr) : false
}

const Registration = forwardRef(({ openFormCallback }, ref) => {
  const [display, setDisplay] = useState("none");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isUserStyle, setIsUserStyle] = useState(null);
  const isUser = document.getElementById("input-div-isuser")
  useImperativeHandle(ref, () => ({
    openForm: openForm,
  }));
  const styles = {
    defaultStyle: {
      display: "none",
    },
    styleForSuccessLogin: {
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
    styleForUnsuccessLogin: {
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
  }
  
  const openForm = () => {
    setDisplay("flex");
  };

  const close = () => {
    setIsUserStyle(style.defaultStyle)
    isUser.textContent = ""
    setDisplay("none");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = {
      email: login,
      password: password
    };
    if (emailForm(login)) {
      alert("Normal email format")
    } else {
      alert("Wrong Email Format!")
      return
    }
    fetch("http://localhost:3001/register", {
      method: "POST",   
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}` 
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        alert("User already exist")
      } else {
        alert("User succesfully created")
        isLoggedIn = true
      }
    })
  } 

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      email: login,
      password: password,
    };
    fetch("http://localhost:3001/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}` 
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          if (!isLoggedIn) {
            setIsUserStyle(styles.styleForSuccessLogin);
            isUser.textContent = `Welcome, ${data.user.name}`
            console.log(data)
            isLoggedIn = true 
          } else {
            e.preventDefault();
            setIsUserStyle(styles.loggedIn)
            isUser.textContent = "You are already logged in"
          }
        } else {
          setIsUserStyle(styles.styleForUnsuccessLogin);
          isUser.textContent = "User not found"
          isLoggedIn = false
        }
      })
      .catch((error) => {
        alert("Error fetching data:" + error);
      });
  };
  

  const style = {
    display: display,
  };

  return (
    <div className="formZone" style={style}>
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
          
        </div>
        <div className="btn">
          <button className="button1" onClick={handleLogin}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <button onClick={handleSignUp} className="button2">Sign Up</button>
        </div>
        <button className="button3">Forgot Password?</button>
        <div className="closeForm" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 384 512"
            fill="white"
          >
          </svg>
        </div>
      </form>
    </div>
  );
});

export default Registration;
