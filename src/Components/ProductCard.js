import "./ProductCard.css";
import {Card, CardActions,
    CardContent,
    CardMedia,} from "@mui/material";

const ProductCard = (props)=>{
    // console.log(props.product,"fvfvf");
    return (
        <>
        <div className="card">
        <div className="card-img">
            <img src ={props.product.image} alt={props.product.id} className="img-tag"/>
        </div>
        <div className="card-text">
            <div className="product-title">{props.product.title}</div>
            <div className="card-sub-text">Sign in or Create an account to see pricing</div>
        </div>

        </div>
        </>
    )
};

export default ProductCard;