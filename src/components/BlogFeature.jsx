import React from 'react';
import haloHalo from '../assets/products/halo-halo.jpg';
import beefBroccoli from '../assets/products/beef-broccoli.jpg';
import quoteSign from '../assets/materials/quote-sign.png';

const BlogFeature = () => {

    return (
        <div className='blog-feature-section mt-32 flex flex-col items-center gap-8 lg:gap-20'>
            <span className='text-sm dark-shadow text-lightOrange p-3 px-8 rounded-full'>What's New?</span>

            <div className='flex flex-col-reverse gap-10 md:flex-row lg:gap-16'>
                <div className='flex flex-col gap-5 feature-blog-imgs xs:gap-10 sm:flex-row sm:gap-5 md:flex-col md:w-4/5 lg:gap-10 2xl:w-1/2'>
                <div className='relative md:flex-grow'>
                  <img className='w-full h-full object-cover border-2 border-pureWhite' src={haloHalo} alt='' />
                </div>
                
                <div className='relative  md:flex-grow'>
                  <img className='w-full h-full object-cover border-2 border-pureWhite' src={beefBroccoli} alt='' />
                </div>
                </div>

               <div className='flex flex-col gap-16 xs:gap-20 md:gap-10 md:flex-grow lg:gap-2 2xl:gap-0'>
                    
                <h2 className='title-font text-3xl text-center sm:text-5xl md:text-left md:text-5xl text-darkBrown md:pr-40 lg:text-6xl lg:flex-grow 2xl:flex-shrink 2xl:text-6xl 2xl:pt-10'>Featuring Product</h2>
                

                <div className='relative bg-lightOrange pt-16 p-5 text-pureWhite text-xs rounded-xl xxs:text-base xxs:p-7 xxs:pt-16  md:flex md:flex-col md:justify-end md:items-start lg:pt-24 lg:text-lg lg:p-9 lg:px-12 '>
                    <div className='text-xs left-4 right-4 p-5 px-7 bg-pureWhite absolute top-0 -translate-y-1/2 border border-lightOrange rounded-xl text-darkBrown xxs:left-auto xxs:w-2/3 xs:text-sm sm:w-52 lg:w-60 lg:text-base lg:p-7 2xl:w-80 2xl:pl-14 2xl:right-7'>
                        <img className='w-4 absolute top-2 left-2 2xl:top-3 2xl:left-3 2xl:w-6' src={quoteSign} alt='' />
                        <p>Pellentesque eget odio ullamcorper, aliquet risus non
                        </p>
                    </div>

                    <p className='leading-7 xs:leading-8 lg:leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio ullamcorper, aliquet risus non, lacinia arcu.
                    </p>
                    <button className='mt-5 button-scale-effect border border-pureWhite p-3 rounded-lg px-8 md:text-sm 2xl:text-base 2xl:mt-8'>READ MORE</button>
                </div>
               </div>

            </div>
        </div>
    )
}

export default BlogFeature;