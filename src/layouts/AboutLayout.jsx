import { Outlet } from "react-router";
import Profolio from "../Navbar/profolio";
import { useRef } from "react";


export default function AboutMeLayout(){
  
    const scrollRef= useRef();
    const handleScroll=()=>{
        scrollRef.current.scrollIntoView();
    }

    return (
        <div  style={{minHeight:"100vh"}} className="d-flex flex-column mt-1" ref={scrollRef}>
            <header >
                <Profolio/>
              </header>  
            <main>
                <div>
                    <h1><Outlet/></h1>
                </div>
            </main>
            <footer className="mt-auto">
                <div style={{width:"100%"}} className="py-3 bg-danger-subtle text-center" >
                   <button className="btn btn-warning" onClick={handleScroll}>Scroll to Top</button>
                </div>
            </footer>
        </div>
    )
}