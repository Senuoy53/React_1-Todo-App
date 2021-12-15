import React from "react";
import "./TeaItem.css";

const TeaItem = (props) => {
    return (
        

                <div className="box">
                    <img src={props.img} alt={props.title}/>
                    <h3>{props.title}</h3>
                </div>
            
    )
}

export default TeaItem
