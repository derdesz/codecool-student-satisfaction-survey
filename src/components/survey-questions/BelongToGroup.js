import React from "react";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 11,
    question_content: "I feel belonging to a group in Codecool and it satisfies me.",
    group_id: 5,
    question_type: "0-10",
    answer_content: ""
}

const BelongToGroup = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult[10] = questionData;
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">I feel belonging to a group in Codecool and it satisfies me.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default BelongToGroup;