import React from "react";

function Article (props) {

    return (
        <article className="product-range">
            <h2>
                {props.emoji}
            </h2>
            <h2>
                {props.text}
            </h2>
            <button
                type={props.type}
                name='Aftellen'
                onClick={() => props.setFruitQty(props.fruitQty-1)}
                disabled={props.disabled}
            >-
            </button>

            <p>{props.fruitQty}</p>

            <button
                type={props.type}
                name='Optellen'
                onClick={() => props.setFruitQty(props.fruitQty+1)}
            >+
            </button>
        </article>
    )
}



export default Article;