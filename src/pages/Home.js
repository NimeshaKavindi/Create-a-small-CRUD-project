import React from "react";
import {database} from "../firebase";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home(){

    const history = useNavigate()

    const handleClick = ()=>{
        signOut(database).then(val =>{
            console.log(val,"val")
           history('/')
        })
    }

    
    return(
        <div className="container-fluid">
        <div className="row justify-content-end mt-3">
          <div className="col-auto">
            <button className="btn btn-danger" onClick={handleClick}>
              Sign Out
            </button>
          </div>
        </div>
        {/* Rest of your component content */}
      </div>
    )
}

export default Home;