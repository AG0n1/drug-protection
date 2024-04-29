import { useState } from "react";

const ErrorButton = () => {
    const [hasError, setHasError] = useState(false)

    if (hasError) {
        throw Error("Тут ошибОчка")
    }

    return <button onClick={() => {setHasError(true)}}>Кнопка</button>
}