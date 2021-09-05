import React from 'react';
import Aux from '../../HOC/Auxiliary';
import HomeNav from '../../Ui/Navigation/HomeNav';

import Vote from '../../Assets/Images/e-vote.jpg';

import Features from './Features';

import './indexPage.css'
import Footer from '../../Ui/Footer/Pages/Footer';

const indexpage = () =>{
    return(
        <Aux>
            <HomeNav />
            <img src={Vote} alt="voting" />
            <Features />
            <Footer />
        </Aux>
    )
}
export default indexpage;