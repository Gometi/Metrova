import React from "react";
import Navbar from "./NavBar";
let Contact = () => {
    const style = {
        color: "#03578F",
        fontFamily: 'cursive',
    }
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <h1 className="text-center" style={style}>Web Developer, Gometi Ufuoma</h1>
            <h1 className="text-center" style={style}>Email, ufuomagometi@gmail.com</h1>
            <h1 className="text-center" style={style}>Github, https://github.com/Gometi</h1>

        </div>
    )
}
export default Contact;