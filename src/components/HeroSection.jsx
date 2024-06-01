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
            <h1 className='hero-title px-5 title-font mb-8 lg:mb-0 lg:px-0'>Gourmet Delights in an Elegant Setting</h1>
            <div className='relative mx-auto hero-img lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 xl:right-0'>
              <MessageModal 
                message={<>You deserve more than just a meal—you deserve a feast.&#128151;&#128151;</>}
                trianglePos={"bottom-0 right-2"} 
                position={"-left-10 top-2  lg:top-5 lg:-left-14"} />

              <MessageModal 
                message={<>Elevate your dining experience with us today!&#128525;</>}
                trianglePos={"bottom-0 left-2"} 
                position={"-right-10 bottom-24 xs:bottom-28 lg:bottom-40  lg:-right-14 xl:bottom-60 xl:-right-10"} />
              
              <div className='hero-main-pic relative w-full aspect-1 rounded-full overflow-hidden'>
                <img draggable={false} className='select-none absolute inset-0 h-full w-full  object-cover'  src={mainPic} alt='' />
                <div className='absolute inset-0 bg-imgOverlay'></div>
              </div>
              
              
              <div className='absolute w-1/2 -bottom-3 -left-4 rounded-full'>

                <div className='w-full border-pureWhite border-2 hero-food-1 aspect-1 rounded-full relative overflow-hidden'>
                  <img draggable={false} className='select-none object-cover w-full h-full absolute inset-0' src={food1} alt='' />
                  <div className='absolute inset-0 bg-imgOverlay'></div>
                </div>
               

                <div className='hero-food-2 absolute overflow-hidden aspect-1 w-4/5 border-pureWhite border-2 bottom-0 translate-x-1/2 -right-3 rounded-full'>
                <img draggable={false} className=' select-none w-full h-full object-cover absolute inset-0'  src={food2} alt='' />
                <div className='absolute inset-0 bg-imgOverlay'></div>
                </div>
                
              </div>

            </div>
          </div>

          <p className='leading-9 text-sm sm:text-base lg:pr-20 xl:text-lg xl:leading-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio ullamcorper, aliquet risus non, lacinia arcu. </p>

          <div className='flex gap-7 flex-col items-center hero-btns lg:flex-row xl:mt-5'>
            <button className='text-xs bg-lightOrange text-pureWhite p-4 px-9 rounded-full sm:text-sm'>EXPLORE OFFERS</button>
            <button className='flex items-center gap-2 text-sm'><span>Visit Facebook Page</span><img className='w-3' src={chevronRight} alt='' /></button>
          </div>

          <div>

          </div>
        </div>
        </div>
        </div>
    )
}

const MessageModal = ({position, trianglePos, message}) => {
   
  return (
    <div className={`absolute ${position} text-darkBrown scale-75 z-20 p-2 bg-pureWhite border-lightOrange w-1/2 max-w-52 border rounded-xl message-modal xxs:p-3 lg:p-4 lg:scale-100 xl:p-5`}>
       
       <h3 className='font-semibold'>{message}</h3>

      <div className={`triangle absolute ${trianglePos} translate-y-full`}>
      </div>
    </div>
  )
} 

export default HeroSection;