import React, { Component, createElement } from "react";
import UserContext from "../UserContext";
import admin from "../images/admin.svg"
import logout from "../images/logout.svg"

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

    const createFirstRow = () => {
      let table = document.getElementById("table");
      let fieldNames = document.createElement("div")
      fieldNames.classList.add("customer-list", "first-row")

      let nameElem = document.createElement("div");
      nameElem.classList.add("customer-name", "table-elem");
      nameElem.textContent = "Имя";

      let secondNameElem = document.createElement("div");
      secondNameElem.classList.add("customer-second-name", "table-elem");
      secondNameElem.textContent = "Фамилия";

      let statusElem = document.createElement("div");
      statusElem.classList.add("customer-status", "table-elem");
      statusElem.textContent = "Статус";

      fieldNames.appendChild(nameElem);
      fieldNames.appendChild(secondNameElem);
      fieldNames.appendChild(statusElem);

      table.appendChild(fieldNames)
    }

    // if (userData.status !== "admin") {
    //     alert("У Вас нету прав для доступа к этой странице")
    //     window.location.href = "/";
    // }
    
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

    fetch("http://localhost:3001/getCustomersData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}` 
      }
    })
    .then(res => res.json())
    .then(data => {
      let table = document.getElementById("table");
      table.innerHTML = '';
      
      createFirstRow()
      
       const sortByStatus = (a, b) => {
        const order = {
            'admin': 1,
            'tech': 2,
            'customer': 3
        };
        return order[a.status] - order[b.status];
    };

    data.sort(sortByStatus);

    for (let i = 0; i < data.length; i++) {
        let elem = document.createElement("div");
        elem.classList.add("customer-list");

        let nameElem = document.createElement("div");
        nameElem.classList.add("customer-name", "table-elem");
        nameElem.textContent = data[i].name;

        let secondNameElem = document.createElement("div");
        secondNameElem.classList.add("customer-second-name", "table-elem");
        secondNameElem.textContent = data[i].second_name;

        let statusElem = document.createElement("div");
        statusElem.classList.add("customer-status", "table-elem");
        statusElem.textContent = data[i].status;

        elem.appendChild(nameElem);
        elem.appendChild(secondNameElem);
        elem.appendChild(statusElem);

        table.appendChild(elem);
    }
  });

    fetch("http://localhost:3001/getUsersData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}` 
      }
    })
    .then(res => res.json())
    .then(data => {

      let table = document.getElementById("users-table");
      table.innerHTML = '';
      
      let fieldNames = document.createElement("div")
      fieldNames.classList.add("customer-list", "first-row")

      let nameElem = document.createElement("div");
      nameElem.classList.add("customer-name", "table-elem");
      nameElem.textContent = "Имя";

      let secondNameElem = document.createElement("div");
      secondNameElem.classList.add("customer-second-name", "table-elem");
      secondNameElem.textContent = "Фамилия";

      let statusElem = document.createElement("div");
      statusElem.classList.add("customer-status", "table-elem");
      statusElem.textContent = "Статус";

      fieldNames.appendChild(nameElem);
      fieldNames.appendChild(secondNameElem);
      fieldNames.appendChild(statusElem);

      table.appendChild(fieldNames)

    for (let i = 0; i < data.length; i++) {
        let elem = document.createElement("div");
        elem.classList.add("customer-list");

        let nameElem = document.createElement("div");
        nameElem.classList.add("customer-name", "table-elem");
        nameElem.textContent = data[i].name;

        let secondNameElem = document.createElement("div");
        secondNameElem.classList.add("customer-second-name", "table-elem");
        secondNameElem.textContent = data[i].second_name;

        let statusElem = document.createElement("div");
        statusElem.classList.add("customer-status", "table-elem");
        statusElem.textContent = data[i].status;

        elem.appendChild(nameElem);
        elem.appendChild(secondNameElem);
        elem.appendChild(statusElem);

        table.appendChild(elem);
    }

    })

  }

  deleteToken = () => {
      localStorage.setItem("token", "null")
      localStorage.setItem("userData", JSON.stringify({
          nickname: "",
          name: "",
          second_name: "",
          email: "",     
          telegram_id: "",
          donate_value: "",
          description: "",
          background: "",
      }))
      window.location.href = "/"
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
          <button className="logout" onClick={this.deleteToken}>
            <img src={logout} width="40px" height="40px" />
          </button>
          <button className="hideInfo" onClick={toggleUserInputVisibility}>{inf}</button>
        </div>

        <div id="customers" className="userInfo admin-tool">
              <div className="userName tableName">
                <span id="firstName">Сотрудники</span>
              </div>
              <div id="table">

              </div>
        </div>

        <div id="users" className="userInfo admin-tool">
              <div className="userName tableName">
                <span id="firstName">Клиенты</span>
              </div>

              <div id="users-table">

              </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
