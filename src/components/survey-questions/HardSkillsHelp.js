import React from "react";
import RatingForTen from "../RatingForTen";

const HardSkillsHelp = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">I get enough professional help (either from my peers or from mentors) in order to improve in hard skills.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default HardSkillsHelp;