import React from "react";
import RatingForTen from "../RatingForTen";

const StaffValidReaction = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">There's valid reaction (something happens) from Codecool office staff when I raise a problem.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default StaffValidReaction;