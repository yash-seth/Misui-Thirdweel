import React from 'react';
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer';
import B_footer from './Components/B_footer/B_footer';
import './App.css';


function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Content />
      <B_footer/>
      <Footer/>
    </div>    
      
    </>
  );
}

export default App;
