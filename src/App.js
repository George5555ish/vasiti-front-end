import React, {useEffect}from "react";
import "./App.css";
import AppBar from "./components/AppBar/Appbar";
import AppBarSecondary from "./components/AppBarSecondary/AppBarSecondary";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Testimonials from "./components/Testimonials/Testimonials";
import testimonialArray from "./data/testimonials";
import vendorTestimonials from "./data/testimonials-vendor";
import UserExp from "./components/UserExp/UserExp";
import Footer from "./components/Footer/Footer";
import Sharestory from './components/ShareStory/Sharestory';
function App() {




  const HomePage = () => {

    
  useEffect(() => {
 
    alert('Please click Share your story to add a story')
  })
    return(
      <>
          <AppBarSecondary />

<section className="margin-class border-class-main main" >
  <div id="main-section" className="">
    <h1>Amazing <br></br>Experiences from Our Wonderful Customers</h1>
    <p>
      Here is what customers and vendors are saying about us, you can
      share your stories with us too.
    </p>
  </div>

  
  <img
    src={process.env.PUBLIC_URL + "/images/vasiti-bg-section1.svg"}
    alt="logo"
  />
</section>

<UserExp
  userText={"Tolu & Joy’s Experience"}
  type={"CUSTOMER"}
  text="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
/>

<Testimonials testimonials={testimonialArray} />

<UserExp
  userText={"Josiah's Experience"}
  type={"VENDOR"}
  text="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
"
/>
<Testimonials testimonials={vendorTestimonials} />

      </>
    )
  }
  return (

    
    <div>
      <AppBar />
     <Router> 
      <Route path="/" exact component={HomePage}/>
      <Route path="/vendor" component={Sharestory}/>
     </Router>
      <Footer />
    </div>
    
  );
}

export default App;
