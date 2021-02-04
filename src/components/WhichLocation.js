import React from "react";

const WhichLocation = () => {

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
                                <input type="radio" name="example2"/>
                                <label>Budapest</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="example2"/>
                                <label>Cracow</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="example2"/>
                                <label>Miskolc</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="example2"/>
                                <label>Warsaw</label>
                            </div>
                        </div>
                        <div className="field answer">
                            <div className="ui radio checkbox">
                                <input type="radio" name="example2"/>
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