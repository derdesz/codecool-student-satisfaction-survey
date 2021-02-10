import React from "react";

const questionData = {
    id: 3,
    question_content: "Which location are you in?",
    group_id: 2,
    question_type: "choice",
    answer_content: ""
}

const WhichLocation = ({surveyResult}) => {

    const clickCheckBox = (event) => {
        questionData.answer_content = (event.target.value);
        surveyResult.push(questionData);
        // console.log(event.target.value);
        // console.log(whichLocation);
    }

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <div className="align-left">
                        <p className="question required">Which location are you in?</p>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="location" value="Budapest" onClick={clickCheckBox}/>
                                <label>Budapest</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="location" value="Cracow" onClick={clickCheckBox}/>
                                <label>Cracow</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="location" value="Miskolc" onClick={clickCheckBox}/>
                                <label>Miskolc</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="location" value="Warsaw" onClick={clickCheckBox}/>
                                <label>Warsaw</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="location" value="Bucharest" onClick={clickCheckBox}/>
                                <label>Bucharest</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default WhichLocation
