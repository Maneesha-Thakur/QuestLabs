// import React from 'react';
// import Navbar from './components/Navbar';
// import AllRoute from './components/AllRoute';
// import './App.css'
// import Main from './pages/Body/Main';

// import Footer from './pages/Footer/Footer';


// const App = () => {
//   return (
    
//     <div style={{width:"100%"}} >
//       <Navbar />
//       <Main/>
//       <Footer/>
     
//       <div className="main-container">
//         <AllRoute />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import AllRoute from './components/AllRoute';
import Main from './pages/Body/Main';

import Footer from './pages/Footer/Footer';

const App = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <Navbar />
        <Main />
    
        <Footer />
        <div className="main-container">
          <AllRoute />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
