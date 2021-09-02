import { useState } from "react"

const App = () => {

    const [contador, setContador] = useState(0);

    const [values, setValues] = useState("");

    const handleClick = () => {
        setContador(contador + 1);
        setValues(values.concat(contador));
    }

    return(
        <div className="container">
            <h1>Hola, usando WebPack</h1>
            <button 
                onClick={handleClick}>
                +1
                <div>
                    {contador}
                </div>
                <div>
                    {values}
                </div>
            </button>
        </div>

    )
}

export default App