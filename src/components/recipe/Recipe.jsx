import React from 'react'
import styles from './recipe.module.css'
import { Link } from 'react-router-dom'
const Recipe = ({ id, image, buttonText, buttonSubText, buttonColor }) => {
    return (
        <div className={styles.recipeContainer}>
            <img className={styles.recipeImage} src={image} alt={buttonText} />

            <Link
                to={`/recipes/${id}`}
                className={`${styles.button} ${buttonColor == 'red' && styles.redButton} 
            ${buttonColor == 'blue' && styles.blueButton}`}  >{buttonText}<br />
                <div className={styles.buttonSecondaryText}>{buttonSubText}</div>
            </Link>
        </div>
    )
}

export default Recipe