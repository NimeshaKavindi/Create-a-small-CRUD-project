import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {database} from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import "../css/login.css";


function Login() {
    const [login, setLogin] = useState(false)

    const history = useNavigate()
    const handleSubmit =(e, type) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if (type == 'SignUp' ){
            createUserWithEmailAndPassword(database, email,password ).then(data =>{
                console.log(data,"authData")
                history('/home');
            }).catch(err =>{
                alert(err.code)
                setLogin(true)
            })
        }else{
            signInWithEmailAndPassword(database, email,password ).then(data =>{
                console.log(data,"authData")
                history('/home');
            }).catch(err =>{
                alert(err.code)
            })
        }

    }
   
  return (
    
    <div className="container mt-5">
      
            <div className="row justify-content-center mb-3">
                <div className="col-auto">
                    <button
                        className={`btn ${login ? 'btn-outline-primary' : 'btn-primary'}`}
                        onClick={() => setLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="col-auto">
                    <button
                        className={`btn ${login ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setLogin(true)}
                    >
                        Sign In
                    </button>
                </div>
            </div>
            <br/><br/>
      <h1 className="text-center mb-4"  style = {{color:"#22FB09 ", fontSize:"90px", fontWeight:"1000"}} >{login ? 'SignIn': 'SignUp'}</h1>
      <br/><br/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form  onSubmit={(e) =>handleSubmit(e, login ? 'SignIn': 'SignUp')}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style = {{fontSize:"18px"}}>Email address :</label>
                  <input type="email" className="form-control" id="email" name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" style = {{fontSize:"18px"}}>Password : </label>
                  <input type="password" className="form-control" id="password"  name="password" />
                </div>
                <div className="button">
                  <button type="submit" className="btn btn-primary" >{login ? 'SignIn': 'SignUp'}</button>
 
                </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
