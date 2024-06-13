import React, { useRef } from  'react';
import NavBar from './NavBar';
import heroImg from '../assets/business_assets/hero-img-product.jpg';
import seachIcon from '../assets/materials/search-icon.png';
import chevronIcon from '../assets/materials/chevron-right.png';
import sampleProduct from '../assets/products/sample-product.jpg';
import heartIcon from '../assets/materials/heart-icon.png';
import starFill from '../assets/materials/star-fill.png';
import { useAnimationGSAP } from '../context/AnimationGSAP';
import { Outlet, useNavigate } from 'react-router';
import { Element } from 'react-scroll';

const ProductSection = () => {

    const {productSecMarkerRef} = useAnimationGSAP();
    
    
    
    return (
        <div className='product-section'> 
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

              </div>

              {/* Marker at the bottom */}
              <span ref={productSecMarkerRef} className='absolute text-center bottom-0 p-3 px-4 z-20 rounded-full left-1/2 bg-lightOrange text-pureWhite -translate-x-1/2 translate-y-1/2 text-xs xxs:text-sm xs:px-6 lg:text-base'>Satisfy your Cravings</span>

              {/* Carousel Loop */}
            </div>
            </div>

            <div className='pt-16 z-10 relative categories-loop bg-pureWhite overflow-hidden whitespace-nowrap pb-6 sm:pb-10'>

                <div className='categories-wrapper title-font'>
                  <h3>Starter</h3>
                  <h3>Vegetarian</h3>
                  <h3>Chicken</h3>
                  <h3>Mario's Favorite Chicken</h3>
                  <h3>Beef</h3>
                  <h3>Fish</h3>
                  <h3>Seafood</h3>
                  <h3>Sizzling Options</h3>
                  <h3>Vegetables</h3>
                  <h3>Noodles</h3>
                  <h3>Soup</h3>
                  <h3>Couple Meal-1</h3>
                  <h3>Couple Meal-2</h3>
                  <h3>Couple Meal-3</h3>
                  <h3>Couple Meal-4</h3>
                  <h3>Set Meal-A</h3>
                  <h3>Set Meal-C</h3>
                  <h3>Mario's Bilao-A</h3>
                  <h3>Mario's Bilao-B</h3>
                  <h3>Coffee & Milktea</h3>
                  <h3>Beers & Buckets</h3>
                </div>

                <div className='categories-wrapper title-font'>
                  <h3>Starter</h3>
                  <h3>Vegetarian</h3>
                  <h3>Chicken</h3>
                  <h3>Mario's Favorite Chicken</h3>
                  <h3>Beef</h3>
                  <h3>Fish</h3>
                  <h3>Seafood</h3>
                  <h3>Sizzling Options</h3>
                  <h3>Vegetables</h3>
                  <h3>Noodles</h3>
                  <h3>Soup</h3>
                  <h3>Couple Meal-1</h3>
                  <h3>Couple Meal-2</h3>
                  <h3>Couple Meal-3</h3>
                  <h3>Couple Meal-4</h3>
                  <h3>Set Meal-A</h3>
                  <h3>Set Meal-C</h3>
                  <h3>Mario's Bilao-A</h3>
                  <h3>Mario's Bilao-B</h3>
                  <h3>Coffee & Milktea</h3>
                  <h3>Beers & Buckets</h3>
                </div>

              </div>

            <CategorySection />        
        </div>
    )
}


