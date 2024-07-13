import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import{ About, Contact, Experience, Feedbacks, Hero, Tech, Works, Navbar} from './components';


const App=()=>{


return(
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>

    </div>
    </BrowserRouter>
    
  )
};
export default App
