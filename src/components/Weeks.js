import React from "react";

const Weeks = ({weeks}) => {

    return (
        weeks.map((week) => (
            <option value={week}>{week}</option>
        ))
    );
}

export default Weeks;