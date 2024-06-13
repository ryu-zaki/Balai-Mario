import './App.css';
import './Animations.css';
import React, { useRef } from 'react';
import AboutUs from './components/AboutUs';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ProductsPreview from './components/ProductsPreview';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import GoogleMaps from './components/GoogleMaps';
import ProductSection from './components/ProductSection';
import { Route, Routes, useLocation } from 'react-router';
import LogReg from './components/LogReg';
import IndividualProduct from './components/IndividualProduct';
import CategoryProducts from './components/CategoryProducts';
import IndividualCategory from './components/IndividualCategory';
import { useAvailableRecipes } from './context/AvailableRecipes';
import { Element, Link, scroller } from 'react-scroll';

function App() {
  const {categories} = useAvailableRecipes();
  const {pathname} = useLocation();
  const [controlsIndex, setControlsIndex] = React.useState(0);
  const [slideNum, setSlideNum] = React.useState(1);
  const resetterBtnRef = useRef(null);

  const individualCategories = categories
  .filter((_, index) => index >= controlsIndex && index < controlsIndex + 3)
  .map((category, index) => {
    return <IndividualCategory slideNum={slideNum} category={category} key={index} />
  })

  const handleNextSlide = () => {
    setSlideNum(prev => prev >= (categories.length / 3) ? prev : prev + 1);
    setControlsIndex(prev => prev + 3 >= categories.length ? prev : prev + 3);
   
    if (slideNum >= (categories.length / 3)) return;
    scroller.scrollTo('available-recipe');
  }

  const handlePrevSlide = () => {
    setSlideNum(prev => prev <= 1 ? 1 : prev - 1);
    setControlsIndex(prev => !prev ? 0 : prev - 3);

    if (!controlsIndex) return;
    scroller.scrollTo('available-recipe');
  }

  React.useEffect(() => {

    setSlideNum(1);
    setControlsIndex(0);

  }, [pathname])
  return (
    <div className='w-full'>
      
      <Routes>
        <Route path='/' element={
          <>
            <div className='px-7 flex flex-col gap-7 xl:px-14'>
                 <NavBar />
                 <main className='flex mb-16 flex-col gap-32 items-center lg:gap-40 xl:gap-52'>
                 <Element className='w-full' name="hero">
                   <HeroSection />
                 </Element>
                 
                 <Element className='w-full' name='about-us'>
                   <AboutUs />
                 </Element>
                 
                 <Element className='w-full' name="products-preview">
                   <ProductsPreview />
                 </Element>
                 
                 <Element className='w-full' name='services'>
                   <ServicesSection />
                 </Element>
                 
                 <Testimonials />

                 <Element className='w-full flex justify-center' name='location'>
                   <GoogleMaps />
                 </Element>
                 

                 </main>
             </div> 
          </>
        } />

        <Route path='/products' element={<ProductSection />} >

          <Route index element={
           <div className='w-11/12'>
             <div className='w-full bg-ash individual-category-container mx-auto mt-10 text-sm text-center flex flex-col items-center gap-10 xs:text-left xs:mt-16 lg:mt-20 lg:gap-28 2xl:text-base 2xl:mt-28'>
              {individualCategories}
             </div>
             <div className='category-controls flex text-sm flex-col gap-5 mt-10 items-center lg:flex-row lg:justify-between lg:mx-auto lg:text-base'>
              <div className='flex gap-3 text-pureWhite'>
                <button onClick={handlePrevSlide} className={`${!controlsIndex ? "cursor-not-allowed bg-lightOverlay" : "bg-lightOrange"} transition-all duration-500 py-3 px-8 rounded-xl`}>Previous</button>
                <button onClick={handleNextSlide} className={`${controlsIndex + 3 >= categories.length ? "cursor-not-allowed bg-lightOverlay" : "bg-lightOrange"} transition-all duration-500 py-3 px-8 rounded-xl`}>Next</button>
              </div>

              <p className='flex font-bold gap-3 text-gray'><span className=' text-lightOrange'>{slideNum}</span>of<span className='text-lightOrange'>{Math.ceil(categories.length / 3)}</span></p>
             </div>
           </div>
            } />

           <Route path=':category' element={
             <CategoryProducts />
           } />

           </Route>

           


        
        <Route path='/products/:category/:productId' element={
          <div>
            <div className='px-7 xl:px-14'>
            <NavBar />
            </div>

            <IndividualProduct />
          </div>} />

        <Route path='/login' element={
          <div className='overflow-hidden'>
             <div className='px-7 xl:px-14'>
            <NavBar />
            </div>
            
            <LogReg />
          </div>
            
         
        }
            
        />

       <Route path='/register' element={
          <div className='overflow-hidden'>
          <div className='px-7 xl:px-14'>
         <NavBar />
         </div>
         
         <LogReg />
       </div>
         
        }
            
        />

      </Routes>
      <Footer />
       
         

         {/* <ProductSection /> */}
        
       
       
    </div>
  );
}

export default App;
