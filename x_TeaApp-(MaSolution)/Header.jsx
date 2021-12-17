import React from "react";
import "./Header.css";

const Header = (props) => {
    return (
        
        <div>
            <h2>Choisissez votre thé</h2>
            <h2>Hello {props.name}</h2>
        </div>
                
            
    )
}

export default Header