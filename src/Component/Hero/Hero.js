import amitimg from "./amitimg.png";
import "./Home.css";

import React from "react";
export default function Hero (){

    return(
        <>
        <div className="  container-fluid text-center" style={{marginTop:30}}>
  <div className="row">
    <div className="col  img-fluid" >
      <img src={amitimg}  />
    </div>
    <div className="col  hero " style={{marginRight:45}} >
      
    
    <h6><span  style={{color:"#575ff8"}}>Amit Solanki</span></h6>
            <h3>I'm a  <span  style={{color:"#575ff8"}}>Frontend</span> Developer</h3>
            <p>Knowledgeable Front End Developer adept at creating successful websites. Proficient in HTML, CSS, JAVASCRIP & Reactjs</p>
            <div className="bttn">
                <a href="amit resume.pdf" download="amit resume.pdf">
                <button className="btn btn-secondary">DOWNLOAD CV</button>
                </a>
            </div >
    </div>
      
  
  </div>
  </div>
        </>
    )
}