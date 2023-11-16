import React from 'react'
import RecipeApp from './components/RecipeApp/RecipeApp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeDetailRapper from './components/recipe-details/RecipeDetailRapper'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RecipeApp />} />
        <Route path='/recipes/:id' element={<RecipeDetailRapper />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App