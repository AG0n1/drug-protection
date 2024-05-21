function UsersQuestions(props) {
    const {id} = props
    let token = localStorage.getItem("token")
    const func = () => {
        
        const inp = document.getElementById("inp");
        if (token && token !== "null" && token !== null && inp.value.trim().length !== 0) {
            console.log(token)
            const currentDate = new Date().toLocaleDateString();
            const currentTime = new Date().toLocaleTimeString();
            const userData = JSON.parse(localStorage.getItem('userData')); 
            
            const dataToSend = {
              message: inp.value,
              date: currentDate,
              time: currentTime,
              name: userData.name,
              second_name: userData.second_name,
              id: id,
              status: userData.status
            };
            console.log(typeof localStorage.getItem("token"))
            fetch("http://localhost:3001/saveMessage", {
              method: "POST",   
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}` 
              },
              body: JSON.stringify(dataToSend),
            });

            const messageBlock = document.createElement("div");
            messageBlock.className = "message-block";
            messageBlock.innerHTML = `
            <div class="user-message" >${inp.value}</div>
            `;
            

            const placeForMessages = document.getElementById("place-for-messages");
            placeForMessages.appendChild(messageBlock);

    
        }

        inp.value = "";
    };
    
    return (
        <div className="users-questions">
            {id === "0" && (
                        <div className="placeholder">
                            Выберите тему, которую вы хотите обсудить
                        </div>
                    )}
            {id !== "0" && (
                <div id="place-for-messages">
                
                </div>
            )}
            {id !== "0" && (
                <input id="inp" autocomplete="off" onBlur={func} className="users-inp" placeholder="Введите сообщение..." />
            )}
        </div>
    )
}

export default UsersQuestions

