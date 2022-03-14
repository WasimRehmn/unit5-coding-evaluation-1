import React from "react";
import styles from "./App.module.css";

function App() {
    const [weightT, setWeightT] = React.useState(10);
    const [weightP, setWeightP] = React.useState(8);
    const [weightC, setWeightC] = React.useState(5);
    const [weightO, setWeightO] = React.useState(7);

    const ChangeT = (val) => {
        setWeightT(weightT + val);
    };
    const ChangeP = (val) => {
        setWeightP(weightP + val);
    };
    const ChangeC = (val) => {
        setWeightC(weightC + val);
    };
    const ChangeO = (val) => {
        setWeightO(weightO + val);
    };
    return (
        <>
            <hr />
            <h1>Vegetable</h1>
            <div className={styles.items}>
                <h2>Tomatoes - {weightT} kgs</h2>
                <button onClick={() => ChangeT(1)}>+</button>
                <button onClick={() => ChangeT(-1)}>-</button>
            </div>
            <div className={styles.items}>
                <h2>Potatoes - {weightP} kgs</h2>
                <button onClick={() => ChangeP(1)}>+</button>
                <button onClick={() => ChangeP(-1)}>-</button>
            </div>
            <div className={styles.items}>
                <h2>Carrots - {weightC} kgs</h2>
                <button onClick={() => ChangeC(1)}>+</button>
                <button onClick={() => ChangeC(-1)}>-</button>
            </div>
            <div className={styles.items}>
                <h2>Onions - {weightO} kgs</h2>
                <button onClick={() => ChangeO(1)}>+</button>
                <button onClick={() => ChangeO(-1)}>-</button>
            </div>
        </>
    );
}

export default App;
