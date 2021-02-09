import React from "react";

const Number = ({ratingNumbers, clickCheckBox, questionId}) => {

    return (
        ratingNumbers.map((number) => (
            <div className="numbers" key={number}>
                <p>{number}</p>
                <input type="radio" name={questionId} value={number} onClick={clickCheckBox}/>
            </div>
        ))
    );
}

export default Number;