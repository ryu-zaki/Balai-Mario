import React from 'react';
import sampleProduct from '../assets/products/sample-product.jpg';
import heartIcon from '../assets/materials/heart-icon.png';
import BlogFeature from './BlogFeature';

const IndividualProduct = () => {


    React.useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <div className='px-5 py-10 relative inv-section overflow-hidden sm:px-16 md:px-10 2xl:px-14'>
          <p className='text-xs font text-lightOrange'>HOME / PRODUCTS / SPECIAL BULALO</p>

          <div className='flex flex-col inv-hero items-center gap-7 mt-7 md:flex-row md:justify-center md:gap-5 lg:gap-14 xl:items-start xl:gap-28 2xl:mt-10 2xl:gap-32'>
            <div className='w-full inv-img-wrapper relative flex items-center my-10 xs:justify-center xl:h-full xl:my-0 xl:items-start'>
            <img draggable={false} className='inv-main-img w-full h-full rounded-full border-2 border-pureWhite xl:border-4' alt='' src={sampleProduct} />
            </div>
             

             <div className='flex inv-main-desc flex-col gap-7 items-center text-center sm:gap-9 md:items-start md:text-left md:w-96 md:gap-7 2xl:gap-9'>
                <span className='dark-shadow py-3 px-8 rounded-full text-xs text-lightOrange'>STARTER</span>
                <h1 className='text-3xl font-semibold sm:text-4xl title-font md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>SPECIAL BULALO</h1>
                <nav className='flex inv-info-nav gap-6 text-sm sm:text-base md:text-sm lg:text-base'>
                    <a className='active' href='/'>Description</a>
                    <a href='/'>Ingredients</a>
                    <a href='/'>Nutrition</a>
                </nav>
                <p className='leading-7 text-sm sm:leading-8 sm:text-base md:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio ullamcorper, aliquet risus non, lacinia arcu.Peaxaxllentesque eget odio ullamcorper, aliquet risus non, lacinia arcu.
                </p>

               <div className='flex flex-col gap-8 items-center sm:flex-row sm:gap-14 md:flex-col md:items-start md:gap-7 xl:gap-8'>

               <div className='flex gap-5'>
                    <div className='flex gap-6 text-lightOrange rounded-full p-3 px-5 font-semibold bg-lighterOrange sm:text-lg md:text-sm lg:text-lg 2xl:gap-8'>
                        <span className='cursor-pointer'>+</span>
                        <span>1</span>
                        <span className='cursor-pointer'>-</span>
                    </div>

                    <div className='text-lightOrange flex gap-2 items-center sm:text-lg md:text-sm lg:text-lg'>
                        <img className='cursor-pointer select-none' draggable="false" alt='' src={heartIcon} />
                        <p>32</p>
                    </div>
                </div>

                <div className='flex text-xs gap-2 lg:text-sm 2xl:gap-6'>
                    <button className='bg-lightOrange p-3 px-6 text-pureWhite rounded-lg'>ADD TO DISH</button>
                    <button className='border border-lightOrange p-3 px-6 text-lightOrange rounded-lg'>ORDER NOW</button>
                </div>

               </div>
                
             </div>
          </div>

          {/* Suggested Recepis */}

          <SugggestedRecipes />
          <BlogFeature />
        </div>
    )
}

const SugggestedRecipes = () => {


    const Recipe = () => {

        return (
            <section className='inv-suggested-recipe relative max-w-44 sm:max-w-60 xl:max-w-72 2xl:max-w-80'>

                <div className='right-2 -top-5 translate-x-1/4 absolute bg-pureWhite border border-lightOrange p-2 px-3 rounded-xl pb-3 xs:p-3 xs:px-6 xl:px-9 xl:py-4'>
                    <h3 className='font-semibold xl:text-lg'>Special Bulalo</h3>
                    <div className='flex mt-1 items-center text-lightOrange font-semibold gap-1'>
                        <img className='w-4 lg:w-5' src={heartIcon} alt='' />
                        <span>32</span>
                    </div>

                    {/* Price */}
                    <p className='bg-lightOrange rounded-full text-pureWhite p-1 px-3 absolute bottom-0 translate-y-1/2 right-2'>$200.00</p>
                </div>

                <button className='bg-lightOrange text-pureWhite p-2 px-4 -bottom-2 border border-pureWhite absolute rounded-full sm:p-3 sm:px-6 sm:bottom-2 xl:px-9 xl:p-4'>Order now</button>
              
            </section>
        )

    }


    return (
        <div className='mt-32'>
            
            <div className='flex flex-col items-center gap-5'>
                <span className='text-sm dark-shadow text-lightOrange p-3 px-8 rounded-full'>RECOMMENDATIONS</span>
                <h2 className='text-3xl title-font responsive-title font-semibold mt-7'>Suggested Recipes</h2>
            </div>

            <div className='suggested-recipes mt-16 flex flex-wrap justify-center gap-5 gap-y-16 xs:gap-y-20 xs:gap-7 sm:gap-10 sm:gap-y-20 sm:mt-20 lg:gap-16 xl:gap-20 xl:mt-32'>
               <Recipe />
               <Recipe />
               <Recipe />
            </div>

        </div>
    )
}


export default IndividualProduct;

