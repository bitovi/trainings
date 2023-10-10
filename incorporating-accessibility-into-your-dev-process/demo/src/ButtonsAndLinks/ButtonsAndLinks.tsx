import React, { useRef } from "react";

import styles from "./ButtonsAndLinks.module.css";

const ButtonsAndLinks = () => {
  const firstDialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <h2>Buttons and Links</h2>

      <p>
        <a href="https://www.bitovi.com/academy/">Click here</a>
        to level up your frontend skills with courses on Bitovi Academy.
      </p>
      <p><a className={styles.button} href="https://www.bitovi.com/academy/#courses-section">Browse the courses</a></p>

      <dialog id="firstDialog" ref={firstDialog}>
        <h3>Dialog header</h3>
        <form method="dialog">
          <div onClick={() => { firstDialog.current?.close() }}>Close dialog</div>
        </form>
      </dialog>

      <div onClick={() => { firstDialog.current?.showModal() }}>
        Open the dialog
      </div>
    </>
  );
};

export default ButtonsAndLinks;