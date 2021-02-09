import React from "react";

const Weeks = ({weeks, chooseWeek}) => {

    return (
        weeks.map((week) => (
            <option name={week} value={week} key={week}>{week}</option>
        ))
    );
}

export default Weeks;