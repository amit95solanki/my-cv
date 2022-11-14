import TEN from"./TEN.png";
import ITD from "./ITD.png";
import PG from "./PG.png";
import ui from './ui.png';
import re from "./re.png"
import "./Qualification.css"

export default function Qualification (){

    return(<>
        <h2 className="text-center heading"  > <span  style={{color:"#575ff8"}}>Qualification</span></h2>
        <div className="container text-center grid-container ">
        <div className="row">
            <div className="col imgn">
                <img src={TEN}    className="img-responsive" width="150" height="100"/>
                <h4>10 <sup>th</sup> High School</h4>
                <p className="font">Medium:- MP Board   &  Percentage:-  69.66%</p>
            </div>
            <div className="col imgn">
                <img src={TEN}  alt="" className="img-responsive" width="150" height="100" />
                <h4>12 <sup>th</sup> H.S. School</h4>
                <p>Medium:- MP Board (PCM) & Percentage:- 56%</p>
            </div>
            <div className="col imgn">
                <img src={ITD}  alt="" className="img-responsive" width="150" height="100"/>
                <h4> Graduation</h4>
                <p>Bachelor of Engineering:- Information Technology <br/> 
                Govt. Indra Gandhi Engineerig College ,Sagar (MP)</p>
            </div>
            
            <div className="w-80"></div>
            
            <div className="col imgn">
                <img src={PG}  alt="" className="img-responsive" width="150" height="100"/>
                <h4> Post Graduation</h4>
                <p>MBA:- Disaster Management <br/> Institute Of Management Studies (DAVV),Indore(MP)</p>
            </div>
            <div className="col imgn">
                <img src={ui}  alt="" className="img-responsive" width="150" height="100"/>
                <h4> Certificate : UI Technology</h4>
                <p>UI Technology from Durga Software Solution , HYDERABAD (TELANGANA)</p>
            </div>
            <div className="col imgn">
                <img src={re}  alt="" className="img-responsive" width="150" height="100"/>
                <h4> Certificate : Reactjs</h4>
                <p>Reactjs from Naresh i Technology , HYDERABAD (TELANGANA)</p>
            </div>
           
            </div>
            
            <marquee behavior="" direction="right"> <a href="https://github.com/amit95solanki" rel="" target="_blank">personal project link (click me)...</a> </marquee>
        </div>
        
        </>
    )
}