const { useState } = React;
window.Counter = function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className="counter-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
      <button className="counter-btn" onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}>Decrement</button>
      <button className="counter-btn" onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};
