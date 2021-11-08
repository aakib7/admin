import './App.css';
// import Calculator from './components/Calculator';
// import Count from './components/Count';
import Counter from './components/Counter';
import React from 'react';


function App() {
  const [theme, setTheme] = React.useState("blue");
  // setTheme("green");

  return (
    <div>
      {/* <Count />
      <Calculator /> */}
      <input
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
          }}/><br />
          <select
          value={theme}
          onChange={(e) => {
            setTheme(e.target.value);
          }}>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="aqua">Aqua</option>
        </select>
        <br />
      Current Theme is: {theme}<br />
      
      <Counter theme={theme} country="pakistan" />
      
      <Counter theme={theme} country="India" />

    </div>
  );
}

export default App;
