import React from 'react';
import { NavLink } from 'react-router-dom';

import Aux from '../../HOC/Auxiliary';

import classes from './HomeNav.css';

const HomeNav = () =>{
    return(
        <Aux>
            <div className={classes.nav}>
                <ul>
                    <li className={classes.banner}>E-Voting</li>
                    <NavLink to="/admin">
                        <li className={classes.adminPanel}>Admin Panel</li>
                    </NavLink>
                    
                    <NavLink to="/user">
                        <li className={classes.userPanel}>User Panel</li>
                    </NavLink>
                </ul>
            </div>
        </Aux>
    )
}

export default HomeNav;