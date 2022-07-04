import React from 'react';
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer';
import AboutContent from './Components/AboutContent/AboutContent';
import './App.css';


function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Content />
      <AboutContent/>
      <Footer/>
    </div>    
      
    </>
  );
}

export default App;
