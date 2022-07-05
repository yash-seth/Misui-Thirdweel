import './App.css';
import About from './Components/About/About';
import Categories from './Components/Categories/Categories';
import DiscountBanner from './Components/DiscountBanner/DiscountBanner';
import DiscountBar from './Components/DiscountBar/DiscountBar';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import HeaderMenu from './Components/HeaderMenu/HeaderMenu';
import Stores from './Components/Stores/Stores';
import Stories from './Components/Stories/Stories';
import TopOffers from './Components/TopOffers/TopOffers';
import Trending from './Components/Trending/Trending';
import { Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import Offers from './Components/Offers/Offers';
import Wishlist from './Components/Wishlist/Wishlist';
import StoreSearch from './Components/StoreSearch/StoreSearch';
import ProductDescription from './Components/ProductDescription/ProductDescription';
import TeamBuy from './Components/TeamBuy/TeamBuy';
import TeamBuyProductDescription from './Components/TeamBuyProductDescription/TeamBuyProductDescription';
import StoreWiseCart from './Components/StoreWiseCart/StoreWiseCart';
import StoreProfilePage from "./Components/StoreProfilePage/StoreProfilePage"
import ProfilePage from "./Components/ProfilePage/ProfilePage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/MyCart" element={<StoreWiseCart />} />
        <Route path="/" element={<>
        <Header />
        <div className='mobileView'>
          <HeaderMenu />
        </div>
        <Stories/>
        <DiscountBar/>
        <TopOffers/>
        <Stores/>
        <TeamBuy/>
        <Categories/>
        <DiscountBanner/>
        <Trending/>
        <About/>
        <Footer/>
        </>
        }/>
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<StoreSearch />} />
        <Route path="/productDescription" element={<ProductDescription/>} />
        <Route path="/teamBuyProductDescription" element={<TeamBuyProductDescription/>} />
        <Route path="/storeProfile" element={<StoreProfilePage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </>
  );
}

export default App;
