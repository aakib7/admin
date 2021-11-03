import React from 'react';
const Count = () => {
    const [count,setCount] = React.useState(7);
    const [inputNumber,setInputNumber] = React.useState(70);

    const counterUp = ()=>{
        setCount(count + 1);
    }
    const counterDown = ()=>{
        setCount(count - 1);
    }
    return (<div>
        <button onClick={counterUp}>+</button> {count} <button onClick={counterDown}>-</button>
        <h1>Count Value: {count}</h1><br />
        <input type="number"
        onChange={(e) => setInputNumber(e.target.value)}
        ></input>
        <h2>Input value is:{inputNumber}</h2>


    </div> );
}
 
export default Count;