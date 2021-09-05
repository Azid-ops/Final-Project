import React from 'react';

import { NavLink } from 'react-router-dom';

import Aux from '../../HOC/Auxiliary';
import HomeNav from '../../Ui/Navigation/HomeNav';

import classes from './UserLogin.css';

const User = props =>{
    return(
        <Aux>
            <HomeNav />
            <div className={classes.center}>
                <div className={classes.vote}>
                    <h1 className={classes.myVote}>E-Voting</h1>
                    <p className={classes.admin}>User Login</p>
                    <hr />
                    <br />
                    <form method="POST">
                        <input 
                            // value={props.user.email}
                            // onChange={props.handleInput}
                            type="email" 
                            placeholder="Email" 
                            name="email"
                        />

                        <br />
                        <br />

                        <input
                            // value={props.user.password} 
                            // onChange={props.handleInput}
                            type="password" 
                            placeholder="Password" 
                            name="password"
                        />
                    </form>
                    <br />
                    <br />
                    <button 
                        type="submit" 
                        className={classes.Login}
                        onClick={props.PostData}
                    >
                        Login
                    </button>
                    <br />
                    <br />
                </div>
                <div className={classes.center1}>
                    <div className={classes.subDiv}>
                        <br />
                        <NavLink to="/" className={classes.pass}>
                            Send Password?
                        </NavLink>
                        <br />
                        <p className={classes.pass}>
                            New to E-Voting?
                            <NavLink 
                                to="/userSignup"
                                className={classes.anchor}
                            >
                                Signup
                            </NavLink>
                        </p>
                        <p>If you have a problem logging in,<NavLink to="/" className={classes.anchor}>click here</NavLink> to email us</p>
                    </div>
                </div>
                <br />
                
            </div>
        </Aux>
    )
}

export default User;