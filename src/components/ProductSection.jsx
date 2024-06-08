import React, { useRef } from  'react';
import NavBar from './NavBar';
import heroImg from '../assets/business_assets/hero-img-product.jpg';
import seachIcon from '../assets/materials/search-icon.png'
import sampleProduct from '../assets/products/sample-product.jpg';
import heartIcon from '../assets/materials/heart-icon.png';
import starFill from '../assets/materials/star-fill.png';
import { useAnimationGSAP } from '../context/AnimationGSAP';

const ProductSection = () => {

    const {productSecMarkerRef, bgTextRef, bgTextBottomRef} = useAnimationGSAP();
    
    
    
    return (
        <div> 
            <div className='text-darkBrown product-section-hero relative '>
              <NavBar />
              <div className='px-7 xl:px-14'>

              {/* Background Image */}
              <img loading='lazy' className='product-sec-bg object-cover -z-20 absolute inset-0 w-full h-full' src={heroImg} alt="" />

              {/* Description */}
              <div className='absolute inset-0 text-pureWhite flex z-10 flex-col justify-center items-center px-4 text-center w-full h-full gap-2'>
                <div className='product-sec-title relative'>
                    <h3 className='overflow-hidden text-3xl title-font xs:text-4xl sm:text-6xl lg:text-7xl'><span className='inline-block title-font'>Balai Mario's Menu</span></h3>
                </div>
                 
                 <div className='product-sec-sub overflow-hidden text-xs xs:text-sm sm:text-base xl:text-lg'><p className='block'>You have <b>700</b> recipes to explore!</p></div>

                {/* <div className='product-search-con w-11/12 mt-10 h-10 z-20 rounded-full relative overflow-hidden text-darkBrown text-sm flex items-center xs:h-12 lg:h-14'>
                    <input className='border-0 outline-0  absolute p-3 pr-10 inset-0 lg:text-base lg:p-5 lg:pr-14' id="product-search" placeholder='Search Product' />
                    <img className='absolute right-3 w-5 lg:w-7 lg:right-5' src={seachIcon} alt='' /> 
                </div> */}

              </div>

              {/* Marker at the bottom */}
              <span ref={productSecMarkerRef} className='absolute text-center bottom-0 p-3 px-4 z-20 rounded-full left-1/2 bg-lightOrange text-pureWhite -translate-x-1/2 translate-y-1/2 text-xs xxs:text-sm xs:px-6 lg:text-base'>Satisfy your Cravings</span>
            </div>
            </div>

            {/* Products Grid */}
            <div className='w-full pb-32 relative z-10 bg-ash pt-28 lg:pt-40 xl:pt-20'>

                <NavigationFilter mobileVer={true} />

                <div className='w-full nav-filter-con relative z-10 flex gap-6 flex-col justify-center items-center md:flex-row md:sticky md:top-6 md:mx-auto xl:gap-10'>
                <NavigationFilter mobileVer={false} />

                <div className='product-search-con border border-lightOrange w-11/12 h-10 z-20 rounded-full relative overflow-hidden text-darkBrown text-sm flex items-center xs:h-12 md:w-1/3 lg:h-14'>
                    <input className='border-0 outline-0  absolute p-3 pr-10 inset-0 lg:text-base lg:p-5 lg:pr-14' id="product-search" placeholder='Search Product' />
                    <img className='absolute right-3 w-5 lg:w-7 lg:right-5' src={seachIcon} alt='' /> 
                </div>

                </div>

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
                  <h2 ref={bgTextRef} className='select-none absolute bg-text -top-24 left-0 opacity-50 -z-10 text-brown title-font text-6xl xs:text-7xl lg:-top-32 lg:text-8xl xl:text-9xl xl:-top-40 xl:-left-14 2xl:-left-24'>Balai Mario</h2>


                  {/* <h2 ref={bgTextBottomRef} className='absolute bottom-52 right-0 bg-text-bottom opacity-50 -z-10 text-brown title-font text-6xl xs:text-7xl lg:text-8xl lg:bottom-64 lg:-right-14 xl:text-9xl xl:bottom-80 2xl:-right-24'>Balai Mario</h2> */}
                </div>
                
            </div>
            
        </div>
    )
}


const AvailableDish = () => {

    return (
        <div className='dark-shadow bg-pureWhite dish-box relative p-3 pt-16 flex flex-col items-center justify-end xs:p-4 xs:pt-16 lg:pt-24 lg:p-5 xl:pt-28 xl:p-6'>
            <img draggable={false} className='border-4 border-pureWhite w-2/3 select-none -translate-y-1/2 rounded-full absolute top-0 aspect-1 max-w-24 lg:max-w-32 xl:max-w-40' src={sampleProduct} alt='' />
            <div className='w-full flex flex-col gap-3 xl:gap-5'>
                <div className='flex justify-between gap-1 items-center'>
                  <h3 className='text-xs font-semibold xs:text-sm lg:text-lg xl:text-xl'>Special Bulalo</h3>
                  <div className='flex gap-1 text-xs items-center text-lightOrange font-semibold lg:text-sm'>
                    <img draggable={false} className='w-4 select-none cursor-pointer xs:w-5 lg:w-7' src={heartIcon} alt='' />
                    <p>32</p>
                  </div>
                </div>
                
                <div className='flex items-center text-xs justify-between lg:text-sm xl:text-base'>
                    <span className='text-lightOrange font-semibold'>$200.00</span>
                    {/* <div className='flex xs:gap-1'>
                      <img draggable={false} className='w-3 lg:w-4 xl:w-5' src={starFill} alt="" />
                      <img draggable={false} className='w-3 lg:w-4 xl:w-5' src={starFill} alt="" />
                      <img draggable={false} className='w-3 lg:w-4 xl:w-5' src={starFill} alt="" />
                      <img draggable={false} className='w-3 lg:w-4 xl:w-5' src={starFill} alt="" />
                      <img draggable={false} className='w-3 lg:w-4 xl:w-5' src={starFill} alt="" />
                    </div> */}

                    <div className='flex items-center text-xs gap-2 lg:text-sm lg:gap-3 xl:text-base xl:gap-4'>
                      <p className='border-lightOrange border rounded-full cursor-pointer px-2'>+</p>
                      <p className='text-darkBrown font-semibold'>1</p>
                      <p className='border-lightOrange border rounded-full cursor-pointer px-2'>-</p>
                    </div>
                   
                </div>
                
                <div className='w-full gap-2 mt-3 flex flex-col items-stretch justify-between lg:flex-row'>
                  <button className='flex-grow text-pureWhite text-xs bg-lightOrange p-2 rounded-lg lg:text-xs lg:p-3 xl:p-4 xl:rounded-xl'>ADD TO DISH</button>

                  <button className='flex-grow text-lightOrange border-lightOrange border text-xs p-2 rounded-lg lg:text-xs lg:p-3 xl:p-4 xl:rounded-xl'>DETAILS</button>
                </div>
                
            </div>
            </div>
    )
}


const NavigationFilter = ({mobileVer}) => {

  return (
     <nav className={`${!!mobileVer ? "mx-auto mb-7 md:hidden" : "hidden md:block"} sticky top-6 dark-shadow relative bg-pureWhite overflow-hidden products-menu w-fit flex text-xs justify-between z-20 rounded-full xs:text-sm lg:text-base`}>
          <button>All</button>
          <button>Starter</button>
          <button>Vegetarian</button>
          <button className='active'>Chicken</button>
          <div className='absolute rounded-full top-1 bottom-1 bg-lightOrange -z-10'></div>
      </nav>
  )
}

export default ProductSection;