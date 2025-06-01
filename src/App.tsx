import Accordion from './components/custom/Accordion';
import CompanyCarousel from './components/custom/Carousel';
import CarouselComponent from './components/custom/CarouselComponent';
import Hero from './components/custom/Hero';
import Navbar from './components/custom/Navbar';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <CompanyCarousel />
      <Accordion />
      <CarouselComponent />
    </div>
  );
}

export default App;
