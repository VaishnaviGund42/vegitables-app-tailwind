import { StrictMode } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {createRoot} from "react-dom/client"
import './index.css'
import Home from './views/Home';
import Vegitable from './views/Vegitable';
import MyCart from './views/MyCart';

const root=createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vegitable" element={<Vegitable />} />
        <Route path="/MyCart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  </>

)