import React from "react";

import styles from "./ReduceMotion.module.css";

const ReduceMotion = () => {
    return (
        <section>
            <h2>Reduce motion</h2>
            <button className={styles.button}>Interact with me</button>
        </section>
    );
};

export default ReduceMotion;