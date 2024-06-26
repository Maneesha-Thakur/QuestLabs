import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home/Home'
const AllRoute = () => {
  return (
    <div   >
     <Routes>
        <Route path="/" element={<Home/>} ></Route>
        {/* <Route path="" element={</>} ></Route> */}
    
        </Routes> 
    </div>
  )
}

export default AllRoute
