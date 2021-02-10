import React from "react";
import Weeks from "../Weeks";

const questionData = {
    id: 4,
    question_content: "How many calendar weeks have you spent in the current room?",
    group_id: 2,
    question_type: "1-24",
    answer_content: ""
}

const CalendarWeeks = ({surveyResult}) => {

    const weeks = [];

    function addWeeks() {
        for (let i = 1; i <= 24; i++) {
            weeks.push(i);
        }
    }

    addWeeks();

    const chooseWeek = (event) => {
        console.log(event.target.value);
        questionData.answer_content = (event.target.value);
        surveyResult.push(questionData);
    }


    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>

            <div className="ui container white-background">
                <div className="ui form">
                    <div className="align-left">
                        <p className="question required">How many calendar weeks have you spent in the current room?</p>

                        <select className="ui search dropdown weeks" onChange={chooseWeek}>
                            <Weeks weeks={weeks} chooseWeek={chooseWeek}/>
                        </select>
                    </div>
                </div>
            </div>
        </React.Fragment>
);
}

export default CalendarWeeks;
