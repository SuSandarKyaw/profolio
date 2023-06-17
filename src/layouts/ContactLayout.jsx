
import Profolio from "../Navbar/profolio";
import { Outlet } from "react-router";
import { useNavigate } from "react-router"
import './footercolor.css'
export default function ContactLayout(){
const navigate= useNavigate();

    return (
        <div  style={{minHeight:"100vh"}} className="d-flex flex-column mt-1">
            <header >
                <Profolio/>
              </header>  
            <main className="bg-layout" style={{height:"560px"}}>
                <div>
                    <Outlet/>
                </div>
            </main>
            <footer className="mt-auto">
                <div style={{width:"100%"}} className=" py-3 text-center" >
                <button className="btn btn-sm rounded btn-dark" onClick={()=>navigate("/")}>Back to HomePage</button>
                </div>
            </footer>
        </div>
    )
}