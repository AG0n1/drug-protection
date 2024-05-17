function UsersQuestions() {

    const func = () => {
        if (localStorage.getItem("token")) {
            const inp = document.getElementById("inp");
            const currentDate = new Date().toLocaleDateString();
            const currentTime = new Date().toLocaleTimeString();
            const userData = JSON.parse(localStorage.getItem('userData')); 
        
            const dataToSend = {
              message: inp.value,
              date: currentDate,
              time: currentTime,
              name: userData.name,
              second_name: userData.second_name
            };

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
                <div>${inp.value}</div>
            `;

            const placeForMessages = document.getElementById("place-for-messages");
            placeForMessages.appendChild(messageBlock);

            inp.value = "";
    
        } else {
            alert("Нужно войти в аккаунт")
        }
    };
    
    

    return <div className="users-questions">

        <div id="place-for-messages">
            
        </div>

        <input id="inp" onBlur={func} className="users-inp" placeholder="Введите сообщение..." />
    </div>
}

export default UsersQuestions

