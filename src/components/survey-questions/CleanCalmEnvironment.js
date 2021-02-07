import React from "react";
import RatingForTen from "../RatingForTen";

const CleanCalmEnvironment = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">Codecool office offers a clean and calm environment, that is needed for me to focus on my studies.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CleanCalmEnvironment;