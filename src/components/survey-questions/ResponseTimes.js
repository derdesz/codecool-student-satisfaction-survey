import React from "react";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 6,
    question_content: "Codecool office staff has good response times when there's a question or problem.",
    group_id: 3,
    question_type: "0-10",
    answer_content: ""
}

const ResponseTimes = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult.push(questionData);
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">Codecool office staff has good response times when there's a
                        question or problem.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default ResponseTimes;
