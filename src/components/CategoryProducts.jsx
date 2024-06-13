import { useParams } from 'react-router';
import React from 'react';
import {useAnimationGSAP} from '../context/AnimationGSAP'
import { AvailableDish } from './ProductSection';
import { useAvailableRecipes } from '../context/AvailableRecipes';


const CategoryProducts = () => {
    const params = useParams();
    const {recipes} = useAvailableRecipes();
    const [controlIndex, setControlIndex] = React.useState(0);
    const [isTooLong] = React.useState(params.category.split(' ').length >= 2); 

    const availables = recipes
      .filter(({category}) => category === params.category)
      .map((data, index) => {
        return <AvailableDish data={data} key={index} />
      })
      .filter((_, index) => index >= controlIndex && index < controlIndex + 9)

    return (
  
      <div className='w-full pb-32 relative z-10 bg-ash pt-8 sm:pt-0'>
  
          <div className='relative products-grid-container mx-auto mt-32 sm:mt-40 lg:mt-52 xl:mt-60'>
             {availables}
              <h2 className={`w-full text-wrap overflow-hidden select-none absolute bg-text -top-24 left-0 capitalize opacity-50 -z-10 text-brown title-font ${isTooLong ? "text-4xl xs:text-5xl lg:text-7xl xl:text-8xl" : "text-6xl xs:text-7xl lg:text-8xl xl:text-9xl"}  lg:-top-32  xl:-top-40 xl:-left-14 2xl:-left-24`}><span className='text-wrap'>{isTooLong ? (params.category).split(" ").slice(1).join(" ") : params.category}</span></h2>
           </div>    
      </div>
  
    )
  }

export default CategoryProducts;