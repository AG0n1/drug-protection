import Image from "../Image"
import logo from "../images/precent-removebg-preview.png"

function Advertising() {
    let isOpen = false
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

    return(
        <div className="advertising">
            <div className="advertising-title">
                Не пропустите!
            </div>

            <div className="advertising-main">
                <div className="a-main-text">
                    <div className="a-text-title">
                        Скидка на первый раз
                    </div>

                    <div className="a-text-info">
                        Мы позаботимся о Ваших проблемах, а потому нам важно, чтобы Вы получили первую консультацию со скидкой

                        <button onClick={open}>
                            Записаться на приём
                        </button>
                    </div>
                </div>

                <div className="a-main-photo">
                    <img width="300px" src={logo} />
                </div>
            </div>

            <div id="appointment" className="hidden formZone">
                <div className="appointment-form">
                    <div className="adv-title">
                        Запишитесь, и получите скидку в <span>50%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertising