import { useState } from "react"
import {GrLinkPrevious,GrLinkNext} from "react-icons/gr"
import Home from "./Home";


export default function NoteQuote(){
    
    const [currentIndex,setCurrentIndex]= useState(0);
  
     const handlePrev=()=>{
        setCurrentIndex(currentIndex-1)
     }

     const handleNext=()=>{
        setCurrentIndex(currentIndex+1)
     }



    return (
        <div>
            <Home/>
            <div>
                {
                    currentIndex ==!0 && <button className="btn btn-white" onClick={handlePrev}><GrLinkPrevious/></button>
                }
                {
                    currentIndex ==!0 && <button className="btn btn-white" onClick={handleNext}><GrLinkNext/></button>
                }
            </div>
        </div>
    )
}


