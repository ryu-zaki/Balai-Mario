import './App.css';
import AboutUs from './components/AboutUs';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ProductsPreview from './components/ProductsPreview';

function App() {
  return (
    <div className='px-7 flex flex-col gap-7 xl:px-14'>
     <NavBar />
     <main className='flex flex-col gap-20 items-center lg:gap-20'>
     <HeroSection />
     <AboutUs />
     <ProductsPreview />
     </main>
     
    </div>
  );
}

export default App;
