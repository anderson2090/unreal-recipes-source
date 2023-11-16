import React from 'react'
import RecipeApp from './components/RecipeApp/RecipeApp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeDetailRapper from './components/recipe-details/RecipeDetailRapper'
import NotFound from './components/not-found/NotFound'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RecipeApp />} />
        <Route path='/recipes/:id' element={<RecipeDetailRapper />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App