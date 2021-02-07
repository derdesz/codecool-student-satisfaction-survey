import React from "react";
import Weeks from "../Weeks";

const CalendarWeeks = () => {

    const weeks = [];

    function addWeeks() {
        for (let i = 1; i <= 24; i++) {
            weeks.push(i);
        }
    }

    addWeeks();


    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>

            <div className="ui container white-background">
                <div className="ui form">
                    <div className="align-left">
                        <p className="question required">How many calendar weeks have you spent in the current room?</p>
                        <Weeks weeks={weeks}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
);
}

export default CalendarWeeks;