import Image from "../Image"
import logo from "../images/precent-removebg-preview.png"

function Advertising() {
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
                        Мы заботимся о Ваших проблемах, а потому нам важно, чтобы Вы получили первую консультацию со скидкой
                    </div>
                </div>

                <div className="a-main-photo">
                    <img width="300px" src={logo} />
                </div>
            </div>
        </div>
    )
}

export default Advertising