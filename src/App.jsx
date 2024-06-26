import React from 'react';
import Navbar from './components/Navbar';
import AllRoute from './components/AllRoute';
import './App.css'
import Main from './pages/Body/Main';
import MainBottom from './pages/Body/MainBottom';
import Footer from './pages/Footer/Footer';


const App = () => {
  return (
    
    <div style={{width:"100%"}} >
      <Navbar />
      <Main/>
      <MainBottom/>
      <div className="main-container">
        <AllRoute />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
