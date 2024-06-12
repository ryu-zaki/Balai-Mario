import { useParams } from 'react-router';
import {useAnimationGSAP} from '../context/AnimationGSAP'
import { AvailableDish } from './ProductSection';

const CategoryProducts = () => {

    const {bgTextRef} = useAnimationGSAP();
    const params = useParams();
    console.log(params)

    return (
  
      <div className='w-full pb-32 relative z-10 bg-ash pt-8 sm:pt-0'>
  
          <div className='relative products-grid-container mx-auto mt-32 sm:mt-40 lg:mt-52 xl:mt-60'>
              <AvailableDish />
              <AvailableDish />
              <AvailableDish />
              <AvailableDish />
              <AvailableDish />
              <AvailableDish />
              <AvailableDish />
              <AvailableDish />
              <AvailableDish />
              <h2 ref={bgTextRef} className='select-none absolute bg-text -top-24 left-0 capitalize opacity-50 -z-10 text-brown title-font text-6xl xs:text-7xl lg:-top-32 lg:text-8xl xl:text-9xl xl:-top-40 xl:-left-14 2xl:-left-24'>{params.category}</h2>
           </div>    
      </div>
  
    )
  }

export default CategoryProducts;