import React, { Component } from "react";
import UserContext from "../UserContext";
import admin from "../images/admin.svg"


class AdminPage extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
        nickname: "",
        name: "",
        second_name: "",
        email: "",
        telegram_id: "",
        donate_value: "",
        description: "",
        background: "",
        status: "",
    };
  }

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData.status !== "admin") {
        alert("У Вас нету прав для доступа к этой странице")
        window.location.href = "/";
    }
    console.log(userData);
    this.setState({  
      nickname: userData.nickname,
      name: userData.name,
      second_name: userData.second_name,
      email: userData.email,
      telegram_id: userData.telegram_id,
      donate_value: userData.donate_value,
      description: userData.description,
      background: userData.background,
      status: userData.status
    });
  }

  deleteToken = () => {
    fetch("http://localhost:3001/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
    });
    localStorage.setItem("token", "null");
  };

  render() {
    const {
      nickname,
      name,
      second_name,
      email,
      telegram_id,
      donate_value,
      description,
      background,
      status,
    } = this.state;
    let isOpen = false
    const save = () => {
        localStorage.setItem("userData", JSON.stringify(this.state))
        console.log()
        fetch("http://localhost:3001/saveData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}` 
          },
          body: JSON.stringify(this.state)
        });
      };

    const toggleUserInputVisibility = () => {
      let elem = document.getElementById("hiddenInfo");
    
      if (isOpen) {
        elem.classList.add("hidden");
        inf = "Открыть";
      } else {
        elem.classList.remove("hidden");
        inf = "Закрыть";
      }
      isOpen = !isOpen;
    };
    
    let inf = "Открыть"
    return (
      <div className="userPage">
        <div className="userInfo">
          <div className="userUser">
            <div className="userPhoto absoluteCenter">
              {this.state.status === 'admin' && <img width="150px" src={admin} alt="Admin" />}
            </div>


            <div className="space"></div>

            <div className="userData">
              <div className="userName">
                <span id="firstName">{name || "user"}</span>
                <span id="secondName"> {second_name}</span>
              </div>

              <div className="userDescription">{description}</div>
            </div>
          </div>

          <div id="hiddenInfo" className="userInfo userInput hidden">
          <div className="inp_placeholder_text">Ваш nickname</div>
            <input
              className="user__input"
              placeholder="Введите имя пользователя:"
              value={nickname}
              onChange={(e) => this.setState({ nickname: e.target.value })}
            />

            <div className="inp_placeholder_text">Ваше имя</div>
            <input
              className="user__input"
              placeholder="Введите ваше имя:"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />

            <div className="inp_placeholder_text">Ваша фамилия</div>  
            <input
              className="user__input"
              placeholder="Введите вашу фамилию:"
              value={second_name}
              onChange={(e) => this.setState({ second_name: e.target.value })}
            />

            <div className="inp_placeholder_text">Ваш статус</div>
            <input
              className="user__input"
              placeholder="Введите ваш id"
              value={status}
              onChange={(e) => this.setState({ status: e.target.value })}
            />
            

            <div className="centerBtn">
              <button className="saveData" onClick={save} >Сохранить</button>
            </div>
          </div>
          <button className="hideInfo" onClick={toggleUserInputVisibility}>{inf}</button>
        </div>
      </div>
    );
  }
}

export default AdminPage;