import React from 'react'


import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'


//making it aware that we are using images
const logo = (props) =>(
    <div className = {classes.Logo}>
        {/* <img src = {burgerLogo} alt = "MyBurger"/> */}
    </div>


)

export default logo;