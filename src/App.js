import React from 'react';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer';
import B_footer from './components/B_footer/B_footer';
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
