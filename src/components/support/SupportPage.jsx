function SupportPage() {

    const sendData = () => {
        fetch('http://localhost:3001/suppornGetData', {
            method: "POST",
            body: JSON.stringify({})
        })
    }

    return (
        <div className="support-page">
            <form action="" className="support-form">
                <div className="form-title absoluteCenter">
                    Нам жаль, что вы столкнулись с неприятностью

                    <div className="form-title-small">
                        Пожалуйста, опишите проблему в полях ниже и мы постараемся Вам помочь
                    </div>
                </div>

                <div className="form-field">
                    <div className="form-field-title">
                        Выберите тип проблемы
                    </div>

                    <select>
                        <option value="1">
                            Проблема с сайтом
                        </option>

                        <option value="2">
                            Непрофессиональное поведение сотрудников
                        </option>

                        <option value="3">
                            Проблема с входом в личный кабинет
                        </option>

                        <option value="4">
                            Проблема с оплатой
                        </option>

                        <option value="5">
                            Другое
                        </option>
                    </select>
                </div>

                <div className="form-field">
                    <div className="form-field-title">
                        Пожалуйста, детально опишите Вашу проблему
                    </div>

                    <textarea className="support-userarea">

                    </textarea>
                </div>

                <div className="form-field">
                    <button onClick={sendData} id="form-send">Отправить</button>
                </div>
            </form>
        </div>
    )
}

export default SupportPage