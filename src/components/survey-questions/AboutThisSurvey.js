import React from 'react';


const AboutThisSurvey = () => {

    return (
        <div className="ui container white-background">
            <div className="header">
                <h1>All-location Student Satisfaction Survey</h1>
            </div>
            <div className="ui hidden divider">
            </div>

            <div className="about-survey">
                <p>Dear Codecooler!<br/><br/>In order to improve your experience in Codecool we need to know your
                    opinion about various topics.
                    We assembled a survey which we will send out quarterly to measure student satisfaction and modify
                    our processes accordingly.
                    <br/><br/>Some important remarks:
                    - The survey is anonymous (email address only needed to ensure one answer per person)
                    - If you didn't experience something (e.g. trial interviews) you can still have an opinion or
                    belief. We are interested in your opinion/belief so feel free to choose a value even in that case.
                    - It takes approximately 6-8 minutes to fill it in (we measured it!) depending on how much time do
                    you spend on answering the textual questions (which are really important for us as these can contain
                    specific things).
                    - After collecting all the answers we will send an email about summarizing our findings from the
                    survey.
                    <br/><br/>
                    Please fill it in at the dedicated session on your TW week! Thank you!
                </p>
            </div>
            <div className="ui hidden divider">
            </div>

        </div>
    );
}

export default AboutThisSurvey;