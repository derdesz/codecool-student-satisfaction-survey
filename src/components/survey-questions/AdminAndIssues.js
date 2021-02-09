import React from "react";

const questionData = {
    id: 5,
    question_content: "How do you rate administration and issues related to your study contract in Codecool?",
    group_id: 3,
    question_type: "input",
    answer_content: ""
}

const AdminAndIssues = ({surveyResult}) => {

    const handleInputChange = (event) => {
        questionData.answer_content = event.target.value;
        surveyResult[4] = questionData;
        // console.log(surveyResult);
    }


    return (
        <React.Fragment>
            <div className="ui hidden divider">
            </div>

            <div className="ui container white-background">
                <div className="ui form">
                    <div className="header">
                        <h1>How do you rate administration and issues related to your study contract in Codecool?</h1>
                        <div className="padded">
                            <input type="text" placeholder="Leírás (nem kötelező)" onChange={handleInputChange}/>
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