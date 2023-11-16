import React from 'react'
import styles from './app.module.css'
import Heading from './components/heading/Heading'
import RecipeList from './components/recipe-list/RecipeList'
const App = () => {
  return (
    <>
      <Heading />
      <RecipeList />
    </>
  )
}

export default App