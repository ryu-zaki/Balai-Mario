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
import { Navigate, Route, Routes, useLocation } from 'react-router';
import LogReg from './components/LogReg';
import IndividualProduct from './components/IndividualProduct';
import CategoryProducts, { divideArr } from './components/CategoryProducts';
import IndividualCategory from './components/IndividualCategory';
import { useAvailableRecipes } from './context/AvailableRecipes';
import { Element, Link, scroller } from 'react-scroll';
import chevronLightRight from './assets/materials/chevron-light-right.png';
import chevronLightLeft from './assets/materials/chevron-light-left.png';
import CheckoutPage from './components/CheckoutPage';
import ReceiptPage from './components/ReceiptPage';
import NoteModal from './components/NoteModal';
import { useCart } from './context/UserCartContext';
import CheckoutValidate from './context/CheckoutValidate';
import AvailableAccounts from './components/AvailableAccounts';
import Settings from './components/settingsPanel/Settings';
import FaqComp from './components/FAQ/FaqComp.tsx';
import AboutUsWhole from './components/AboutUsPage/AboutUsWhole.tsx';


function App() {
  const {categories} = useAvailableRecipes();
  const {totalProducts, singleOrder} = useCart();
  const {pathname} = useLocation();
  const [controlsIndex, setControlsIndex] = React.useState(0);
  const [slideNum, setSlideNum] = React.useState(1);
  const [individualCategories, setIndividualCategories] = React.useState([]);
  
  const aboutUsRef = useRef(null);
  const previewRef = useRef(null);
  const servicesRef = useRef(null);

  const [aboutUsSecActive, setAboutUsSecActive] = React.useState(false);
  const [previewSecActive, setPreviewSecActive] = React.useState(false);
  const [servicesSecActive, setServicesActive] = React.useState(false);
  const [isFinish, setIsFinish] = React.useState(false);
  const [availableAccs, setAvailableAccs] = React.useState(false);
  const [settingsPrivacy, setSettingsPrivacy] = React.useState(false);
  const [faqsVisible, setFaqsVisible] = React.useState(false);

  React.useEffect(() => {
    const filteredFoods = categories
    .map((category, index) => {
      return <IndividualCategory slideNum={slideNum} category={category} key={index} />
    });

    setIndividualCategories(divideArr(filteredFoods, 3))

  }, [controlsIndex, categories]);


  React.useEffect(() => {

    setSlideNum(1);
    setControlsIndex(0);

  }, [pathname])

  const setIntersectionObserver = (element, setState, threshold = .5) => {
    
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {
          if (entry.isIntersecting) {
            setState(true);
          } 
      })

    }, {threshold});

    observer.observe(element);

  }

  React.useEffect(() => {

    setIntersectionObserver(aboutUsRef.current, setAboutUsSecActive);
    setIntersectionObserver(previewRef.current, setPreviewSecActive);
    setIntersectionObserver(servicesRef.current, setServicesActive, .1);

  }, [aboutUsRef, servicesRef, aboutUsRef, pathname]);
  
  console.log(availableAccs)

  return (
    <div className='w-full'>
      <NoteModal />
      {faqsVisible && <FaqComp setFaqsVisible={setFaqsVisible} />}
      {settingsPrivacy && <Settings settingsPrivacy={settingsPrivacy} setSettingsPrivacy={setSettingsPrivacy}/>}

      {availableAccs && <AvailableAccounts availableAccs={availableAccs} setAvailableAccs={setAvailableAccs} />}
      
      <Routes>
        <Route path='/' element={
          <>
            <NavBar setFaqsVisible={setFaqsVisible} setSettingsPrivacy={setSettingsPrivacy} setAvailableAccs={setAvailableAccs} />
            <div className='px-7 flex flex-col gap-7 xl:px-14'>
          
                 <main className='flex mb-16 flex-col gap-32 items-center lg:gap-40 xl:gap-52 xl:max-w-[1180px] xl:mx-auto'>
                 <Element className='w-full' name="home">
                   <HeroSection />
                 </Element>
                 
                 <Element className='w-full' name='about us'>
                   <AboutUs aboutUsSecActive={aboutUsSecActive} aboutUsRef={aboutUsRef} />
                 </Element>
                 
                 <Element className='w-full' name="products">
                   <ProductsPreview previewSecActive={previewSecActive} previewRef={previewRef} />
                 </Element>
                 
                 <Element className='w-full' name='services'>
                   <ServicesSection
                     servicesRef={servicesRef}
                     servicesSecActive={servicesSecActive}
                   />
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
           <div className='w-11/12 category-main-container'>
          
             <SliderController 
               arrLength={individualCategories.length} 
               setState={setControlsIndex}
               currentSlide={controlsIndex} 
               style={"justify-between xs:justify-center lg:justify-end my-14"}
              />
             <div className='w-full individual-category-container mx-auto  text-sm text-center flex flex-col items-center gap-10 xs:text-left  lg:gap-28 2xl:text-base  mt-10'>
              {individualCategories[controlsIndex]}
             </div>
             <SliderController 
               arrLength={individualCategories.length} 
               setState={setControlsIndex}
               currentSlide={controlsIndex} 
               style={"justify-between xs:justify-center lg:justify-start mt-20"}
              />
           </div>
            } />

           <Route path=':category' element={
             <CategoryProducts />
           } />

           </Route>

           


        
        <Route path='/products/:category/:productId' element={
          <div>
            <NavBar setFaqsVisible={setFaqsVisible} setAvailableAccs={setAvailableAccs} />

            <IndividualProduct setIntersectionObserver={setIntersectionObserver}/>
          </div>} />

        <Route path='/login' element={
          <div className='overflow-hidden'>
             <div className='px-7 xl:px-14'>
            <NavBar setFaqsVisible={setFaqsVisible} setAvailableAccs={setAvailableAccs} />
            </div>
            
            <LogReg />
          </div>
            
         
        }
            
        />

       <Route path='/register' element={
          <div className='overflow-hidden'>
          <div className='px-7 xl:px-14'>
         <NavBar setFaqsVisible={setFaqsVisible} setAvailableAccs={setAvailableAccs} />
         </div>
         
         <LogReg />
       </div>
         
        }
            
        />

       <Route 
         path='/checkout/:mode'
         element={
         (!!totalProducts || !!singleOrder.recipeName) ? (
         isFinish ? (
          <ReceiptPage setIsFinish={setIsFinish} />
         ) : (
              <div className='min-h-screen flex justify-center items-center'><CheckoutPage setIsFinish={setIsFinish} /></div>
            ) ) : <Navigate to={'/'} />
            
          }
       />

       <Route 
         path='/about-us'
         element={
          <>
          <NavBar setFaqsVisible={setFaqsVisible} setAvailableAccs={setAvailableAccs} />
          
          <AboutUsWhole />
          </>
          
         }
       />

      </Routes>

      {
        pathname !== "/checkout" && <Footer />
      }
    
         {/* <ProductSection /> */}
        
       
       
    </div>
  );
}

