import React from "react";

const style = {
    fontSize: 30,
    fontWeight: 'bold'
}

const Footer = ()=>{
    return(
        <footer className="text-center" style={style}>
        <hr style={{borderWidth: 6}}/>
            Copyright &copy; 2018
            <hr style={{ borderWidth: 6 }}/>
        </footer>
    )
}

export default Footer;