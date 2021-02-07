import React from "react";
import RatingForTen from "../RatingForTen";

const ResponseTimes = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">Codecool office staff has good response times when there's a
                        question or problem.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default ResponseTimes;