import TeaItem from "../../components/imgTeaCategories";
import CustomHeader from "../../components/CustomHeader";
import { teaData } from "../../utils/constants";
import "./index.css"


const TeaCategories = () => {

  

  const teaItems = teaData.map((teaItem)=> {
    
    return  <TeaItem
        //*** Method 1 : Si on a pas les meme nom dand teaData et props ***
        // key = {teaItem.id}
        // image = {teaItem.image}
        // title = {teaItem.title}
        // *** Method 2: si on a les meme nom dand teaData et props ***
       {...teaItem}
        //*** Method 3 : si on veut pas un element ***
        // const {id,...rest} = teaItem; // il faut la declarée avnt return
        // {...rest}
    />   

  })

 


  return (
   
    
   <section class="teaCategories">
      <div className="img-teaCategories">
            <CustomHeader title="Choisissez votre thé"/>
            {/* {teaData.map(item=><TeaItem key={item.id} image={item.img} title={item.title}/>)} */}
            {teaItems}
      </div>
    </section>          
    
    
    
    
  )
  }  

  export default TeaCategories