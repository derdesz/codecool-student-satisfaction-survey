import React from "react";
import RatingForTen from "../RatingForTen";

const EmotionalSupport = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">I get enough emotional support (either from my peers or from staff members) when I need to.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default EmotionalSupport;