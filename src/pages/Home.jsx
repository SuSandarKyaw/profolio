import { useNavigate } from "react-router";
import {BsFacebook,BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import { Link } from "react-router-dom";
import Carousel from "../layouts/Caurosel";
import './contact.css'
export default function Home(){

    const navigate = useNavigate();
    return (
        <div className="home-body container-fluid d-flex mt-5">
            <div className="col-6 d-flex flex-column  align-items-center mt-5">
                <h1 className="">Hi! I'm Su Sandar Kyaw</h1>
                 <h6>I am really into Web Develop!</h6>
                <span className="mb-4">
                    <Carousel/>
                </span>
                <button className="btn btn-warning rounded-pill" onClick={()=>navigate("/contact")}>Hire</button>
                <div className="me-auto">
                <ul className="mt-5 list-unstyled small ">
                    <li>
                    <Link to="https://www.facebook.com/loey.su.2711"  > <BsFacebook/>
                     </Link>     
                    </li>
                    <li >
                    <Link to="https://www.instagram.com/loey__su/" > <BsInstagram/>
                     </Link>    
                      
                    </li>
                    <li >
                    <Link to="https://www.instagram.com/loey__su/" > <AiOutlineTwitter/>
                     </Link>        
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-5">
                <img src="https://i.pinimg.com/564x/3c/e8/1f/3ce81f802820c8415bfe04415a0bde3a.jpg"/>
            </div>
        </div>
    )
}
