import React from "react";
import RatingForFive from "../RatingForFive";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 20,
    question_content: "What do you think about the amount of teamwork in Codecool?",
    group_id: 7,
    question_type: "1-5",
    answer_content: ""
}

const TeamWork = ({surveyResult}) => {

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
                    <p className="question">What do you think about the amount of teamwork in Codecool?</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForFive clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default TeamWork;