export const SliderController = ({currentSlide, setState, arrLength, style}) => {
  
  const {pathname} = useLocation();
  const handleControl = ({target}) => {

    if (target.id === "add") {
      setState(prev => {
        if (prev + 1 >= arrLength) return prev;

        scroller.scrollTo('available-recipe');
        return prev + 1 
      
      });
    } else {
      setState(prev => {
        if (!prev) return 0;
        
        scroller.scrollTo('available-recipe');
        return prev - 1 
      
      });
    }
    
  }



  return (
   <div className={`${style} text-darkBrown flex items-center w-full px-10 xs:gap-7 lg:gap-8`}>
    <div className={`${!!currentSlide ? "bg-lightOrange" : "bg-lightGray"} p-2 rounded-full relative lg:p-3`}>
      
    <div id="sub" onClick={handleControl} className={`absolute inset-0 z-20 ${!!currentSlide ? 'cursor-pointer' : "cursor-not-allowed"}`}></div>

    <img draggable={false} className='w-4 select-none' src={chevronLightLeft} alt='' />
    </div>

    <p className='flex gap-3'><span className='font-bold'>{currentSlide + 1}</span> of <span className='font-bold'>{arrLength}</span></p>

    <div className={`${currentSlide + 1 === arrLength ? "bg-lightGray" : "bg-lightOrange"} p-2 rounded-full relative lg:p-3`}>
    <div id="add" onClick={handleControl} className={`absolute inset-0 z-20 ${currentSlide + 1 === arrLength ? "cursor-not-allowed" : 'cursor-pointer'}`}></div>
    <img draggable={false} className='w-4 select-none' src={chevronLightRight} alt='' />
    </div>
    
   </div>
  )
}

export default App;
