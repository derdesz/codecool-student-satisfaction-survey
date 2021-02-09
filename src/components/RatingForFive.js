import React from "react";
import Number from "./Number";

const RatingForFive = ({clickCheckBox, questionId}) => {
    const ratingNumbers = [];

    function generateRatingNumbers () {
        for (let i = 1; i <= 5; i++) {
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
                    <p>Way less would be enough</p>
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
                    <p>I need way more</p>
                </div>
            </div>


        </div>
    );
}



export default RatingForFive;