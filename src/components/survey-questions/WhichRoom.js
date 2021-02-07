import React from "react";

const WhichRoom = () => {

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
                                <input type="radio" name="example2"/>
                                <label>ProgBasics</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="example2"/>
                                <label>Web and SQL with Python</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="example2"/>
                                <label>OOP with Java/C#</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="example2"/>
                                <label>Advanced</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="example2"/>
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