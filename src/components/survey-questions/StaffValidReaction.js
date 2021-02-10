import React from "react";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 7,
    question_content: "There's valid reaction (something happens) from Codecool office staff when I raise a problem.",
    group_id: 3,
    question_type: "0-10",
    answer_content: ""
}

const StaffValidReaction = ({surveyResult}) => {

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
                    <p className="question">There's valid reaction (something happens) from Codecool office staff when I raise a problem.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default StaffValidReaction;
