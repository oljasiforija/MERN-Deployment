import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { set } from "mongoose";
const SinglePirate = (props) => {
    const {_id} = useParams();
    const [pirate,setPirate] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + _id)
        .then(res => {
            console.log(res)
            setPirate(res.data.results)
            setPirate(res.data.results)
        })
        .catch(err => console.log(err))
    },[_id])

    return(
        <div>
            <div className="navbar navbar-light bg-light">
                <h1>{pirate.name}</h1>
                <Link className="btn btn-primary" to="/pirates"> Crew Board</Link>
            </div>
            <h1>About </h1>
            <img className="img" src={pirate.imgURL} alt={pirate.name}></img>
            <p>Pirate Catch Phrase: {pirate.phrase}</p>
            <p>Treasures: {pirate.numChests}</p>
            <p>Position: {pirate.position}</p>
            <p>Peg Leg:{pirate.pegLeg ? "yes" : "no"}</p> 
            <p>Eye Patch: {pirate.eyePatch ? "yes" : "no"} </p>
            <p>Hook Hand: {pirate.hookHand ? "yes" : "no"}</p>
        </div>
    )
}
export default SinglePirate;