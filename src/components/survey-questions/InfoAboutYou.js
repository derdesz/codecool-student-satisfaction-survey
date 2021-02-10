import React from "react";

const questionData = {
    id: 1,
    question_content: "Info about you",
    group_id: 2,
    question_type: "input",
    answer_content: ""
}

const InfoAboutYou = ({surveyResult}) => {

    const handleInputChange = (event) => {
        questionData.answer_content = event.target.value;
        surveyResult.push(questionData);
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>

            <div className="ui container white-background">
                <div className="ui form">
                    <div className="header">
                        <h1>Info about you</h1>
                        <div className="padded">
                            <input type="text" placeholder="Leírás (nem kötelező)"  onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className="ui hidden divider">
                </div>
            </div>

        </React.Fragment>

    )
        ;
}

export default InfoAboutYou;
