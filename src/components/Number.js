import React from "react";

const Number = ({ratingNumbers}) => {

    return (
        ratingNumbers.map((number) => (
            <div className="numbers">
                <p>{number}</p>
                <input type="radio" name="example2"/>
            </div>
        ))
    );
}

export default Number;