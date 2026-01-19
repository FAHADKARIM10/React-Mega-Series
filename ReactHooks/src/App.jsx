import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15);

  const addValue = () => {
    setCount(prevCount => prevCount + 1);
  };

  const removeValue = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <>
      <h1>Use state </h1>
      <h1>Count Value: {count}</h1>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
