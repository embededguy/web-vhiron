import React,{useState} from 'react'
import { BrowserRouter,Routes, Route, Outlet, Link } from "react-router-dom";

import './app.css';

// Components Imports ############################
import NavBar from './components/navbar'
import Footer from './components/footer'
import Splash from './components/splash'

// Content
import Carousel from './content/carousel'
import ContentCore from './content/contentcore'
import ContentServices from './content/contentservices'
import ContentZoom from './content/contentzoom'

import About from './content/about'
import Contact from './content/contact'

function App() {
    const [val, setVal] = useState(true);
    setTimeout(()=>{setVal(false)},3000)
    if (val){
        return (
            <div className="App">
                <Splash/>
            </div>
        );        
    }
    else{
        return (
            <BrowserRouter basename="/">
              <Routes>
                <Route path="/" element={<NavBar/>} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                    {/* ALL ROUTES HERE */}
                </Route>
              </Routes>
            </BrowserRouter>
        );  
    }
}

function Home(){
    window.scrollTo(0,0)
    return(
            <>
                <Carousel/>
                <ContentCore/>
                <ContentServices/>
                <ContentZoom/>
                <Footer/>
            </>
        )
}

export default App;
