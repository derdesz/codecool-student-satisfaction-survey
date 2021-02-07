import React from "react";
import RatingForTen from "../RatingForTen";

const CodecoolLocation = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">Codecool is located in a great place (easily reachable, travel time from your home is okay, the neighbourhood offers satisfactory facilities I need for example dining options).</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CodecoolLocation;