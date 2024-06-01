import React from 'react';

/* Services Icons */
import qualityFood from '../assets/materials/quality-food.png';
import ingredients from '../assets/materials/ingredients.png';
import customerService from '../assets/materials/customer-service.png';
import affordable from '../assets/materials/money-dark.png';
import amazingPlace from '../assets/materials/place-dark.png';

import serving from '../assets/business_assets/servicing.jpg';

const ServicesSection = () => {


    const ServiceBox = ({category, imgSrc, isSeperated}) => {

        return (
            <div className={`flex items-center gap-7 flex-col xs:flex-row xs:items-start`}>
 
              <div className={`mt-3 min-w-14 h-14 ${!!isSeperated && "bg-pureWhite border  p-3 rounded-full"} xl:min-w-16 xl:h-auto`}>
                <img draggable={false} className={`w-full h-full object-cover`} src={imgSrc} alt='' />
              </div>
                
              <div className='flex flex-col items-center text-center xs:items-start xs:text-left'>
                  <h3 className={`text-xl relative service-title  w-fit font-semibold sm:text-2xl lg:text-xl xl:text-2xl ${!!isSeperated ? "mb-3" : "mb-7"}`}>{category}</h3>
                  <p className='text-xs xxs:text-sm leading-8 sm:text-base sm:leading-8 lg:text-sm xl:text-base xl:leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas d  eu felis iaculis. </p>
              </div>
             </div>
        )
    }


    return (
        <div className='text-darkBrown'>

            <div className='text-center mb-10 sm:mb-20 lg:mb-28'>
                <span className='text-sm mb-3'>FEATURES</span>
                <h2 className='title-font responsive-title'>What to Expect</h2>
            </div>

            <div className='flex relative flex-col gap-32 sm:gap-52 lg:flex-row lg:gap-10 lg:items-start xl:gap-6'>

               

                <div className='flex flex-col gap-10 sm:px-14 sm:gap-16 lg:gap-14 xl:px-16'>
                    {/* Box */}
                     <ServiceBox category={"Quality Food"} imgSrc={qualityFood} />
                     <ServiceBox category={"Ingredients"} imgSrc={ingredients} />
                     <ServiceBox category={"Customer Service"} imgSrc={customerService} />
                       
                    {/* Box */}
                </div>

                <div className='seperated-feature flex flex-col gap-10 pl-10 text-pureWhite relative pt-24 pb-10 sm:gap-16 sm:pt-32 sm:pb-20 sm:px-14 lg:px-14 lg:pt-24 lg:pb-10 xl:pt-32'>

                  
                  {/* Overlay */}
               <div className='feature-overlay -z-10 absolute bg-lightOrange bottom-0 -right-7 xl:-right-16'>
                 
                 {/* Picture */}
                 <div className='absolute -translate-y-1/2 bg-pureWhite border-lightOrange border'>
                    <img className='w-full h-full object-cover' src={serving} alt=''/>
                 </div>

               </div>


                  <ServiceBox isSeperated={true} category={"Affordable"} imgSrc={affordable} />
                  <ServiceBox isSeperated={true} category={"Amazing Place"} imgSrc={amazingPlace} />
                </div>
            </div>

        </div>
    )
}

export default ServicesSection;