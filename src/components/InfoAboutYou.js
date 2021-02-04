import React from "react";

const InfoAboutYou = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>

            <div className="ui container white-background">
                <div className="ui form">
                    <div className="header">
                        <h1>Info about you</h1>
                        <div className="padded">
                            <input type="text" placeholder="Leírás (nem kötelező)"/>
                        </div>
                    </div>
                </div>
                <div className="ui hidden divider">
                </div>
            </div>

        </React.Fragment>

    )
        ;
}

export default InfoAboutYou;