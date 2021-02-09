import React from "react";
import RatingForTen from "../RatingForTen";

const questionData = {
    id: 17,
    question_content: "I get enough professional help (either from my peers or from mentors) in order to improve in hard skills.",
    group_id: 6,
    question_type: "0-10",
    answer_content: ""
}

const HardSkillsHelp = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult[16] = questionData;
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">I get enough professional help (either from my peers or from mentors) in order to improve in hard skills.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default HardSkillsHelp;