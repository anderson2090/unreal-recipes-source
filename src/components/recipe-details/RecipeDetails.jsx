import React from 'react'
import styles from './recipe-details.module.css'
import Heading from '../heading/Heading'
import { Link } from 'react-router-dom'
const RecipeDetails = ({ data }) => {
    return (
        <>
            <Heading/>
            {data.images.map(i => <img className={styles.recipeDetailImage} src={i} />)}
            <h1>{data.name}</h1>
            <h2>Description</h2>
            <p>{data.description}</p>
            <div className={styles.ingredientsContainer}>
                <h3>Ingredients</h3>
                <ol>
                    {data.ingredients.map(i => <li>{i}</li>)}
                </ol>
            </div>
            <div className={styles.stepsContainer}>
                <h3>Steps</h3>
                <ul>
                    {data.steps.map(s => <li>{s}</li>)}
                </ul>
            </div>
        </>
    )
}

export default RecipeDetails