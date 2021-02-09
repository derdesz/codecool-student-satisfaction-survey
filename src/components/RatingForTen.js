import React from "react";
import Number from "./Number";

const RatingForTen = ({clickCheckBox, questionId}) => {
    const ratingNumbers = [];

    function generateRatingNumbers () {
        for (let i = 0; i < 11; i++) {
            ratingNumbers.push(i);
        }
    }

    generateRatingNumbers();

    return (
        <div className="ui relaxed grid rating">
            <div className="row">

                <div className="three wide column">
                </div>

                <div className="ten wide column ">
                    <div className="ui grid">
                        <Number ratingNumbers={ratingNumbers} clickCheckBox={clickCheckBox} questionId={questionId}/>
                    </div>
                </div>
                <div className="three wide column">
                </div>
            </div>
            <div className="row">
                <div className="three wide column">
                    <p>Strongly disagree</p>
                </div>
                <div className="ten wide column">
                    <div className="ui grid">
                        <div className="row">
                            <div className="eleven wide column">
                            </div>
                        </div>
                    </div>


                </div>
                <div className="three wide column">
                    <p>Strongly agree</p>
                </div>
            </div>


        </div>
    );
}



export default RatingForTen;