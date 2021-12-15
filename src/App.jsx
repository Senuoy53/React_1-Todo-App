import React from "react";
import TeaItem from "./components/TeaApp/TeaItem";
import Header from "./components/TeaApp/Header";
import "./App.css"


const App = () => {

  const info = [
            { id: 1, img:"../../../imgs/tea/1.jpg", title:"Thé noir" },
            { id: 2, img:"../../../imgs/tea/2.jpg", title:"Thé vert" },
            { id: 3, img:"../../../imgs/tea/3.jpg", title:"Oolong" },
            { id: 4, img:"../../../imgs/tea/4.jpg", title:"Thé blanc" },
            { id: 5, img:"../../../imgs/tea/5.jpg", title:"Rooibos" },
            { id: 6, img:"../../../imgs/tea/5.jpg", title:"Rooibos" },
          ]

  const teaItems = info.map((teaItem)=> {
    return  <TeaItem
        key = {teaItem.id}
        img = {teaItem.img}
        title = {teaItem.title}
    />   

  })


  return (
   
    <div className='App'>
          <Header/>
      <div className="img-teaCategories">
          {teaItems}
      </div>
    </div>
    
    
    
    
  );
}

export default App
