import React from "react";

const Wishlist = () => {
    const [text, setText] = React.useState("");
    const [lists, setLists] = React.useState([]);

    const collectValue = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const toAdd = () => {
        const card = {
            item: text,
            status: false,
        };
        let updateList = [...lists, card];
        setLists(updateList);
    };
    const toReset = () => {
        setLists([]);
    };

    return (
        <>
            <h1>Wishlist</h1>
            <input
                type="text"
                placeholder="Add Something"
                onChange={(e) => collectValue(e)}
            />
            {lists.length == 3 ? (
                <>
                    <h3>You cannot add more than 3 items to wishlist</h3>
                    <button onClick={toReset}>RESET</button>
                </>
            ) : (
                <button onClick={toAdd}>ADD</button>
            )}
            <ol>
                {lists.map(({ item, status }, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ol>
        </>
    );
};

export default Wishlist;
