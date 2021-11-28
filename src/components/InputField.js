import React from "react";

function InputField(props) {

    return (
        <label htmlFor={props.id}>
            {props.name}
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </label>


    )
}

export default InputField;
