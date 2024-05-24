function SupportPage() {
    return (
        <div className="support-page">
            <form action="" className="support-form">
                <div className="form-title">
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
                        <option>
                            Проблема с сайтом
                        </option>

                        <option>
                            Непрофессиональное поведение сотрудников
                        </option>

                        <option>
                            Проблема с входом в личный кабинет
                        </option>

                        <option>
                            Проблема с оплатой
                        </option>

                        <option>
                            Другое
                        </option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default SupportPage