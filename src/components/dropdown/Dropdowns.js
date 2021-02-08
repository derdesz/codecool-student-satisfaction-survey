import React from "react";

const Dropdowns = () => {

    return (
        <div>
            <select className="ui selection dropdown">
                <option value="">Quarter</option>
                <option value="Budapest">Budapest</option>
                <option value="Cracow">Cracow</option>
                <option value="Miskolc">Miskolc</option>
                <option value="Warsaw">Warsaw</option>
                <option value="Bucharest">Bucharest</option>
            </select>
            <select className="ui selection dropdown">
                <option value="">Location</option>
                <option value="Budapest">Budapest</option>
                <option value="Cracow">Cracow</option>
                <option value="Miskolc">Miskolc</option>
                <option value="Warsaw">Warsaw</option>
                <option value="Bucharest">Bucharest</option>
            </select>
            <select className="ui selection dropdown">
                <option value="">Course</option>
                <option value="Budapest">Budapest</option>
                <option value="Cracow">Cracow</option>
                <option value="Miskolc">Miskolc</option>
                <option value="Warsaw">Warsaw</option>
                <option value="Bucharest">Bucharest</option>
            </select>
        </div>
    );
}

export default Dropdowns;