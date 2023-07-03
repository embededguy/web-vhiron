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

import About from './content/about'

function App() {
    const [val, setVal] = useState(true);
    setTimeout(()=>{setVal(false)},0)
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

                    {/* ALL ROUTES HERE */}
                </Route>
              </Routes>
            </BrowserRouter>
        );  
    }
}

function Home(){
    return(
            <>
                <Carousel/>
                <ContentCore/>
                <ContentServices/>
                <Footer/>
            </>
        )
}

export default App;