export const AvailableDish = ({data}) => {

    const {recipeName, price, image} = data;
    const [variant, setVariant] = React.useState("whole");

    const navigate = useNavigate();


    const handleVariant = ({target}) => {
      setVariant(target.id);
    }

    return (
        <div className='dark-shadow bg-pureWhite dish-box relative p-3 pt-16 flex flex-col items-center justify-end xs:p-4 xs:pt-16 lg:pt-24 lg:p-5 xl:pt-28 xl:p-6'>
            <img draggable={false} className='object-cover border-4 border-lightOrange w-2/3 select-none -translate-y-1/2 rounded-full absolute top-0 aspect-1 max-w-24 lg:max-w-32 xl:max-w-40' src={image} alt='' />
            <div className='w-full flex flex-col gap-3 xl:gap-5'>
                <div className='flex justify-between gap-1 items-start'>
                  <h3 className='text-xs font-semibold xs:text-sm lg:text-lg xl:text-xl'>{recipeName}</h3>
                  <div className='flex gap-1 text-xs items-center text-lightOrange font-semibold lg:text-sm'>
                    <img draggable={false} className='object-cover w-4 select-none cursor-pointer xs:w-5 lg:w-7' src={heartIcon} alt='' />
                    <p>32</p>
                  </div>
                </div>
                
                <div className='flex items-center text-xs justify-between lg:text-sm xl:text-base'>
                    <span className='text-lightOrange font-semibold'>&#8369;{typeof price === "number" ? price.toFixed(2) : price[variant].toFixed(2)}</span>
                    <div className='flex items-center text-xs gap-2 lg:text-sm lg:gap-3 xl:text-base xl:gap-4'>
                      <p className='border-lightOrange border rounded-full cursor-pointer px-2'>+</p>
                      <p className='text-darkBrown font-semibold'>1</p>
                      <p className='border-lightOrange border rounded-full cursor-pointer px-2'>-</p>
                    </div>
                   
                </div>

                {
                  typeof price !== "number" && (
                    <div className='chicken-part-option flex gap-2 text-xs text-darkBrown mt-3 justify-center xxs:gap-4 xxs:justify-start lg:mt-0'>
                      <button onClick={handleVariant} id="whole" className={`${variant === "whole" && "active"} light-shadow py-1 px-4 rounded-full xxs:px-6 lg:py-2`}>Whole</button>
                      <button onClick={handleVariant} id="half" className={`${variant === "half" && "active"} py-1 px-4 rounded-full xxs:px-6 lg:py-2`}>Half</button>
                    </div>
                  )
                }
                
                
                <div className='w-full gap-2 mt-3 flex flex-col items-stretch justify-between lg:flex-row'>
                  <button className='flex-grow text-pureWhite text-xs bg-lightOrange p-2 rounded-lg lg:text-xs lg:p-3 xl:p-4 xl:rounded-xl'>ADD TO DISH</button>

                  <button onClick={() => navigate('sjsc')} className='flex-grow text-lightOrange border-lightOrange border text-xs p-2 rounded-lg lg:text-xs lg:p-3 xl:p-4 xl:rounded-xl'>DETAILS</button>
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



const CategorySection = () => {
  const navigate = useNavigate();
  const [arrowAnim, setArrowAnim] = React.useState(false);
  const {allProductsTitleSticky} = useAnimationGSAP();

  const handleMenuSelect = () => {

    navigate('/');
    window.scrollTo({top: 0})

  }

  return (
    <Element name='available-recipe' className='bg-ash pt-14 flex flex-col items-center pb-10 relative sm:pt-20 lg:pt-20'>
      <h2 ref={allProductsTitleSticky} className='text-2xl font-semibold rounded-full origin-left xs:text-3xl sm:text-4xl lg:text-5xl lg:inline'>Available <span className='text-lightOrange'>Recipes</span></h2>


      <div className='mt-10 z-30 product-search-con w-full flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:w-11/12 lg:sticky lg:top-3 lg:mt-14'>
        <div className='flex bg-ash menu-back py-3 dark-shadow rounded-full px-6 gap-2 relative items-center text-xs lg:px-8 lg:text-sm 2xl:text-base'>
          <div onClick={handleMenuSelect} onMouseLeave={() => setArrowAnim(false)} onMouseOver={() => setArrowAnim(true)} className='absolute z-10 inset-0 cursor-pointer'></div>
          <img className={`${arrowAnim && "anim"} rotate-180 w-4`} src={chevronIcon} alt='' />
          <p>Menu Selection</p>
        </div>
        <div className='hidden sticky top-3 flex overflow-hidden rounded-full items-center relative h-11 border border-gray w-11/12 sm:max-w-80 sm:flex lg:h-14'>
          <img className='w-6 absolute left-3 z-10' src={seachIcon} alt='' />
          <input placeholder='Search Recipe' className='pl-12 text-darkBrown absolute outline-0 border-0 inset-0 h-full w-full' id="search-category" />
        </div>
      </div>

      <div className='sticky top-3 z-30 mt-4 flex overflow-hidden rounded-full items-center relative h-11 border border-gray w-11/12 max-w-96 sm:mt-8 sm:h-14 sm:hidden'>
          <img className='w-6 absolute left-2 z-10 sm:w-7 lg:left-4' src={seachIcon} alt='' />
          <input placeholder='Search Recipe' className='pl-10 text-darkBrown absolute outline-0 border-0 inset-0 h-full w-full' id="search-category" />
        </div>

      <Outlet/>
    </Element>
  )
}


export default ProductSection;