import './App.css';
import './Animations.css';
import AboutUs from './components/AboutUs';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ProductsPreview from './components/ProductsPreview';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import GoogleMaps from './components/GoogleMaps';

function App() {
  return (
    <div className='w-full'>
       <div className='px-7 flex flex-col gap-7 xl:px-14'>
         <NavBar />
         <main className='flex mb-16 flex-col gap-32 items-center lg:gap-40 xl:gap-52'>
         <HeroSection />
         <AboutUs />
         <ProductsPreview />
         <ServicesSection />
         <Testimonials />
         <GoogleMaps />
         </main>
       </div>

       <Footer />
    </div>
  );
}

export default App;
