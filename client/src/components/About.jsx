import React from "react";
import Navbar from "./NavBar";
let About = ()=>{
    const style ={
        color: "#03578F",
        fontFamily: 'cursive',
    }
  return(
      <div>
      <Navbar/>
      <br/>
      <br/>
          <h1 className="text-center" style={style}>This site was created Using React and Redux</h1>
      </div>
  )
}
export default About;