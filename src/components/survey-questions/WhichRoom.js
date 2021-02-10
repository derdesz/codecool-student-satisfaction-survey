import React from "react";

const questionData = {
    id: 2,
    question_content: "Which room are you in?",
    group_id: 2,
    question_type: "choice",
    answer_content: ""
}

const WhichRoom = ({surveyResult}) => {

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
                    <div className="align-left">
                        <p className="question required">Which room are you in?</p>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="room" value="ProgBasics" onClick={(clickCheckBox)}/>
                                <label>ProgBasics</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="room" value="Web and SQL with Python" onClick={(clickCheckBox)}/>
                                <label>Web and SQL with Python</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="room" value="OOP with Java/C#" onClick={(clickCheckBox)}/>
                                <label>OOP with Java/C#</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="room" value="Advanced" onClick={(clickCheckBox)}/>
                                <label>Advanced</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="room" value="Web SQL with Java" onClick={(clickCheckBox)}/>
                                <label>Web SQL with Java</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default WhichRoom;
