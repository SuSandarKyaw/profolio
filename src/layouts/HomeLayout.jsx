
import Profolio from "../Navbar/profolio";
import { Outlet, useNavigate } from "react-router";
export default function HomeLayout(){
    const navigate= useNavigate();
    return (
        <div  style={{minHeight:"100vh"}} className="d-flex flex-column mt-1">
            <header >
                <Profolio />
              </header>  
            <main>
                <div>
                    <h1><Outlet/></h1>
                </div>
            </main>
            <footer className="mt-auto">
                <div style={{width:"100%"}} className="footercolor py-2 text-center" >
                   If you want to know about me, come to about page. 
                   <button className="btn btn-sm btn-primary" onClick={()=>navigate("/about")}>Next</button>
                </div>
            </footer>
        </div>
    )
}