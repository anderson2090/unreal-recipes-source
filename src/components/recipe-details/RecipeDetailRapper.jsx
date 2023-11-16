import React from 'react'
import { useParams } from 'react-router-dom'
import DragonSteak from '../../images/dragon-steak.jpg'
import DragonSteak2 from '../../images/dragon-steak2.jpg'
import RecipeDetails from './RecipeDetails'
import NotFound from '../not-found/NotFound'

const data = {
    1: {
        name: 'Dragon Steak',
        images: [DragonSteak, DragonSteak2],
        description: `If you are looking for a spicy and exotic meal, look no further than dragon steak with fire sauce.
    This dish
    is
    made from the finest dragon meat, marinated in dragon blood and baked to perfection. The fire sauce
    is a
    fiery concoction of dragon fire, butter, cream, and a pinch of magic dust. This dish will make you
    feel like
    a true wizard, as you enjoy the tender and juicy meat with the explosive and creamy sauce. Be
    warned,
    though, this dish is not for the faint of heart. You may need a fire extinguisher or a cooling spell
    to
    handle the heat. 🔥`,
        ingredients: [
            "1 kg of dragon meat, preferably from the tail or the wings",
            "2 tablespoons of dragon blood",
            "1/4 cup of dragon fire, or any other flammable liquid",
            "Salt, pepper, garlic, and herbs to taste",
            "1/4 cup of butter",
            "2 tablespoons of flour",
            "1/4 cup of water",
            "1/4 cup of cream",
            "A pinch of magic dust, optional"
        ],
        steps: [
            "Preheat your oven to 200°C. Season the dragon meat with salt, pepper, garlic, and herbs. Place it in a baking dish and drizzle with dragon blood. Bake for 45 minutes or until the meat is tender and juicy.",
            "In a small saucepan, heat the dragon fire over medium-high heat. Be careful not to burn yourself or set anything on fire. Bring it to a boil and then reduce the heat to simmer. Cook until it is reduced by half, about 15 minutes.",
            "In another saucepan, melt the butter over low heat. Whisk in the flour and cook for a few minutes, stirring constantly. Gradually whisk in the water and the cream. Season with salt, pepper, and magic dust if using. Cook until the sauce is thick and smooth, about 10 minutes.",
            "To serve, slice the dragon steak and pour the fire sauce over it. Enjoy with a glass of chilled dragon milk or a potion of your choice. Bon appétit!"
        ]
    },
}

const dataKeys = Object.keys(data)
const dataLength = dataKeys.length

const RecipeDetailRapper = () => {
    const { id } = useParams()
    return (
        <>
            {id > dataLength ? <NotFound /> : <RecipeDetails data={data[id]} />}

        </>
    )
}

export default RecipeDetailRapper