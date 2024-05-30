import './App.css';
import AboutUs from './components/AboutUs';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ProductsPreview from './components/ProductsPreview';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className='px-7 flex flex-col gap-7 xl:px-14'>
     <NavBar />
     <main className='flex flex-col gap-32 items-center lg:gap-40 xl:gap-52'>
     <HeroSection />
     <AboutUs />
     <ProductsPreview />
     <ServicesSection />
     </main>
     
    </div>
  );
}

export default App;
