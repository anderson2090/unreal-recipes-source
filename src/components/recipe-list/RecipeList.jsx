import React from 'react'
import styles from './recipeList.module.css'
import DragonImage from '../../images/steak-f.png'
import Potion from '../../images/invisibility-potion.png'
import Cake from '../../images/unicorn-cake.png'
import Mermaid from '../../images/mermaid-f.png'
import Werewolf from '../../images/werewolf-burger-f.png'
import Vampire from '../../images/vampire-blood-wine-f.png'
import Recipe from '../recipe/Recipe'

const recipes = [
    { id: 1, name: 'Dragon Steak', subText: 'with Fire Sauce', image: DragonImage, buttonColor: 'red' },
    { id: 2, name: 'Invisibility Potion', subText: 'with Magic Herbs', image: Potion, buttonColor: 'blue' },
    { id: 3, name: 'Unicorn Cake', subText: 'with Magic Tea', image: Cake, buttonColor: 'red' },
    { id: 4, name: 'Mermaid Sushi', subText: 'with Seaweed Salad', image: Mermaid, buttonColor: 'blue' },
    { id: 5, name: 'Werewolf Burger', subText: 'with Miso Soup', image: Werewolf, buttonColor: 'red' },
    { id: 6, name: 'Vampire Blood Wine', subText: 'with Garlic Bread', image: Vampire, buttonColor: 'blue' },
]

const RecipeList = () => {
    return (
        <div className={styles.recipesContainer}>
            {
                recipes.map(r => <Recipe
                    key={r.id}
                    id={r.id}
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