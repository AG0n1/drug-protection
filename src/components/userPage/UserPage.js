import { useNavigate } from "react-router-dom"
import React, { useState, useContext } from "react"
import UserContext from '../UserContext';

function UserPage() {
    const { userData } = useContext(UserContext);
    console.log(userData)
    const navigate = useNavigate()
    const deleteToken = () => {
        fetch("http://localhost:3001/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}` 
              },
            body: JSON.stringify({token: localStorage.getItem("token")}),
        })
        localStorage.setItem("token", "null")
        navigate("/")
    }

    // const [nickname, setNickname] = useState("")
    // const [name, setName] = useState("")
    // const [second_name, setSecondName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [telegram_id, setTelegramId] = useState("")
    // const [donate_value, setDonateValue] = useState("")
    // const [description, setDescription] = useState("")
    // const [background, setbackground] = useState("")
    

    return (
        <div className="userPage" >
            <div className="userInfo">
                <div className="userPhoto">

                </div>

                <div className="space">
                        
                </div>

                <div className="userData">
                    <div className="userName">
                        <span id="firstName" >User</span>
                        <span id="secondName" > User</span>
                    </div>

                    <div className="userDescription">
                        Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there Hey there 
                    </div>
                </div>
            </div>

            <div className="userInfo userInput">
                <input className="user__input" placeholder="Введите ваше имя:" />
                <input className="user__input" placeholder="Введите вашу фамилию:" />
                <input className="user__input" placeholder="Введите ваш id" />
                <input className="user__input" placeholder="Введите ваш id" />
            </div>
            <button onClick={deleteToken} >Log out</button>
        </div>
    )
}

export default UserPage