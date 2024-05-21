import React, { Component } from "react";
import UserContext from "../UserContext";

import customer from "../images/customer.svg"
import user from "../images/user.svg"
import admin from "../images/admin.svg"
import tech from "../images/technical.svg"

class UserPage extends Component {
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
    };
  }

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));
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
              {this.state.status === 'user' && <img width="220px" src={user} alt="User" />}
              {this.state.status === 'tech' && <img width="220px" src={tech} alt="Tech" />}
              {this.state.status === 'admin' && <img width="150px" src={admin} alt="Admin" />}
              {this.state.status === 'customer' && <img width="220px" src={customer} alt="Customer" />}
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
            <input
              className="user__input"
              placeholder="Введите имя пользователя:"
              value={nickname}
              onChange={(e) => this.setState({ nickname: e.target.value })}
            />
            <input
              className="user__input"
              placeholder="Введите ваше имя:"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              className="user__input"
              placeholder="Введите вашу фамилию:"
              value={second_name}
              onChange={(e) => this.setState({ second_name: e.target.value })}
            />
            <input
              className="user__input"
              id="telegram_id"
              placeholder="Введите ваш id"
              value={telegram_id}
              onChange={(e) => this.setState({ telegram_id: e.target.value })}
              disabled
            />
            <input
              className="user__input"
              placeholder="Введите ваш id"
              value={nickname}
              onChange={(e) => this.setState({ nickname: e.target.value })}
            />
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

export default UserPage;
