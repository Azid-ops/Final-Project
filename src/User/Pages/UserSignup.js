import React from 'react';
import { NavLink } from 'react-router-dom';

import Aux from '../../HOC/Auxiliary';
import HomeNav from '../../Ui/Navigation/HomeNav';
import classes from './UserSignup.css';


const UserSignup = props =>{
    return(
        <Aux>
            <HomeNav />
            <div className={classes.center}>
                <div className={classes.vote}>
                    <h1 className={classes.myVote}>E-Voting</h1>
                    <p className={classes.admin}>User Signup</p>
                    <hr />
                    <br />
                    <form method="POST">
                        <input 
                            value={props.user.name}
                            onChange={props.handleInput}
                            type="text" 
                            placeholder="Name" 
                            name="name"
                        />

                        <br />
                        <br />

                        <input
                            value={props.user.email} 
                            onChange={props.handleInput}
                            type="email" 
                            placeholder="Email" 
                            name="email"
                        />

                        <br />
                        <br />

                        <input
                            value={props.user.password} 
                            onChange={props.handleInput}
                            type="password" 
                            placeholder="Password" 
                            name="password"
                        />

                        <br />
                        <br />

                        <input
                            value={props.user.retype} 
                            onChange={props.handleInput}
                            type="password" 
                            placeholder="Re-Type Password" 
                            name="retype"
                        />

                        <br />
                        <br />

                    </form>
                    <button 
                        type="submit" 
                        className={classes.Login}
                        onClick={props.PostData}
                    >
                        Signup
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
                            Already have an account?
                            <NavLink 
                                to="/user"
                                className={classes.anchor}
                            >
                                Signin
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

export default UserSignup;