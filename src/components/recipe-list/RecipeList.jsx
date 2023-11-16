import React from 'react'
import styles from './recipeList.module.css'
import DragonImage from '../../images/steak-f.png'
import Potion from '../../images/invisibility-potion.png'
import Cake from '../../images/unicorn-cake.png'
import Recipe from '../recipe/Recipe'

const recipes = [
    { id: 1, name: 'Dragon Steak', subText: 'with Fire Sauce', image: DragonImage, buttonColor: 'red' },
    { id: 2, name: 'Invisibility Potion', subText: 'with Magic Herbs', image: Potion, buttonColor: 'blue' },
    { id: 3, name: 'Unicorn Cake', subText: 'with Magic Tea', image: Cake, buttonColor: 'red' },
]

const RecipeList = () => {
    return (
        <div className={styles.recipesContainer}>
            {
                recipes.map(r => <Recipe
                    key={r.id}
                    image={r.image}
                    buttonText={r.name}
                    buttonSubText={r.subText}
                    buttonColor={r.buttonColor}
                />)
            }
            {/* <Recipe
                image={DragonImage}
                buttonText={"Dragon Steak"}
                buttonSubText={"with fire sauce"}
                buttonColor={'red'}
            /> */}

        </div>
    )
}

export default RecipeList