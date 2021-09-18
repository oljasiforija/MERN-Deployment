import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const PirateForm = (props) => {
    const history = useHistory();
    const[form,setForm] = useState({
        name:"",
        imgURL:"",
        numChests: null,
        phrase: "",
        position: "",
        pegLeg: true,
        eyePatch: true,
        hookHand:true
    });
    const [errors, setErrors] = useState();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/pirates/new", form)
        .then(res => {
            if(res.data.err){
                setErrors(res.data.err.errors)
            }
            else{
                history.push("/pirates")
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label> Pirate Name: </label>
                    <input name="name" type="text" onChange={onChangeHandler}></input>
                    <span>{errors ? errors.name.message : ""}</span>
                </div>
                <div>
                    <label> Image URL: </label>
                    <input name="imgURL" type="text" onChange={onChangeHandler}></input>
                    <span>{errors ? errors.imgURL.message : ""}</span>
                </div>

                <div>
                    <label> # of Treasure Chests: </label>
                    <input name="numChests" type="number" onChange={onChangeHandler}></input>
                    <span>{errors ? errors.numChests.message : ""}</span>
                </div>
                <div>
                    <label> Pirate Catch Phrase: </label>
                    <input name="phrase" type="text" onChange={onChangeHandler}></input>
                    <span>{errors ? errors.phrase.message : ""}</span>
                </div>
                <div>
                    <label> Crew Position: </label>
                    <select name="position" onChange={onChangeHandler}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    <span>{errors ? errors.position.message : ""}</span>
                </div>
                <div>
                    <label> Peg Leg: </label>
                    <input name="pegLeg" type="checkbox" checked={true} value="true" onChange={onChangeHandler}></input>
                </div>
                <div>
                    <label> Eye Patch: </label>
                    <input name="eyePatch" type="checkbox" checked="true" value="true" onChange={onChangeHandler}></input>
                    
                </div>
                <div>
                    <label> Hook Hand: </label>
                    <input name="hookHand" type="checkbox" checked="true" value="true" onChange={onChangeHandler}></input>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Pirate"></input>
            </form>
        </div>
    )
}
export default PirateForm;