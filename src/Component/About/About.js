
import "./About.css"
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import lin from "./lin.png";
import what from "./what.png";
import github from "./github.png"
export default function About (){

    return(
        <>
        <div className="containe-fluid text-center  box">
        <div className=" about" >
                    <h3> <span  style={{color:"#575ff8"}}>About</span> Me</h3>
                    {/* <h3>Hello i'm Amit Solanki</h3> */}
                    
                       <ul>
                        <li>Name  - Amit Solanki </li>
                        <li>DOB   - 08/Aug/1995</li> 
                        <li>Mothers Name :Mrs.Tara Solanki</li>
                        <li>Father's name : Mr. Bhagwandas Solanki</li>
                        <li>Hobbies : Cooking and Stock Swing Trader</li>
                        <li>Language proficiency :Hindi and English</li>
                        </ul>
                        
                    
                    <div className="social">
                                   <a href="https://www.facebook.com/amit.solanki.14289" target="_blank"> <img src={facebook} alt="" height="40px" /></a>
                                   <a href="https://www.instagram.com/amit_karan_solanki/" target="_blank"> <img src={instagram} alt="" height="40px"/></a>
                                   <a href="https://twitter.com/Amit3895" target="_blank"> <img src={twitter} alt="" height="40px" /></a>
                                   <a href="https://www.linkedin.com/in/amit-solanki-78a427255/" target="_blank"> <img src={lin} alt="" height="40px" /></a>
                                   <a href="https://wa.me/918770555280" target="_blank"> <img src={what} alt=""height="40px" /></a>
                                   <a href="https://github.com/amit95solanki" target="_blank"> <img src={github} alt=""height="40px" /></a>

                                </div>
                    </div>
        </div>
        </>
        
    )
}