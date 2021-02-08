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

                        <select className="ui search dropdown weeks">
                            <Weeks weeks={weeks}/>
                            {/*<option value="">Gender</option>*/}
                            {/*<option value="1">Male</option>*/}
                            {/*<option value="0">Female</option>*/}
                        </select>
                    </div>
                </div>
            </div>
        </React.Fragment>
);
}

export default CalendarWeeks;