import React, { useEffect } from "react";
import { Expo,TweenMax } from "gsap";
import Register from './register';
import './App.css'


function App() {
  useEffect(()=>{
    TweenMax.to('.overlay',3 ,{
      delay: 1,
      top: "-100%",
      ease: Expo.easeInOut
    })
    TweenMax.to(".overlay h1", 3, {
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut
    })

    TweenMax.to(".overlay span", 3, {
      delay: .3,
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut
    })
  }

  );

  return (
    <>
    {/* ----------overlay animation------------- */}
    <div className="overlay">
      <h1>Harley Davidson</h1>
      <span>Motor Company</span>
    </div>

    {/* -----------register component----------- */}
    <Register/>
    </>
  );
}

export default App;
