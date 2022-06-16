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

function App() {
  return (
    <>
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
  );
}

export default App;
