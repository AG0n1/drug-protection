import { useNavigate } from "react-router-dom"

function UserPage() {
    const navigate = useNavigate()
    const deleteToken = () => {
        localStorage.setItem("token", "null")
        navigate("/")
    }

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
                <input className="user__input" placeholder="Введите ваш id" />
                <input className="user__input" placeholder="Введите ваш id" />
                <input className="user__input" placeholder="Введите ваш id" />
                <input className="user__input" placeholder="Введите ваш id" />
            </div>
            <button onClick={deleteToken} >Log out</button>
        </div>
    )
}

export default UserPage