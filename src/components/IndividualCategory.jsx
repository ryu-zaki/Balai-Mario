import { useLocation, useNavigate } from 'react-router';
import sampleProduct from '../assets/products/sample-product.jpg';
import { useAvailableRecipes } from '../context/AvailableRecipes';
import React, { useRef } from 'react';


const IndividualCategory = ({category, slideNum}) => {

    const categorySectionRef = useRef(null);
    const [categoryActive, setCategoryActive] = React.useState(false);
    const {recipes} = useAvailableRecipes();
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate(category)
    };

    React.useEffect(() => {

      const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            setCategoryActive(true)
          } 

        })

      });

      observer.observe(categorySectionRef.current)

    }, [])

    React.useEffect(() => {
      setCategoryActive(false)
    }, [slideNum])
      
    const filteredRecipes = recipes.filter((data) => {
      return data.category === category;
    });
    
    const prices = filteredRecipes.map(({price}) => price);

    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    

    const featuredProducts = filteredRecipes
    .filter((_, index) => index < 3)
    .map((data, index) => {
      return <FeaturedProduct data={data} key={index} />
    });

    return (
      <section ref={categorySectionRef} className={`${!!categoryActive && "active"} product-category-section relative pb-10 lg:gap-8 2xl:gap-14`}>
        <section className='flex flex-col  gap-5 xs:flex-row xs:items-end xs:justify-center xs:gap-6 sm:bg-pureWhite sm:rounded-2xl lg:rounded-3xl 2xl:flex-col 2xl:items-stretch'>
            <div className='text-darkBrown space-y-2 xs:w-1/2 2xl:w-full'>
             <div className='flex flex-col justify-between items-center xs:mb-6 xs:items-start 2xl:flex-row 2xl:items-center'>
             <h2 className='title-font text-xl font-semibold text-lightOrange 2xl:text-3xl'>{category.toUpperCase()}</h2>
             <p className='text-brown'>{filteredRecipes.length} recipes</p>
             </div>
              
              <p>Kick off your dining experience with our delectable selection of starters.</p>
            </div>
  
            <div className='space-y-2 xs:w-fit xs:text-nowrap xs:space-y-3'>
              <span className='text-gray font-semibold 2xl:text-sm'>price range</span>
              <h3 className='text-lg font-semibold'>₱{minPrice.toFixed(2)} - ₱{maxPrice.toFixed(2)}</h3>
              <button onClick={handleNavigate} className='hidden bg-lightOrange text-xs p-2 px-6 text-pureWhite rounded-md xs:block 2xl:text-sm 2xl:px-8 2xl:py-3'>VIEW All</button>
            </div>
          </section>
  
          <section className='flex flex-col items-center w-full mt-10 xs:mt-16 lg:mt-0 lg:items-start 2xl:items-between 2xl:flex-grow'>
            <span className='text-lightOrange font-semibold xs:text-base 2xl:text-xl'>Featured Products</span>
  
            <div className='mt-20 w-full flex flex-wrap gap-4 gap-y-16 justify-center lg:justify-start lg:gap-2 2xl:mt-28 2xl:gap-0 2xl:justify-between'>
              {featuredProducts}
            </div>
  
            <button onClick={handleNavigate} className='xs:hidden mt-8 bg-lightOrange text-xs p-3 px-8 text-pureWhite rounded-md'>VIEW All</button>
          </section>
      </section>
    )
  }

  const FeaturedProduct = ({data}) => {

    const {recipeName, price, image} = data;

    return (
      <section className='bg-pureWhite border featured-product relative flex flex-col gap-2 relative border-gray rounded-2xl w-2/5 p-2 pt-16 items-center xs:gap-3 xs:p-3 xs:pt-16 2xl:pt-24 2xl:pb-8'>
        <div className='z-20 absolute inset-0 cursor-pointer'></div>
        <img className='aspect-1 object-cover absolute select-none top-0 -translate-y-1/2 w-4/5 rounded-full max-w-24 2xl:max-w-36' draggable={false} src={image} alt='' />
        <h2 className='font-semibold 2xl:text-xl'>₱{price.toFixed(2)}</h2>
        <h3 className='flex justify-center items-center z-10 font-semibold overflow-hidden relative text-center rounded-full dark-shadow p-2 px-4 text-xs text-lightOrange 2xl:py-3 2xl:px-6'>{recipeName.toUpperCase()}</h3>
      </section>
    )
  }

export default IndividualCategory;