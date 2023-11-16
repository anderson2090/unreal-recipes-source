import React from 'react'
import { useParams } from 'react-router-dom'
import DragonSteak from '../../images/dragon-steak.jpg'
import DragonSteak2 from '../../images/dragon-steak2.jpg'
import Potion from '../../images/invisibility-potion.jpg'
import Potion2 from '../../images/invisibility-potion2.jpg'
import Cake from '../../images/unicorn-cake.jpg'
import Cake2 from '../../images/unicorn-cake2.jpg'
import Mermaid from '../../images/mermaid-sushi.jpeg'
import Mermaid2 from '../../images/mermaid-sushi2.jpeg'
import Werewolf from '../../images/werewolf-burger.jpeg'
import Werewolf2 from '../../images/werewolf-burger2.jpeg'
import Vampire from '../../images/vampire-blood.jpeg'
import Vampire2 from '../../images/vampire-blood2.jpeg'
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
    2: {
        name: 'Invisibility Potion',
        images: [Potion, Potion2],
        description: `Have you ever wished you could disappear from the world and sneak around without being seen? Well,
        now you
        can
        with this easy and fun recipe for invisibility potion! This potion is made with simple ingredients
        that you
        can find in your kitchen or garden, and it will make you invisible for up to an hour. Just be
        careful not
        to bump into anyone or anything while you're invisible, or you might reveal yourself!`,
        ingredients: [
            "1/4 cup of lemon juice",
            "1/4 cup of water",
            "2 tablespoons of honey",
            "A pinch of salt",
            "A handful of mint leaves",
            "A clove of garlic",
            "A drop of vanilla extract",
            "A strand of your hair"
        ],
        steps: [
            "In a small saucepan, bring the lemon juice and water to a boil over medium-high heat. Stir in the honey and salt until dissolved. Turn off the heat and let the mixture cool slightly.",
            "In a blender, combine the mint leaves, garlic, vanilla extract, and your hair. Blend until smooth and green.",
            "Pour the mint mixture into a glass jar with a lid. Add the lemon mixture and shake well to combine.",
            "Your invisibility potion is ready to use! Drink it quickly and enjoy your invisibility. To reverse the effect, drink a glass of milk or eat a piece of cheese."
        ]
    },

    3: {
        name: 'Unicorn Cake',
        images: [Cake, Cake2],
        description: `Do you love unicorns and rainbows? Do you want to make a cake that is as magical and colorful as your
        dreams?
        Then this recipe is for you! This cake is made with layers of vanilla cake, whipped cream, and
        rainbow
        sprinkles, topped with a unicorn horn and ears made of fondant. It's the perfect dessert for any
        occasion,
        whether it's a birthday, a party, or just a fun day at home. Follow these easy steps and you'll have
        a
        rainbowlicious unicorn cake in no time!`,
        ingredients: [
            "2 boxes of white cake mix",
            "2 cups of water",
            "2/3 cup of vegetable oil",
            "6 eggs",
            "Food coloring (red, orange, yellow, green, blue, and purple)",
            "2 cups of whipped cream",
            "1/4 cup of rainbow sprinkles",
            "1/4 cup of white fondant",
            "1/4 cup of pink fondant",
            "Edible glitter (optional)"
        ],
        steps: [
            "Preheat oven to 350°F. Grease and flour a 9x13 inch baking pan.",
            "In a large bowl, beat the cake mix, water, oil, and eggs with an electric mixer on low speed for 2 minutes, or until well blended.",
            "Divide the batter evenly into six small bowls. Add a few drops of food coloring to each bowl and stir well to get the colors of the rainbow: red, orange, yellow, green, blue, and purple.",
            "Pour the red batter into the prepared pan and spread it evenly. Carefully pour the orange batter over the red batter and spread it gently. Repeat with the yellow, green, blue, and purple batters, creating six layers of colors.",
            "Bake for 25 to 30 minutes, or until a toothpick inserted in the center comes out clean. Let the cake cool completely in the pan on a wire rack.",
            "Cut out a circle from the center of the cake, leaving a 2 inch border around the edges. Remove the circle and save it for later. You should have a ring-shaped cake now.",
            "Place the cake on a large serving plate. Spread the whipped cream evenly over the top and sides of the cake. Sprinkle the rainbow sprinkles over the whipped cream.",
            "To make the unicorn horn, roll out the white fondant into a long rope. Twist it into a spiral shape and insert a toothpick at the bottom. Stick the horn on top of the cake, in the center of the ring.",
            "To make the unicorn ears, cut out two triangles from the pink fondant. Pinch the bottom corners of each triangle and stick them on either side of the horn, using some water to glue them.",
            "To add some sparkle, sprinkle some edible glitter over the horn and ears. Your rainbowlicious unicorn cake is ready to serve and enjoy!"
        ]
    },
    4: {
        name: 'Mermaid Sushi',
        images: [Mermaid, Mermaid2],
        description: `Introducing the latest culinary marvel that's making a splash in the food scene: Mermaid Sushi! Picture this: a dazzling plate adorned with shimmering seaweed wraps, each roll filled with the finest underwater delights. Our skilled chefs have expertly crafted these sushi masterpieces using only the freshest seaweed, dolphin-safe tuna, and a hint of magic from the ocean depths.

        The star of the show? Sliced seashells, sourced ethically from well-groomed mermaid gardens, of course! These delicate morsels add a subtle crunch and a touch of whimsy to every bite. The rice is infused with the tears of jellyfish (don't worry, they cried happy tears), giving it a unique texture that dances on your taste buds.
        
        As you take your first bite, you might catch a glimpse of the mystical underwater world, or perhaps you'll just see the reflection of your own amazement in the glimmering fish-scale garnish. And fear not, each serving comes with a complimentary sea shanty to serenade your taste buds into a seafood symphony.
        
        So, dive into a world of flavor with Mermaid Sushi, where every bite is a salty adventure and every roll is a tail-flippin' good time! Just be sure to watch out for the mischievous seaweed tickling your taste buds – it's all part of the aquatic experience!
        
        `,
        ingredients: [
            "Fresh seaweed wraps",
            "Dolphin-safe tuna",
            "A hint of magic from the ocean depths",
            "Ethically sourced sliced seashells",
            "Rice infused with jellyfish tears",
            "Glimmering fish-scale garnish",
            "Complimentary sea shanty",
            "Mischievous seaweed for flavor tickles"
        ],

        steps: [
            "Lay out the fresh seaweed wraps on a clean, dry surface.",
            "Gently place a layer of dolphin-safe tuna along the length of each seaweed wrap.",
            "Sprinkle a hint of magic from the ocean depths over the tuna, ensuring an enchanting flavor profile.",
            "Carefully arrange the ethically sourced sliced seashells on top of the tuna, creating a visually stunning display.",
            "In a separate bowl, mix the rice with jellyfish tears, allowing the rice to absorb the mystical essence.",
            "Spread the jellyfish-tear-infused rice evenly over the tuna and seashell layer.",
            "Roll each seaweed wrap into a tight cylinder, encapsulating the oceanic goodness within.",
            "Slice the rolled sushi into bite-sized pieces, revealing the intricate layers of flavors.",
            "Garnish each piece with glimmering fish scales for an extra touch of underwater elegance.",
            "Before serving, prepare a sea shanty to serenade your guests into a whimsical dining experience.",
            "Watch out for the mischievous seaweed tickling your taste buds – it's all part of the fun!",
            "Present your Mermaid Sushi with flair and let the aquatic feast begin!"
        ]
    },
    5: {
        name: 'Werewolf Burger',
        images: [Werewolf, Werewolf2],
        description: `Sink your teeth into the wild side with our Werewolf Burger – the hair-raising creation that'll leave you howling for more! Picture a perfectly grilled patty, cooked to werewolf perfection under the light of a full moon. Each bite is a carnivore's delight, with a symphony of flavors that will awaken the beast within.

        Our secret sauce, a concoction of moonlit herbs and spices, adds a mysterious kick that dances on your taste buds like a midnight tango. Topped with smoky bacon strips that mimic the untamed wilderness, and a slice of cheese that melts over the patty like a cascade of moonlight.
        
        But what makes this burger truly howl-worthy? The buns! Baked with a touch of magic, these buns are soft as a werewolf's fur and have just the right amount of bite. Don't be surprised if you catch a glimpse of a werewolf silhouette in the sesame seeds – it's all part of the moonlit charm.
        
        Served with a side of crispy sweet potato fries that crunch like leaves under a werewolf's paws, the Werewolf Burger is not just a meal; it's a midnight feast that transforms your dining experience into a deliciously hair-raising adventure. Caution: You might start craving this burger every full moon!`,

        ingredients: [
            "Grilled werewolf-perfected patty",
            "Secret moonlit herb and spice sauce",
            "Smoky bacon strips",
            "Melty cheese slice",
            "Magic-infused, soft werewolf fur-like buns",
            "Sesame seeds with werewolf silhouette charm",
            "Crispy sweet potato fries"
        ],
        steps: [
            "Grill the werewolf-perfected patty to your desired level of moonlit perfection.",
            "Prepare the secret moonlit herb and spice sauce by combining the mystical ingredients in a bowl.",
            "Cook the smoky bacon strips until they mimic the untamed wilderness with a crispy texture.",
            "Melt the cheese slice over the grilled werewolf patty, creating a gooey, moonlit cascade.",
            "Bake the magic-infused, soft werewolf fur-like buns until they achieve the perfect amount of bite.",
            "Assemble the burger by placing the werewolf patty with melted cheese on the bun.",
            "Generously spread the secret sauce over the patty, ensuring a symphony of moonlit flavors.",
            "Top the burger with the crispy bacon strips, adding a smoky, untamed touch.",
            "Sprinkle sesame seeds over the assembled burger, capturing the essence of a werewolf silhouette.",
            "Serve the Werewolf Burger with a side of crispy sweet potato fries that crunch like leaves under a werewolf's paws.",
            "Enjoy the howl-worthy feast that transforms your dining experience into a deliciously hair-raising adventure!"
        ]
    },

    6: {
        name: "Vampire Blood Wine",
        images: [Vampire, Vampire2],
        description: "Unleash your inner immortal with the chillingly delightful Vampire Blood Wine. This crimson elixir is a bewitching blend that captures the essence of centuries-old vampiric sophistication.",
        ingredients: [
            "2 bottles of deep red wine",
            "1 cup of blackberry liqueur",
            "1/2 cup of pomegranate juice",
            "1/4 cup of cranberry juice",
            "Blood oranges for garnish",
            "A dash of magic (optional)"
        ],
        steps: [
            "In a large chilling cauldron, combine the deep red wine, blackberry liqueur, pomegranate juice, and cranberry juice.",
            "Stir the concoction with a silver spoon, infusing it with the mystique of the night.",
            "Allow the Vampire Blood Wine to chill in the cauldron for at least an hour, letting the flavors meld and intensify.",
            "When ready to serve, pour the blood-red elixir into gothic goblets, adding a dash of magic for an extra enchanting touch.",
            "Garnish each glass with blood oranges, creating a visually striking presentation.",
            "Sip the Vampire Blood Wine slowly, savoring the rich flavors and feeling the immortal spirit awaken within.",
            "Optional: Pair with dark chocolate or rare steaks for an indulgent, vampiric feast."
        ]
    }


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