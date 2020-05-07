

import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
//imports a couple of string with class names and we assign below.
const toolbar = (props) =>(
    <header className = {classes.Toolbar}>
        <div>MENU</div>
        <div><Logo/></div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;