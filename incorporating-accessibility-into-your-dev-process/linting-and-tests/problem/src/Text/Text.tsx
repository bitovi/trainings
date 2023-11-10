import React from "react";

import styles from "./Text.module.css";

const Text = () => {
    return (
        <section className={styles.text}>
            <h2>Text Size, Color, and Contrast</h2>

            <section>
                <form>
                    <p>Required fields are marked with red labels.</p>
                    <label className={styles.required}>
                        Email
                        <input required type="email" />
                    </label>
                    <label>
                        Name
                        <input type="text" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </section>

            <section className={styles.colorExample}>
                <h3 style={{ color: "#222" }}>Header text (minimum 3:1 ratio)</h3>
                <p style={{ color: "#111" }}>Paragraph text (minimum 4.5:1 ratio).</p>
            </section>

            <section className={styles.fontExample}>
                <p style={{ fontSize: "1rem" }}>X</p>
            </section>

            <figure>
                <blockquote cite="https://en.wikipedia.org/wiki/Llanfairpwllgwyngyll">
                    <p>
                        Llanfairpwllgwyngyll, or Llanfair Pwllgwyngyll (Welsh: [ɬan.ˌvair.puɬˈɡwɨ̞n.ɡɨ̞ɬ]),
                        is a large village and community on the island of Anglesey, Wales, on the Menai Strait
                        next to the Britannia Bridge and across the strait from Bangor. Both shortened
                        (Llanfairpwll or Llanfair PG) and lengthened
                        (Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch)
                        forms of the placename are used in various contexts
                        (with the longer form pronounced
                        [ˌɬan.vair.pʊɬ.ˌɡwɨ̞ŋ.ɡɨ̞ɬ.ɡɔ.ˌɡɛ.rə.ˌχwərn.ˌdrɔ.bʊɬ.ˌɬan.tə.ˌsɪl.jɔˌɡɔ.ɡɔ.ˈɡoːχ] ⓘ).
                    </p>
                </blockquote>
                <figcaption><cite>Wikipedia</cite></figcaption>
            </figure>
        </section>
    );
};

export default Text;