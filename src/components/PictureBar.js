import React from "react";
import image from "../headbar.png";

const PictureBar = () => {
    return (
        <div>
            <div className="ui container">
                <img src={image} alt="pic coming soon.." className="ui fluid rounded image"/>
            </div>
            <div className="ui hidden divider">
            </div>
        </div>
    );
}

export default PictureBar;