import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Portfolio } from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
// import { Achivements } from './Components/Achivements/Achivements';

const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/portfolio" element={ <Portfolio /> } />
          {/* <Route path="/achivements" element={ <Achivements /> } /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
