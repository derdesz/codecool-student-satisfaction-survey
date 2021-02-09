import React from "react";

const questionData = {
    id: 9,
    question_content: "About culture, atmosphere, location",
    group_id: 5,
    question_type: "input",
    answer_content: ""
}

const CultureAtmosphereLocation = ({surveyResult}) => {

    const handleInputChange = (event) => {
        questionData.answer_content = event.target.value;
        surveyResult[8] = questionData;
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>

            <div className="ui container white-background">
                <div className="ui form">
                    <div className="header">
                        <h1>About culture, atmosphere, location</h1>
                        <div className="padded">
                            <input type="text" placeholder="Leírás (nem kötelező)" onChange={handleInputChange}/>
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

export default CultureAtmosphereLocation;