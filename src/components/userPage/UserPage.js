import { useEffect } from "react"

function UserPage() {

    const deleteToken = () => {
        localStorage.setItem("token", "null")
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
                        <span id="firstName" >Matthew</span>
                        <span id="secondName" > Markovets</span>
                    </div>

                    <div className="userDescription">
                        
                    </div>
                </div>
            </div>
            <button onClick={deleteToken} >Log out</button>
        </div>
    )
}

export default UserPage