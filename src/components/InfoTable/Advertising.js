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

                </div>

                <div className="a-main-photo">
                    <img width="300px" src={logo} />
                </div>
            </div>
        </div>
    )
}

export default Advertising