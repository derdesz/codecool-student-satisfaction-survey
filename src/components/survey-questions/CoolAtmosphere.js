import React from "react";
import RatingForTen from "../RatingForTen";

const CoolAtmosphere = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">There's a cool atmospherein Codecool which helps me to improve and stay motivated.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CoolAtmosphere;