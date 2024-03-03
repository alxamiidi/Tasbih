
import { useState } from "react"

function Tasbih() {

    const [counter, setCounter] = useState(0)
    
    // function that handles increment action
    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    // function that handles decrement action
    const handledecrement = () => {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }

    // funtion that handles reset action

    const handleReset = () => {
        setCounter(0)
    }
 

    return <div className=" text-center mt-32">

        <h1 className=" text-7xl mb-10"> {counter} </h1>
        <button onClick={handleIncrement} className=" bg-orange-500 px-4 py-2 text-2xl m-2 rounded text-white font-semibold">Increment</button>
        <button onClick={handledecrement} className=" bg-blue-500 px-4 py-2 text-2xl m-2 rounded text-white font-semibold">Decrement</button>
        <button onClick={handleReset} className=" bg-green-500 px-4 py-2 text-2xl m-2 rounded text-white font-semibold">Reset</button>
    </div>
};

export default Tasbih