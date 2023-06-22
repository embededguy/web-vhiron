import React,{useState} from 'react'

import './app.css';

// Components Imports ############################
import NavBar from './components/navbar'
import Footer from './components/footer'
import Splash from './components/splash'

// Content
import Carousel from './content/carousel'

function App() {
    const [val, setVal] = useState(true);
    setTimeout(()=>{setVal(false)},2000)
    if (val){
        return (
            <div className="App">
                <Splash/>
            </div>
        );        
    }
    else{
        return (
            <div className="App">
                <NavBar/>
                <Carousel/>

                <Footer/>
            </div>
        );  
    }
}

export default App;
