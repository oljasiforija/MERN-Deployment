import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pirate from '../components/Pirate';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Pirates = (props) => {
    const[pirates,setPirates] = useState([]);
    const{_id} = useParams();

    const onDeleteHandler = (_id) => {
        console.log(_id);
        axios.delete(`http://localhost:8000/api/pirates/${_id}/delete`)
        .then(res => {
            console.log(res);
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/all")
        .then(res => {
            console.log(res.data.results);
            setPirates(res.data.results)
        })
        .catch(err => console.log(err))
    },[_id])

    return(
        <div>
            {
                pirates.map((item,i) => {
                    return(
                        <div key = {i}>
                        <Pirate data={item} _id={item._id}></Pirate>
                        <Link to={`/pirates/${item._id}`} className="btn btn-primary">View Pirate</Link>
                        <Link onClick={()=>onDeleteHandler(item._id)} to="/pirates" className="btn btn-danger">Walk the Plank</Link>
                </div>
                    )
                })
            }
        </div>
    )
}
export default Pirates;