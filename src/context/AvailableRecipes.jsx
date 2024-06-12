import React, { createContext, useContext, useRef } from 'react';
import { availRecipes, availCategories } from '../info/RecipesInfo';


const ComponentContext = createContext(null);

const AvailableRecipes = ({children}) => {
    
    const [categories, setCategories] = React.useState(availCategories);
    const [recipes, setRecipes] = React.useState(availRecipes);

    return (
        <ComponentContext.Provider value={{recipes, categories}}>
          {children}
        </ComponentContext.Provider>
    )
}

export const useAvailableRecipes = () => {
  return useContext(ComponentContext);
}

export default AvailableRecipes;