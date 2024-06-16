import { useParams } from 'react-router';
import React from 'react';
import {useAnimationGSAP} from '../context/AnimationGSAP'
import { AvailableDish } from './ProductSection';
import { useAvailableRecipes } from '../context/AvailableRecipes';
import { scroller } from 'react-scroll';

export const divideArr = (arr, numChunks) => {

  const newArr = [];

  for (let i = 0; i < arr.length; i += numChunks) {

    newArr.push(arr.slice(i, numChunks + i));

  }

  return newArr;

}

const CategoryProducts = () => {
    const params = useParams();
    const {bgTextRef} = useAnimationGSAP();
    const {recipes, invUserProInfo} = useAvailableRecipes();
    const [controlIndex, setControlIndex] = React.useState(0);
    const [isTooLong, setIsTooLong] = React.useState(params.category.split(' ').length >= 2); 
    const [slideNum, setSlideNum] = React.useState(1);

    const [availables, setAvailables] = React.useState([]);
    

      React.useEffect(() => {
        setIsTooLong(params.category.split(' ').length >= 2);
      }, [params]);

      React.useEffect(() => {
        setAvailables(() => {
          const filtered = recipes
          .filter(({category}) => category === params.category)
          .map((data, index) => {
            return <AvailableDish invInfo={invUserProInfo[index]} data={data} key={index} />
          });

          return divideArr(filtered, 9);

        })
        console.log(controlIndex);
      }, [recipes, controlIndex]);

      const handleNext = () => {
        setControlIndex(prev => prev + 1 >= availables.length ? prev : prev + 1 );
        scroller.scrollTo('available-recipe');

       
      }

      const handlePrev = () => {
        setControlIndex(prev => !prev ? 0 : prev - 1 );
        scroller.scrollTo('available-recipe');
      }

     
    return (
      <>

      <div className='w-full pb-32 relative z-10 bg-ash pt-8 sm:pt-0'>
          
          <div className='relative items-start products-grid-container mx-auto mt-32 sm:mt-40 lg:mt-52 xl:mt-60'>
             {availables[controlIndex]}

              <h2 ref={bgTextRef} className={`w-fit whitespace-nowrap text-nowrap overflow-hidden select-none absolute bg-text -top-24 left-0 capitalize opacity-50 -z-10 text-brown title-font ${params.category.split(" ").length >= 3 ? "-top-32 sm:-top-24 text-3xl xs:text-5xl lg:text-6xl xl:text-7xl" : isTooLong ? "text-4xl xs:text-6xl lg:text-7xl xl:text-8xl" :  "text-6xl xs:text-7xl lg:text-8xl xl:text-9xl"}  lg:-top-32  xl:-top-40 xl:-left-14 2xl:-left-24`}><span className='text-wrap'>{params.category}</span></h2>
           </div> 

           <div className='flex items-center px-5 mt-14 carousel-control justify-between xs:px-0 sm:px-6 lg:mt-20'>
           <div className='text-pureWhite text-xs flex gap-3 z-30 sm:text-sm'>
             <button onClick={handlePrev} className={`${!controlIndex ? "bg-lightGray cursor-not-allowed" : "bg-lightOrange"} py-2 px-6 rounded-lg border border-pureWhite lg:py-3 lg:py-3`}>Previous</button>
             
             <button onClick={handleNext} className={`${controlIndex + 1 >= availables.length ? "bg-lightGray cursor-not-allowed" : "bg-lightOrange"} py-2 px-6 rounded-lg border border-pureWhitelg:py-3 lg:px-8`}>Next</button>
           </div> 

           <p className='font-semibold flex gap-2 text-sm sm:text-base'><span>{controlIndex + 1}</span>of<span>{availables.length}</span></p>  
           </div>
           
      </div>

      </>
  
    )
  }

export default CategoryProducts;