import './App.css';
import GlobalContextProvider from './context/GlobalContext';
import { Route, Routes } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import NavigationMenu from './components/NavigationMenu';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Menu from './pages/Menu';
import ShoppingCart from './pages/CartIcon';
import RegistrationForm from './pages/Register';
import ContactUsForm from './pages/ContactUs';
import AboutUs from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <ToggleSwitch />
        <NavigationMenu />
        <ShoppingCart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/reserve" element={<RegistrationForm />} />
          <Route path="/contact" element={<ContactUsForm />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </GlobalContextProvider>
  );
}

export default App; 