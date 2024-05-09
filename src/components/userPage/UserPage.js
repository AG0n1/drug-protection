import React, { Component } from "react";
import UserContext from "../UserContext";

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
        hasError: false, // Добавьте эту строку
    };
  }

  componentDidMount() {
    const { userData } = this.context;
    this.setState({
      nickname: userData.nickname,
      name: userData.name,
      second_name: userData.second_name,
      email: userData.email,
      telegram_id: userData.telegram_id,
      donate_value: userData.donate_value,
      description: userData.description,
      background: userData.background,
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

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
        return <p style={{ color: "white" }}>Some error was caught</p>;
      }
    const {
      nickname,
      name,
      second_name,
      email,
      telegram_id,
      donate_value,
      description,
      background,
    } = this.state;

    return (
      <div className="userPage">
        <div className="userInfo">
          <div className="userPhoto"></div>

          <div className="space"></div>

          <div className="userData">
            <div className="userName">
              <span id="firstName">{name || "user"}</span>
              <span id="secondName"> {second_name}</span>
            </div>

            <div className="userDescription">{description}</div>
          </div>
        </div>

        <div className="userInfo userInput">
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
            placeholder="Введите ваш id"
            value={telegram_id}
            onChange={(e) => this.setState({ telegram_id: e.target.value })}
          />
          <input
            className="user__input"
            placeholder="Введите ваш id"
          />
        </div>
            {/* <button onClick={deleteToken} >Log out</button> */}
    </div>
    )
  }
}

export default UserPage