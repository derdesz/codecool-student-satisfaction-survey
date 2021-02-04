import React from "react";
import Numbers from "./Numbers";

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
                    <Numbers/>
                </div>
            </div>
        </React.Fragment>
    );
}


export default ResponseTimes;