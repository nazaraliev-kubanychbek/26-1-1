import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={() => {
        if(num < 15) setNum(num + 1)
      }}>+</button>

      <button onClick={() => {
        if (num > 0) setNum(num - 1)
      }}>-</button>

      <button onClick={() => {
        setNum(0)
      }}>reset</button>

      <button onClick={() => {
    
      }}>+5</button>
      <button>-5</button>

    </div>
  );
}

export default App;
