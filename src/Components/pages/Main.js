//Importing all the modules 
import React from 'react';
import '../styles/main.css'
import logo from '../../assets/logo.png'
import img_1 from '../../assets/img1.png'
import { Navbar,Nav,Container } from 'react-bootstrap';


function App() {
  return (
<div className="App">

<div className='title_bar'>
  <Navbar collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">
    <div className='Logo'>
        <img className='logo_image' src={logo} width={50} height={50}/>
        <div className='logo_text'>Thirdweel</div>
      </div> 
    
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        
    </Nav>
    <Nav className='ml-auto'>
      <Nav.Link href="#Home"><div className='links'>Home</div></Nav.Link>
      <Nav.Link href="#About Us"><div className='links'>About Us</div></Nav.Link>
      <Nav.Link href="#Hiring"><div className='links'>Hiring</div></Nav.Link>
      <Nav.Link href="#Contact Us"><div className='links'>Contact Us</div></Nav.Link>
    </Nav>
  </Navbar.Collapse> 
  </Container>
</Navbar>
</div>

<div className='welcome'>
    <div className='welcome_text'>
      Welcome To Thirdweel
    </div>
</div>
<div >
    <img className='image_1' src={img_1}  />
</div>
<div className='text'>Our mission is to digitalise physical market and bridge the gap between physical and digital market.
</div>

<div style={{ marginTop:'125px',
              width:'100%',
              height:'497px',
              backgroundColor:'#56765F',
              fontFamily:'Montserrat',
              fontStyle:'normal',
              fontWeight:400,
              fontSize:'40px',
              lineHeight:'49px',
              textAlign:'center',
              color:'#ffffff'}}>

Thirdwheel leverages the strength of the local retail shop network to its best potential, benefiting both customers and local retailers. Packed with new innovative features to connect users and the retail shopkeepers on a deeper level to provide a personalized e-commerce experience.

</div>
</div>
);}

export default App;
