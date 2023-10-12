import React, { useState } from "react";

import styles from "./ButtonsAndLinks.module.css";

const ButtonsAndLinks = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Buttons and Links</h2>

      <p>
        <a href="https://www.bitovi.com/academy/">Click here</a>
        to level up your frontend skills with courses on Bitovi Academy.
      </p>
      <p><a className={styles.button} href="https://www.bitovi.com/academy/#courses-section">Browse the courses</a></p>

      <div onClick={() => { setCount(count + 1) }}>
        Increase the count
      </div>

      <p>Count: {count}</p>
    </>
  );
};

export default ButtonsAndLinks;