import './App.css';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='px-7 flex flex-col gap-7 xl:px-14'>
     <NavBar />
     <HeroSection />
     <h1>hi</h1>
    </div>
  );
}

export default App;
