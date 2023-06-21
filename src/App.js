import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmpListing from './EmpListing'
import "../src/App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Empcreate from './Empcreate';
import Empedit from './Empedit';
import Empdetails from './Empdetails';


const App = () => {
  return (
    <>
     <h1 className='container'> React CRUD : Employee Record </h1>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<EmpListing/>}></Route>
      <Route path='/employee/create' element={<Empcreate/>} ></Route>
      <Route path='/employee/edit/:empid' element={<Empedit/>}  ></Route>
      <Route path="/employee/detail/:empid" element={<Empdetails/>} ></Route>
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default App