import React from "react";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 19,
    question_content: "I get enough emotional support (either from my peers or from staff members) when I need to.",
    group_id: 6,
    question_type: "0-10",
    answer_content: ""
}

const EmotionalSupport = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult[18] = questionData;
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">I get enough emotional support (either from my peers or from staff members) when I need to.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default EmotionalSupport;