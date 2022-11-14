import phone from "./phone.svg";
import mail from "./mail.svg";
import office from "./office.svg";
export default function Contact() {

    return (
        <>
        
        <div className="container text-center" >
        <h1 className="heading"><span style={{color:"#575ff8"}}>Contact</span>   us</h1>
    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, impedit.</p> */ }
    <div className="row">
        <div className="col">
            <img src={phone} alt="" height="200" width="200" className="img-responsive"  />
            <h4>call us on</h4>
            <h6>+918770555280</h6>
        </div>
        <div className="col">
            <img src={mail} alt="" height="200" width="200" className="img-responsive"   />
            <h2>mail us on</h2>
            <h6>amitsolanki3895@gmail.com</h6>
        </div>
        <div className="col">
            <img src={office} alt="" height="200" width="200" className="img-responsive"   />
            <h2>Home Town</h2>
            <h6>Sagar (M.P.) INDIA</h6>
        </div>
    </div>
                 
    </div>
    </>    
    )
}