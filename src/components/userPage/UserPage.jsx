import React, { Component } from "react";
import UserContext from "../UserContext";

import customer from "../images/customer.svg"
import user from "../images/user.svg"
import admin from "../images/admin.svg"
import tech from "../images/technical.svg"
import logout from "../images/logout.svg"

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

    // fetch("http://localhost:3001/getUserAppointmentsData", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${localStorage.getItem('token')}` 
    //   },
    //   body: JSON.stringify(this.state.nickname)
    // })
    // .then(res => res.json())
    // .then(data => {
      
    // })
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

    const open = () => {
      let appointment = document.getElementById("appointment")
      
      appointment.classList.remove("hidden", "no-scroll")
      document.body.classList.add("no-scroll")
  }

  const close = () => {
      let appointment = document.getElementById("appointment")
      
      document.body.classList.remove("no-scroll")
      appointment.classList.add("hidden", "no-scroll")
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
          <button className="logout" onClick={this.deleteToken}>
            <img src={logout} width="40px" height="40px" />
          </button>
          <button className="hideInfo" onClick={toggleUserInputVisibility}>{inf}</button>
        </div>

        <div className="userInfo admin-tool">
              <div className="userName tableName">
                Мои обращения <span onClick={open} id="create-appointment">Создать обращение</span>
              </div>

              <div id="appointments-table" className="absoluteCenter">

              </div>
        </div>

        <form id="appointment" className="hidden formZone">
                <div className="appointment-form">
                    <div onClick={close} className="cross">
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"/>
                        </svg>
                    </div>
                    <div className="adv-title app-fix">
                        Кратко опишите Вашу проблему, и наш специалист свяжется с Вами в ближайшее время
                    </div>
                    
                    <div className="input-zone">
                        Ваше имя:
                        <input className="adv-input" id="name" />
                    </div>

                    <div className="input-zone txtarea">
                        Ваша история:
                        <textarea  className="" id="phone-number" />
                    </div>

                    <div className="btn-place absoluteCenter">
                        <button className="confirm-btn">
                            Отправить заявку
                        </button>
                    </div>
                    
                </div>
            </form>
      </div>
    );
  }
}

export default UserPage;
