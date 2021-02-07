import React from "react";
import RatingForFive from "../RatingForFive";

const TeamWork = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">What do you think about the amount of teamwork in Codecool?</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForFive/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default TeamWork;