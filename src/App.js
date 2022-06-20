import './App.css';
import About from './Components/About/About';
import Categories from './Components/Categories/Categories';
import DiscountBanner from './Components/DiscountBanner/DiscountBanner';
import DiscountBar from './Components/DiscountBar/DiscountBar';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import HeaderMenu from './Components/HeaderMenu/HeaderMenu';
import MyCart from './Components/MyCart/MyCart';
import Stores from './Components/Stores/Stores';
import Stories from './Components/Stories/Stories';
import TopOffers from './Components/TopOffers/TopOffers';
import Trending from './Components/Trending/Trending';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import Offers from './Components/Offers/Offers';
import Wishlist from './Components/Wishlist/Wishlist';
import StoreSearch from './Components/StoreSearch/StoreSearch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/MyCart" element={<MyCart />} />
        <Route path="/" element={<>
        <Header />
        <HeaderMenu/>
        <Stories/>
        <DiscountBar/>
        <TopOffers/>
        <Stores/>
        <Categories/>
        <DiscountBanner/>
        <Trending/>
        <About/>
        <Footer/>
        </>
        }/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Search" element={<StoreSearch />} />
      </Routes>
    </>
  );
}

export default App;
