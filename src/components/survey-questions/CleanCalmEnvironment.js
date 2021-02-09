import React from "react";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 13,
    question_content: "Codecool office offers a clean and calm environment, that is needed for me to focus on my studies.",
    group_id: 5,
    question_type: "0-10",
    answer_content: ""
}

const CleanCalmEnvironment = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult[12] = questionData;
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">Codecool office offers a clean and calm environment, that is needed for me to focus on my studies.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CleanCalmEnvironment;