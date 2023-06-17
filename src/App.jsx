import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import HomeLayout from "./layouts/HomeLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutLayout from "./layouts/HomeLayout";
import Contact from "./pages/Contact";
import ContactLayout from "./layouts/ContactLayout";
import AboutMeLayout from "./layouts/AboutLayout";
import PageNotFound from "./pages/NotFound";

export default function App(){
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout/>}>
           <Route path="/" element={<Home/>}/>
          </Route>
          <Route element={<AboutMeLayout/>}>
            <Route path="/about" element={<About/>}/>
          </Route>
          <Route element={<ContactLayout/>}>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}