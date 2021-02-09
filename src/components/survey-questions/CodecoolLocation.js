import React from "react";
import RatingForTen from "../RatingForTen";


const questionData = {
    id: 12,
    question_content: "I feel belonging to a group in Codecool and it satisfies me.",
    group_id: 5,
    question_type: "0-10",
    answer_content: ""
}

const CodecoolLocation = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult[11] = questionData;
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">Codecool is located in a great place (easily reachable, travel time from your home is okay, the neighbourhood offers satisfactory facilities I need for example dining options).</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen clickCheckBox={clickCheckBox} questionId={questionData.id}/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CodecoolLocation;