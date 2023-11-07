import React from "react";

import styles from "./Forms.module.css";

const Forms = () => {
    return (
        <section className={styles.forms}>
            <h2>Order a shirt</h2>
            <main>
                <form>
                    <p>
                        Name:
                        <input autoComplete="name" name="name" placeholder="Name" required type="text" />
                    </p>
                    <p>
                        Telephone:
                        <input autoComplete="tel" inputMode="tel" name="tel" placeholder="Telephone" required type="tel" />
                    </p>

                    <h3>Size</h3>

                    <input name="size" required type="radio" value="s" />
                    S

                    <input name="size" required type="radio" value="m" />
                    M

                    <input name="size" required type="radio" value="l" />
                    L

                    <input name="size" required type="radio" value="xl" />
                    XL

                    <input name="size" required type="radio" value="2x" />
                    2X

                    <input name="size" required type="radio" value="3x" />
                    3X

                    <p>
                        <button disabled>Place order</button>
                    </p>
                </form>
            </main>
            <aside>
                <img alt="A dark grey shirt with an illustration of a friendly tech-inspired octopus, with Bitovi’s logo and this text underneath it: Temporal • 2023 • Seattle"
                    height="252" src="https://github.com/bitovi/trainings/assets/10070176/b4526baf-3a07-4297-83e2-8ef0266c38b7"
                    width="189" />
            </aside>
        </section>
    );
};

export default Forms;