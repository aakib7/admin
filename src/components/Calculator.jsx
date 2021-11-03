import React from 'react';
const Calculator = () => {
    const [number1,setNumser1] = React.useState();
    const [number2,setNumser2] = React.useState();
    const [answer,setAnswer] = React.useState();
    const [operation,setOperation] = React.useState('+');

    const sum = ()=>{
        let a = parseInt(number1);
        let b = parseInt(number2); 
        // let working here
        setAnswer(a+b)
    }
    const handleChangeOperation = (e)=>{
        setOperation(e.target.value)
    }

    

    return ( <div>
        <h1>Sum Calculation</h1>
        <input type="text"
        placeholder = "Number 1"
        onChange={(e)=>setNumser1(e.target.value)}></input>
        <input type="text"
        placeholder = "Number 2"
        onChange={(e)=>setNumser2(e.target.value)}></input>
        
        <select value={operation} onChange={handleChangeOperation}>
            <option value="+">Plus + </option>
            <option value="-">Subtration - </option>
            
      </select>

        <button onClick={sum}>Calculate</button>


        <h2>{answer}</h2>

    </div> );
}
 
export default Calculator;