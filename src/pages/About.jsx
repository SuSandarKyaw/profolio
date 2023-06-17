import { useNavigate } from 'react-router';
import './contact.css';
import {GrLinkPrevious,GrLinkNext} from "react-icons/gr"
export default function About(){
    const navigate =useNavigate();
    return (
      <div >
        <button className='btn btn-sm btn-warning rounded-circle' onClick={()=>navigate("/")}>
            <GrLinkPrevious/>
        </button>
      <div>
      <button className='btn btn-sm btn-warning rounded-circle'  onClick={()=>navigate("/contact")}><GrLinkNext/></button>
      </div>
        <div className="text-center">
        <img src="https://i.pinimg.com/564x/18/65/40/186540b269b05cce2125a9221883320f.jpg"/>
        <h1>Hi there!</h1>
        </div>  
       <div className="container-fluid d-flex">
       <div className="text-note col-6">
            I'm Su Sandar Kyaw. I used to be a UCSY student! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="col-6 me-2">
        <div style={{width:"100%"}} className="d-flex gap-3 justify-content-center" >
        <span className="card col-3">
            <img src="https://i.pinimg.com/564x/d8/5d/28/d85d28e78e64995b74586ede2df15e1b.jpg"/>
        </span>
        <span className="card col-3">
            <img src="https://i.pinimg.com/564x/21/99/77/219977dd443dee294c7d40851576d676.jpg"/>
        </span>
        </div>
       < div style={{width:"100%"}} className="d-flex gap-3 justify-content-center" >
        <span className="card col-3">
            <img src="https://i.pinimg.com/564x/ad/44/83/ad44832b0b7023b5d1290156dadb120b.jpg"/>
        </span>
        <span className="card col-3">
            <img src="https://i.pinimg.com/564x/d4/bb/18/d4bb186ea21765af2b019099f847113d.jpg"/>
        </span>
        </div>
        </div>
       </div>
      </div>
    )
}