import React from 'react';
import mainPic from '../assets/business_assets/main-img.jpg';
import food1 from '../assets/business_assets/food-img1.png';
import food2 from '../assets/business_assets/food-img2.jpg';
import chevronRight from '../assets/materials/chevron-right.png'

const HeroSection = () => {

    return (
      <div className='w-full flex justify-start relative xl:static'>
        <div className='flex flex-col gap-10 mx-auto text-center items-center text-darkBrown hero-section lg:items-start lg:mx-0 lg:text-left lg:gap-7 xl:justify-center xl:gap-9'>
          <div>
            <h1 className='hero-title title-font mb-8 lg:mb-0'>Gourmet Delights in an Elegant Setting</h1>
            <div className='relative mx-auto hero-img lg:absolute lg:right-0 lg:top-0 xl:-top-20 xl:translate-x-1/3'>
              <div className='relative w-full aspect-1 rounded-full overflow-hidden'>
                <img draggable={false} className='select-none absolute inset-0 h-full w-full  object-cover'  src={mainPic} alt='' />
                <div className='absolute inset-0 bg-imgOverlay'></div>
              </div>
              
              
              <div className='absolute w-1/2 -bottom-3 -left-4 rounded-full xl:w-1/3 xl:bottom-52 xl:-left-24'>

                <div className='w-full border-pureWhite border-2 aspect-1 rounded-full relative overflow-hidden'>
                  <img draggable={false} className='select-none object-cover w-full h-full absolute inset-0' src={food1} alt='' />
                  <div className='absolute inset-0 bg-imgOverlay'></div>
                </div>
               

                <div className='absolute overflow-hidden aspect-1 w-4/5 border-pureWhite border-2 bottom-0 translate-x-1/2 -right-3 rounded-full xl:w-2/3 xl:-bottom-8'>
                <img draggable={false} className=' select-none w-full h-full object-cover absolute inset-0'  src={food2} alt='' />
                <div className='absolute inset-0 bg-imgOverlay'></div>
                </div>
                
              </div>

              
            </div>
          </div>

          <p className='leading-9 lg:pr-20 xl:text-lg xl:leading-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio ullamcorper, aliquet risus non, lacinia arcu. </p>

          <div className='flex gap-7 flex-col items-center lg:flex-row xl:mt-5'>
            <button className='text-lg bg-lightOrange text-pureWhite p-4 px-9 rounded-full lg:text-sm'>EXPLORE OFFERS</button>
            <button className='flex items-center gap-2'><span>Visit Facebook Page</span><img className='w-3' src={chevronRight} alt='' /></button>
          </div>

          <div>

          </div>
        </div>
        </div>
    )
}

export default HeroSection;