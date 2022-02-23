import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Nav';
import Contact from './components/Contact/Contact';
import Gallary from './components/Gallary/Gallary';
import Header from './components/Header/Header';
import Portfollio from './components/Portfollio/Portfollio';
import Buy from './components/Buy/Buy';
import Footer from './components/Footer/Footer';


const App =()=>  {
  
  return (
    <div className='app'>
    <Navigation/>
    <Header/>
    <Gallary/>
    <Portfollio/>
    <Buy/>
    <Contact/>
    <Footer/>
    </div>
  )

}
export default App;
