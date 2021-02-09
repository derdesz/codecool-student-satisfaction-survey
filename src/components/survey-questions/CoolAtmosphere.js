import React from "react";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 10,
    question_content: "There's a cool atmosphere in Codecool which helps me to improve and stay motivated.",
    group_id: 5,
    question_type: "0-10",
    answer_content: ""
}

const CoolAtmosphere = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult[9] = questionData;
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">There's a cool atmosphere in Codecool which helps me to improve and stay motivated.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CoolAtmosphere;