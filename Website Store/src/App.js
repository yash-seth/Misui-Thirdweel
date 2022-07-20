import './App.css';
import { useState, } from 'react'
import About from './Components/About/About';
import Categories from './Components/Categories/Categories';
// import DiscountBanner from './Components/DiscountBanner/DiscountBanner';
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
import StoreItemsPage from "./Components/StoreItemsPage/StoreItemsPage"
import CartCheckout from './Components/CartCheckout/CartCheckout';
import PaymentSuccessful from './Components/PaymentSuccessful/PaymentSuccessful';
import FAQ from './Components/FAQ/FAQ';
import CustomerService from './Components/CustomerService/CustomerService';
import AddAddress from './Components/AddAddress/AddAddress';
import ChatRoulette from './Components/ChatRoulette/ChatRoulette';
import ProductAvailability from './Components/ProductAvailability/ProductAvailability';
import OrderHistory from './Components/OrderHistory/OrderHistory';
import TeamBuyHistory from './Components/TeamBuyHistory/TeamBuyHistory';
import GroupBuyTeamAndItem from './Components/GroupBuyTeamAndItem/GroupBuyTeamAndItem';

function App() {
    const [address, setAddress] = useState({label:"",addr:""})
    const [paymentView, setPaymentView] = useState("normal")
  return (
    <>
      <Routes>
        <Route path="/MyCart" element={<StoreWiseCart address={address} setAddress={setAddress}/>} />
        <Route path="/" element={<>
        <Header address={address} setAddress={setAddress}/>
        <div className='mobileView'>
          <HeaderMenu />
        </div>
        <Stories/>
        <DiscountBar/>
        <TopOffers/>
        <Stores/>
        <TeamBuy/>
        <Categories/>
        {/* <DiscountBanner/> */}
        <Trending/>
        <About/>
        <Footer/>
        </>
        }/>
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<StoreSearch address={address} setAddress={setAddress}/>} />
        <Route path="/productDescription" element={<ProductDescription address={address} setAddress={setAddress}/>} />
        <Route path="/teamBuyProductDescription" element={<TeamBuyProductDescription address={address} setAddress={setAddress}/>} />
        <Route path="/storeProfile" element={<StoreProfilePage address={address} setAddress={setAddress}/>} />
        <Route path="/profile" element={<ProfilePage address={address} setAddress={setAddress}/>} />
        <Route path="/storeItems" element={<StoreItemsPage address={address} setAddress={setAddress}/>} />
        <Route path="/CartCheckout" element={<CartCheckout address={address} setAddress={setAddress}/>} />
        <Route path="/PaymentSuccessful" element={<PaymentSuccessful address={address} setAddress={setAddress} paymentView={paymentView}/>} />
        <Route path="/FAQs" element={<FAQ address={address} setAddress={setAddress}/>} />
        <Route path="/CustomerService" element={<CustomerService address={address} setAddress={setAddress}/>} />
        <Route path="/addAddress" element={<AddAddress address={address} setAddress={setAddress}/>} />
        <Route path="/chatRoulette" element={<ChatRoulette address={address} setAddress={setAddress}/>} />
        <Route path="/productAvailability" element={<ProductAvailability address={address} setAddress={setAddress}/>} />
        <Route path="/orderHistory" element={<OrderHistory address={address} setAddress={setAddress}/>} />
        <Route path="/teamBuyHistory" element={<TeamBuyHistory address={address} setAddress={setAddress}/>} />
        <Route path="/teamBuyTeamAndItem" element={<GroupBuyTeamAndItem address={address} setAddress={setAddress}/>} />
      </Routes>
    </>
  );
}
export default App;