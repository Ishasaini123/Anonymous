import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import "../../Css/Issue.css";
function Eveteasing(){
    return(

        <div className="eve" style={{width:"80%",marginLeft:"auto",marginRight:"auto",marginTop:"30px",padding: "1%",border: "1px solid #ded8d8",display: "flex"}}>
            <div className="main" style={{width:"100%",padding:"1%"}}>
        <h1 style={{color:"red"}}>Join hands in tackling the menace of Eve Teasing</h1>
        <b style={{fontSize:"40px"}}>EVE TEASING</b>
        <div className="how" style={{display:"flex",flexDirection:"row",marginLeft: "17px",fontWeight: "600",fontSize: "20px",marginTop: "4px"}}>
        <FaRegHandPointRight style={{marginTop: "4px"}}/>
        <span style={{marginLeft: "7px"}}>How TSWSW can help with cases of Eve Teasing?</span>
        </div>
        <span >
        SHE Teams deal with the cases of Eve Teasing. If you face or come across any case of Eve teasing you can reach out to SHE Teams for help. SHE Teams are available in different cities and towns across the state of Telangana to ensure the safety & security of women.
        </span>
        <div className="next" style={{display:"flex",flexDirection:"row",marginLeft: "12px",fontWeight: "600",fontSize: "20px",marginTop: "14px"}}>
        <FaExclamationTriangle style={{marginTop: "13px"}}></FaExclamationTriangle>
            <span style={{ marginLeft: "14px",marginTop: "8px"}}>
            How to Report?
            </span> </div>
        <span >
        Dial 100 or 1098, Whatsapp to 9441669988 or reach out to <span style={{color:"red"}}>Nearby Police Stations</span>
        </span>
        <div className="laws" style={{display:"flex",flexDirection:"row",marginLeft: "12px",fontWeight: "600",fontSize: "20px",marginTop: "14px"}}>
         <FaHammer style={{marginTop: "13px"}}></FaHammer>
         <span style={{ marginLeft: "14px",marginTop: "8px"}}>
         Acts & Laws for Eve Teasing
            </span> 
        </div>
        <span >Under Section 298 A and Section 298 B of the Indian Penal Code, a man who is found guilty of making a female the target of obscene gestures, remarks, songs or recitation, can be imprisoned for a period of three months. Under Section 292, if a man shows pornographic or obscene pictures, books or slips to a female, he will be fined a sum of ₹2000 with two years of rigorous imprisonment, if the offence has been committed for the first time. In the event of a repeated offence, the guilty will be fined with ₹5000 and has to spend five years in prison. Section 354 imposes a two-year imprisonment with a fine when a person is found guilty of assault or using criminal force on a woman with intent to outrage her modesty. Section 509 punishes the “intent to insult the modesty of any woman by use of words, sounds, gestures, or the exhibition of any object in such a way as to intrude upon the privacy of a woman” with a fine and one year in prison.   
        <a href="https://womensafetywing.telangana.gov.in/women-safety-laws-downloads/" style={{color:"red"}}> Click here to know more.</a></span>
        </div>
        <div className="se" style={{width:"60%",background:"#fcf4f4"}}>
            <div className="heading" style={{fontSize: "35px",textAlign: "center",margin: "19% 0%"}}>Need help?</div>
            <div className="imag" style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
            <img src="https://womensafetywing.telangana.gov.in/wp-content/uploads/2021/11/picxy_XV641059.jpg"></img>
            </div>
            <div className="info" style={{width: '98%', fontSize: "smaller", margin: "8% 0%", textAlign: "center"}}>Found this information useful?<br></br>
            Share it with your friends and family to spread awareness.</div>
            <div className="cnt" style={{display: "flex",justifyContent: "space-around"}}>
               <div> <FaFacebook></FaFacebook> </div>
               <div> <FaTwitter></FaTwitter> </div>
               <div> <FaLinkedinIn></FaLinkedinIn></div>
            </div>
        </div>
        </div>
    )
}
export default Eveteasing;