import "./index.css"


const ProductBox = ({title, img, libelle, description, partir ,price,btn }) => {
    return (

         <div className="box">
                    <h2>{title}</h2>
                    <img src={img} alt=""/>
                    <h3>{libelle}</h3>
                    <p>{description}</p>
                    <p>{partir}</p>
                    <p className="price">{price}</p>
                    <button type="button" className="btn">{btn}</button>

         </div>
    )
}

ProductBox.defaultProps = {
   partir: "À partie de",
   btn:"VOIR CE PRODUIT"
}

export default ProductBox