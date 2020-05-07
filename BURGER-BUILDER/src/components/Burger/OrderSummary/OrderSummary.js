

import React from 'react';

import Button from '../../UI/Button/Button'
import Auxillary from '../../../hoc/Auxillary'
const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey =>{
        return(
            <li key = {ingredientKey}>
            <span style = {{textTransform:'capitalize'}}>{ingredientKey}</span>:{props.ingredients[ingredientKey]}
            </li>
            );
        
    } );
    return(
    <Auxillary>
        
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price:{props.price} </strong></p>
        <p>Continue to Checkout:</p>
        <Button btnType = "Danger" clicked = {props.purchaseCancelled}>Cancel</Button>
        <Button btnType = "Success" clicked = {props.purchaseContinued}>Continue</Button>
    </Auxillary>
);
}


export default orderSummary;