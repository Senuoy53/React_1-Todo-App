import React from "react";
import "./index.css";

const TeaItem = ({title,image}) => {
    // Method 2 : si on a plusieurs parametres
    // const {title,image, key} = props
    return (
        

                <div className="box">
                    <img src={image} alt={title}/>
                    <h3>{title}</h3>
                </div>
            
    )
}

// Proprieté defaultProps
// TeaItem.defaultProps = {
//     title: "Rooibos",
//     image:"../../../imgs/tea/5.jpg"
// }

export default TeaItem
