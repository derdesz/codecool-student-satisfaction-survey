import React from "react";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 8,
    question_content: "The process of study/job contracting, signing paperwork is smooth, communication about it is satisfactory.",
    group_id: 3,
    question_type: "0-10",
    answer_content: ""
}

const SmoothCommunication = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult[7] = questionData;
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">The process of study/job contracting, signing paperwork is smooth, communication about it is satisfactory.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default SmoothCommunication;