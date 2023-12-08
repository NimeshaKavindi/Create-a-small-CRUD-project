
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password"  name="password" />
                </div>
                <div className="mb-3">
                  <input type = "file"/>

                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
              <p className="mt-3">If you have an account, <a href="#">login</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
