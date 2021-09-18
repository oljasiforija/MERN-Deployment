import React from "react";
const Pirate = (props) => {
    const {name, imgURL} = props.data;
    return(
        <div>
            <img className="img" src={imgURL} alt={name}></img>
            <div>
                <h3>{name}</h3>
            </div>
        </div>
    )
}
export default Pirate;