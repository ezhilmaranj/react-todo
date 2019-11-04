import React from 'react';
import appLogo from '../../assets/images/todo-icon.png'
import { Link } from "react-router-dom";

const SignUp = () => {

    return (
        <div className="columns is-vcentered">
            <div className="login column is-4 ">
                <section className="section">
                    <div className="has-text-centered">
                        <img className="login-logo" src={appLogo}/>
                    </div>
                    <div className="field">
                        <label className="label">Display Name</label>
                        <div className="control has-icons-right">
                            <input className="input" type="text"/>
                            <span className="icon is-small is-right">
                                <i className="fa fa-user"></i>
                              </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-right">
                            <input className="input" type="email"/>
                            <span className="icon is-small is-right">
                                <i className="fa fa-envelope"></i>
                              </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-right">
                            <input className="input" type="password"/>
                            <span className="icon is-small is-right">
                                 <i className="fa fa-key"></i>
                             </span>
                        </div>
                    </div>
                    <div className="has-text-centered">
                        <button className="button is-primary">Sign up</button>
                    </div>
                    <div className="has-text-centered">
                        <Link to="/signin"> Already have an account? Log in now !</Link>
                    </div>
                </section>
            </div>
            <div id="particles-js" className="interactive-bg column is-8">
            </div>
        </div>
    )
}

export default SignUp;
