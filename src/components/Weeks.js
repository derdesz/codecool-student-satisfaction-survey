import React from "react";

const Weeks = ({weeks}) => {

    return (
        weeks.map((week) => (
            <div className="field answer">
                <div className="ui radio checkbox">
                    <input type="radio" name="example2"/>
                    <label>{week}</label>
                </div>
            </div>
        ))
    );
}

export default Weeks;