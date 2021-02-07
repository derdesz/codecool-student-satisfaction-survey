import React from "react";
import RatingForTen from "../RatingForTen";

const CurriculumRequirements = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>
            <div className="ui container white-background">
                <div className="ui form">
                    <p className="question">The requirements or competencies in the curriculum provided by Codecool are clear and help my journey becoming a junior developer.</p>
                    <div className="ui hidden divider">
                    </div>
                    <RatingForTen/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CurriculumRequirements;