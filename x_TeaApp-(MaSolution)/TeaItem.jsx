import React from "react";
import "./TeaItem.css";

const TeaItem = (props) => {
    return (
        

                <div className="box">
                    <img src={props.amine} alt={props.fadi}/>
                    <h3>{props.fadi}</h3>
                </div>
            
    )
}

export default TeaItem
