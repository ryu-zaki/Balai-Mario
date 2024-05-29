import React from 'react';
import mainPic from '../assets/business_assets/main-img.jpg';
import food1 from '../assets/business_assets/food-img1.png';
import food2 from '../assets/business_assets/food-img2.jpg';
import chevronRight from '../assets/materials/chevron-right.png';
import CustomerIcon from '../assets/materials/customer-icon.jpg';
import StarFill from '../assets/materials/star-fill.png';

const HeroSection = () => {

    return (
      <div className='w-full flex justify-start relative lg:mt-10 xl:mt-0' >
        <div className='flex relative mx-auto text-center items-center text-darkBrown hero-section  lg:text-left '>
          <div  className='hero-description flex flex-col gap-10 lg:gap-7 lg:items-start'>
          <div>
            <h1 className='hero-title title-font mb-8 lg:mb-0'>Gourmet Delights in an Elegant Setting</h1>
            <div className='relative mx-auto hero-img lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 xl:right-0'>
              <MessageModal trianglePos={"bottom-0 right-2"} position={"-left-10 top-2 lg:-top-2 lg:-left-2"} />
              <MessageModal trianglePos={"bottom-0 left-2"} position={"-right-14 bottom-24 lg:bottom-40 lg:-right-6 xl:bottom-52"} />
              
              <div className='relative w-full aspect-1 rounded-full overflow-hidden'>
                <img draggable={false} className='select-none absolute inset-0 h-full w-full  object-cover'  src={mainPic} alt='' />
                <div className='absolute inset-0 bg-imgOverlay'></div>
              </div>
              
              
              <div className='absolute w-1/2 -bottom-3 -left-4 rounded-full'>

                <div className='w-full border-pureWhite border-2 aspect-1 rounded-full relative overflow-hidden'>
                  <img draggable={false} className='select-none object-cover w-full h-full absolute inset-0' src={food1} alt='' />
                  <div className='absolute inset-0 bg-imgOverlay'></div>
                </div>
               

                <div className='absolute overflow-hidden aspect-1 w-4/5 border-pureWhite border-2 bottom-0 translate-x-1/2 -right-3 rounded-full'>
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
        </div>
    )
}

const MessageModal = ({position, trianglePos}) => {
   
  return (
    <div className={`absolute ${position} scale-75 z-20 p-3 bg-pureWhite border-lightOrange border rounded-lg message-modal lg:scale-100`}>
      <div className='flex items-center gap-4'>

      <img className='rounded-full w-7 xl:w-8' src={CustomerIcon} alt='' />
      <div className='text-left'>
         <h3 className='font-bold xl:text-sm'>Jhonwell Espanola</h3>
         <span className='xl:text-sm'>Balai Mario's Customer</span>
      </div>

      </div>
      

      <div className='flex gap-2 items-center mt-2 pl-4'>
          <img className='w-3 xl:w-4' src={StarFill} alt='' />
          <img className='w-3 xl:w-4' src={StarFill} alt='' />
          <img className='w-3 xl:w-4' src={StarFill} alt='' />
          <img className='w-3 xl:w-4' src={StarFill} alt='' />
          <img className='w-3 xl:w-4' src={StarFill} alt='' />
         </div>

      <div className={`triangle absolute ${trianglePos} translate-y-full`}>
      </div>
    </div>
  )
} 

export default HeroSection;