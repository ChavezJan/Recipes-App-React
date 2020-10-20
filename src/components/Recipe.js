import React from 'react';
import style from '../assets/style/recipe.module.css';



const Recipe = ({ title, calories, image, ingredients }) => {
    
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>{calories}</p>
            <img className={style.image} src={image} alt=''></img>
        </div>
    );
}

export default Recipe;