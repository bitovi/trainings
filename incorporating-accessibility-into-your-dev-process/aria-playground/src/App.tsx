import React, { useEffect, useRef, useState } from "react";

const App = () => {
  return (
    <>
      <h1>ARIA Playground</h1>

      <section>
        <h2>Clock</h2>
        <Clock />
      </section>

      <section>
        <h2>Roles</h2>
        <p role="alert">Paragraph with alert role.</p>
        <div role="button" tabIndex={0}>Div element with button role.</div>
      </section>

      <section>
        <h2><code>aria-live</code></h2>
        <p aria-live="assertive" aria-atomic="true">
          Assertive: <Counter delay={2234} />
        </p>
        <p aria-live="polite" aria-atomic="true">
          Polite: <Counter delay={2000} />
        </p>
      </section>
    </>
  );
};

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  return (
    <p aria-live="polite" aria-atomic="true">
      {hours}:{minutes}:{seconds}
    </p>
  );
}

function Counter({ delay }) {
  let [count, setCount] = useState(0);
  console.log('delay:', delay);

  useInterval(() => {
    setCount(count + 1);
  }, delay);

  return <>{count}</>;
}

function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<Function>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default App;
