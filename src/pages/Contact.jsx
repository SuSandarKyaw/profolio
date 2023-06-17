import {AiOutlinePhone} from "react-icons/ai"
import {SiMinutemailer} from "react-icons/si"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import './contact.css'

export default function Contact(){
  
    return (
        <div>
             <h2 className="title text-center mt-2 p-2 mb-2">
                Contact Me For Your Website!
             </h2>
        <div className="container-fluid d-flex flex-row-reverse">
              
        <div className="contact col-6">
           
            <ul className=" list-unstyled mt-5">
                <li>
                    <AiOutlinePhone/> 09963991184
                </li>
                <li>
                    <SiMinutemailer/> loeysu123@gmail.com
                </li>
                <li>
                    <AiOutlineInstagram/> loey__su
                </li>
                <li>
                    <BsFacebook/> Su Sandar Kyaw
                </li>
            </ul>
        </div>
          <div className="col-6">
            <img src="https://i.pinimg.com/564x/0f/ad/ce/0fadcec31defd56b9632aaa23f70e5f4.jpg"/>
          </div>

        </div>
        
       </div>
    )
}