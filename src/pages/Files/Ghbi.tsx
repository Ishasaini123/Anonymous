import { Flex } from '@chakra-ui/react';
import React from 'react';
import Eveteasing from '../../Components/Issue/Eveteasing';




type GhbiProps = {

};

const Ghbi: React.FC<GhbiProps> = () => {

    return (
        <>
            <div className="elementor-widget-container" style={{ paddingTop: "115px", textAlign: "center", color: "red", }}>
                <p>An aware citizen, is an empowered citizen</p>						</div>
            <div className="kuchbhi" id="kkb" style={{ paddingTop: "4px", textAlign: "center", fontSize: "20px", marginBottom:"35px" }}>
                <b>How to get help for women and child safety issues?</b>
            </div>
            <div className="btn-group" style={{ width: "100%", display: "flex", justifyContent: "space-evenly",margin:"1%" }} >
                <button  style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>EVE TEASING</button>
                <button style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>SEXUALLY ASSAULTED</button>
                <button style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>HARASSMENT IN PUBLIC PLACES</button>
                <button style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>CYBER / PHONE HARASSMENT</button>
            </div>
            <div className="btn-group" style={{ width: "100%", display: "flex", justifyContent: "space-evenly",margin:"1%" }} >
                <button style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>DOMESTIC VIOLENCE</button>
                <button style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>NRI DOMESTIC VIOLENCE / HARASSMENT</button>
                <button style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>MARRIAGE FRAUD</button>
                <button style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>HUMAN TRAFFICKING</button>
            </div>
            <div className="btn-group" style={{ width: "100%", display: "flex", justifyContent: "space-evenly",margin:"1%"}} >
                <button style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>CHILD ABUSE</button>
                <button style={{
                    backgroundColor: "#408e91", /* Green background */
                    border: "1px solid green", /* Green border */
                    color: "white",/* White text */
                    padding:" 0.2% 0.9%",
                    cursor: "pointer", /* Pointer/hand icon */
                    float: "left", /* Float the buttons side by side */
                    borderRadius: "20px"
                }}>REPORT A MISSING PERSON</button>
                
            </div>
            <Eveteasing></Eveteasing>
        </>

    )
}
export default Ghbi;