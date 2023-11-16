import React from 'react'
import styles from './recipe.module.css'
const Recipe = ({ image, buttonText, buttonSubText, buttonColor }) => {
    return (
        <div className={styles.recipeContainer}>
            <img src={image} alt={buttonText} />
            <a className={`${styles.button} ${buttonColor == 'red' && styles.redButton} 
            ${buttonColor == 'blue' && styles.blueButton}`}  >{buttonText}<br />
                <div className={styles.buttonSecondaryText}>{buttonSubText}</div>
            </a>
        </div>
    )
}

export default Recipe