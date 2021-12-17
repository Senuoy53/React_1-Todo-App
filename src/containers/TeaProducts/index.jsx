import "./index.css"
import ProductBox from "../../components/ProductBox"
import {productData} from "./utils/contsants"

const TeaProducts = () => {

    const teaProducts = productData.map((teaProduct)=> {
    
        return  <ProductBox
        {...teaProduct}
        
        // title= {teaProduct.tilte}
        // img= {teaProduct.img}
        // libelle = {teaProduct.libelle}
        // description = {teaProduct.description}
        // partir = {teaProduct.partir}
        // price= {teaProduct.price}
        // btn = {teaProduct.btn}
        
        />   

    })
    
    return (
        <section class="teaProducts">
            <div class="products-container">
                {teaProducts}
               
            </div>
        </section>
    )
}

export default TeaProducts

