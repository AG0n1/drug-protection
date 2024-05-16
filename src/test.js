function Test() {
    const func = () => {
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
    };
  
    return (
      <div>
        <input style={{marginTop: "200px"}} id="inp" onBlur={func} />
      </div>
    );
  }
  
  export default Test;
