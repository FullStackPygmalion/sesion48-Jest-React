import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => (
    <div className="container">
        <div className="text-center"> Crea una cuenta aqui!</div>

        <form className="user">
            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-2">
                    <input type="text" className="form-control form-control.user" id="exampleFirsttName" placeholder="Fist Name" />
                </div>
                <div className="col-sm-6">
                    <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                </div>
            </div>
            <div className="form-group">
                <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
            </div>
            <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                </div>
                <div className="col-sm-6">
                    <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                </div>
            </div>
            <a href="Register.html" className="btn btn-primary btn-user btn-block">
                Register Account
        </a>
        </form>
        <hr />
        <div className="text-center">
            <Link className="small" to="/login">Ya tienes una cuenta, ingrea aqui!</Link>
        </div>

    </div>

)

export default Register