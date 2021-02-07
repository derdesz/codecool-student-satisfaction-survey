import React from "react";
import RatingForTen from "../RatingForTen";

const SmoothCommunication = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">The process of study/job contracting, signing paperwork is smooth, communication about it is satisfactory.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default SmoothCommunication;