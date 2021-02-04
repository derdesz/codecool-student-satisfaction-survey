import React from "react";

const AdminAndIssues = () => {

    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>

            <div className="ui container white-background">
                <div className="ui form">
                    <div className="header">
                        <h1>How do you rate administration and issues related to your study contract in Codecool?</h1>
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

export default AdminAndIssues;