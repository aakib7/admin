import React from 'react';
const Counter = (props) => {

    const [counter,setCounter] = React.useState(0);
    const counterUp = ()=>{
        setCounter(counter+1);
    };
    
    const counterDown = ()=>{
        setCounter(counter-1);
    };
    let myStyles = {
        color: counter <=0 ? "red" : "green",
        backgroundColor: props.theme,
        marginTop:'45px',
        textAlign: 'center',
    };
    let styleButton = {
        marginLeft: '20px',
        padding:'5px',
    }

    
    return ( <div style={myStyles}>
        <button onClick={counterUp}>+</button>Count: {counter}<button onClick={counterDown} style={styleButton}>-</button>
         {counter < 0 && <h2>Count is less than Zero</h2>}
         {counter == 0 && <h2>Count is Zero</h2>}
         country : {props.country}
    </div> );
}
 
export default Counter;