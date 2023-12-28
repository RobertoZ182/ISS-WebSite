import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Navbar from './compoments/Navbar/NavBar';
import KontaktPage from './pages/Kontakt/Kontakt';
import Footer from './compoments/Footer/Footer';
import ImpressumPage from './pages/Impressum/Impressum';
import GartenPflege from './pages/GartenPflege/GartenPflege';
import Reinigung from './pages/Reinigung/Reinigung';
import Winterdienst from './pages/Winterdienst/Winterdienst';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/kontakt" element={<KontaktPage/>}></Route>
      <Route path="/impressum" element={<ImpressumPage/>}></Route>
      <Route path="/reinigung" element={<Reinigung/>}></Route>
      <Route path="/winterdienst" element={<Winterdienst/>}></Route>
      <Route path="/gartenpflege" element={<GartenPflege/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
