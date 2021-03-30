import React from 'react'
import './Recipe.css';
export default function Recipe(props) {
    const style ={
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <div style={style}>
            <h1>{props.title}</h1>
            <h4>Callories : {props.callories.toFixed(2)}</h4>
            {/* <img src={props.image} alt="image"/> */}
            <div className="ingredient">
               <p>Ingredients</p>
               <ol>{props.ingredients.map((ing, id) =>(
                   <li key = {id}>{ing.text}</li>
               ))}
               </ol>
            </div>
        </div>
    )
}
