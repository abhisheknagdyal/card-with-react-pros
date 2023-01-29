import "./card.css";
// import{FaCircle,} from "react-icons/fa"

const Card = ({category}) =>{
    const {imageUrl, title, price, pCode, rating} = category;
    
    return(
        <div className="card-container">
            <div className="card">
                <div className="image">
                    <img src={`${imageUrl}`} alt=" cloth img"/>
                    <div className="like">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div className="discount-img">
                        -20%
                    </div>
                </div>
                <div className="title-price">
                    <p>{title}</p>
                    <p>${price}</p>
                </div>
                <div className="icons">
                    <div className="icon">
                        <i class="fa-regular fa-circle"></i>
                        <i class="fa-regular fa-circle"></i>
                        <i class="fa-regular fa-circle"></i>
                    </div>
                    <div className="size">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                    </div>
                </div>
                <div className="buy">
                    <p><span><i class="fa-regular fa-star"></i></span> {rating}</p>
                    <p>BUY+</p>    
                </div>
            </div>
            
            <div className="promo">
                <div className="code">
                    <p>Happy Monday</p>
                    <p>#{pCode}</p>
                </div>

               <div className="discount">
                <div>20% off</div>
               </div> 
            </div>
        </div>
    )
}

export default Card;