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
                    <div onClick={close} className="cross">
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"/>
                        </svg>
                    </div>
                    <div className="adv-title">
                        Запишитесь, и получите скидку в <span>50%</span>
                    </div>
                    
                    <div className="input-zone">
                        Ваше имя:
                        <input className="adv-input" id="name" />
                    </div>

                    <div className="input-zone">
                        Ваш номер:
                        <input className="adv-input" id="phone-number" />
                    </div>

                    <div className="btn-place absoluteCenter">
                        <button className="confirm-btn">
                            Отправить заявку
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Advertising