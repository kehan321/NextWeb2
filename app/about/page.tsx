"use client"; // This makes it a client component

import { useEffect, useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<number[]>([]); // Specify the type as number[]

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
    setHistory(prevHistory => [...prevHistory, count]); // Track history of counts
  }, [count]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const setCountFromInput = () => {
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
      setInputValue(''); // Clear input after setting
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      <br />
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Set count"
      />
      <button onClick={setCountFromInput}>Set Count</button>

      <h3>History of Counts:</h3>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CounterComponent;
