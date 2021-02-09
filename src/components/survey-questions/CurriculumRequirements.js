import React from "react";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 16,
    question_content: "The requirements or competencies in the curriculum provided by Codecool are clear and help my journey becoming a junior developer.",
    group_id: 6,
    question_type: "0-10",
    answer_content: ""
}

const CurriculumRequirements = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult[15] = questionData;
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">The requirements or competencies in the curriculum provided by Codecool are clear and help my journey becoming a junior developer.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CurriculumRequirements;