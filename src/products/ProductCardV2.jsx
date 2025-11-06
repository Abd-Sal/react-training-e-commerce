import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router";

const ProductCardV2 = ({id = '', thumbnail = '', title = '', description = '', rating = 0, category = '', price = 0, discountPercentage = 0, cardType = 0}) => {
    switch(cardType){
        case 1:
            return (
                <NavLink to={`/products/${id}`} className="text-decoration-none">
                    <div key={id} className='product-card-v2-type1 rounded-2 mb-3 p-2 h-100 bg-white shadow-sm'> 
                        <div className="top-sec-product-card-1 w-100 d-flex justify-content-center align-items-center mb-3">
                            <img src={thumbnail} alt={category} />      
                        </div>
                        <div className='price-sec d-flex justify-content-start gap-3 align-items-center'>
                            <h3>${parseFloat(price - (price * discountPercentage / 100)).toFixed(2)}</h3>
                            <h4>${parseFloat(price).toFixed(2)}</h4>
                        </div>
                        <div className="rate-sec d-flex justify-content-start gap-1 align-items-center">
                            {ratingRepresentation({rating: rating})}
                            <i>{rating}</i>
                        </div>
                        <h2 className='mt-2 title-product'>{title}</h2>
                    </div>
                </NavLink>
            )
        case 2:
            return (
                <NavLink to={`/products/${id}`} className="text-decoration-none">
                    <div key={id} className='product-card-v2-type-2 rounded-2 p-2 h-100 d-flex flex-column justify-content-start align-items-center gap-3'>
                        <div className="top-sec-product-card w-100 d-flex justify-content-center align-items-center mb-3">
                            <img src={thumbnail} alt={category} />      
                        </div>
                        <h2 className='title-product'>{title}</h2>
                        <div className="discount">
                            -{discountPercentage}%
                        </div>
                    </div>
                </NavLink>
            )
        case 3:
            return (
                <NavLink to={`/products/${id}`} className="text-decoration-none">
                    <div key={id} className='product-card-v2-3 p-2 h-100  w-100 d-flex flex-wrap justify-content-center align-items-center'>
                        <div className="w-100 title-shape-3">
                            {title}
                        </div>
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <div className="left-price w-50">
                                <p>FROM <br /> USD {price}</p>
                            </div>
                            <div className="prod-image w-50">
                                <img src={thumbnail} alt={category} />
                            </div>
                        </div>
                    </div>
                </NavLink>
            )
        case 4:
            return (
                <NavLink to={`/products/${id}`} className="text-decoration-none">
                    <div className='w-100 product-card-v2-type-4 rounded-2 mb-3 p-2 h-100 bg-white border border-secondary-subtle'> 
                        <div className="img-prod-4">
                            <img src={thumbnail}  alt={category} />
                        </div>
                        <div className="pt-2 d-flex flex-column justify-content-start align-items-start gap-2">
                            <h3 className="mb-0">${(parseFloat(price) - parseFloat(price * discountPercentage / 100)).toFixed(2)}</h3>
                            <p className="mb-0">{title}</p>
                        </div>
                    </div>
                </NavLink>
            )
        case 5:
            return (
                <Row className="border border-seconday rounded-2 white product-card-v2-type-5 mb-3 w-100 h-100">
                    <Col lg={4}>
                        <div className="top-sec-product-card-5 d-flex justify-content-center align-items-center gap-2 h-100">
                            <img src={thumbnail} alt={category} />
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="d-flex flex-column justify-content-between align-items-start p-2 h-100">
                            <h4 className='mb-0 title-product-5'>{title}</h4>
                            <div className='price-sec-5 d-flex justify-content-start gap-3 align-items-center'>
                                <h3 className="mb-0">${parseFloat(price - (price * discountPercentage / 100)).toFixed(2)}</h3>
                                <h4 className="mb-0 line">${parseFloat(price).toFixed(2)}</h4>
                            </div>
                            <div className="rate-sec d-flex justify-content-start gap-1 align-items-center">
                                {/* {ratingRepresentation()} */}
                                {ratingRepresentation({rating: rating})}
                                <i>{rating}</i>
                            </div>
                            <p className="mb-0 description-item">{description}</p>
                            <NavLink
                                to={`/products/${id}`} 
                                className='blue-text'
                            >View Detaild</NavLink>
                        </div>
                    </Col>
                </Row>
                    // <div className='border border-seconday rounded-2 white product-card-v2-type-5 mb-3 p-2 d-flex justify-content-between gap-2 w-100 h-100 '> 
                        
                    //     <div className="top-sec-product-card-5 d-flex justify-content-center align-items-center gap-2 h-100">
                    //         <img src={thumbnail} alt={category} />
                    //     </div>
                        // <div className="d-flex flex-column justify-content-between align-items-start p-1 h-100 gap-1">
                        //     <h4 className='mb-0 title-product-5'>{title}</h4>
                        //     <div className='price-sec-5 d-flex justify-content-start gap-3 align-items-center'>
                        //         <h3 className="mb-0">${parseFloat(price - (price * discountPercentage / 100)).toFixed(2)}</h3>
                        //         <h4 className="mb-0 line">${parseFloat(price).toFixed(2)}</h4>
                        //     </div>
                        //     <div className="rate-sec d-flex justify-content-start gap-1 align-items-center">
                        //         {ratingRepresentation()}
                        //         <i>{rating}</i>
                        //     </div>
                        //     <p className="mb-0 description-item">{description}</p>
                        //     <NavLink
                        //         to={`/products/${id}`} 
                        //         className='blue-text'
                        //     >View Detaild</NavLink>
                        // </div>
                    // </div>
            )
        default:
            return (
                <NavLink to={`/products/${id}`} className="text-decoration-none">
                    <div className='product-card-v2-type1 rounded-2 mb-3 p-2 h-100'> </div>
                </NavLink>
            )
    }
}

export default ProductCardV2

export const ratingRepresentation = ({rating})=>{
        const stars = [];
        const integer = Math.floor(rating);
        let rest = parseFloat(rating - integer);
        for (let i = 0; i < 5; i++) {
            if(i < integer)
            {
                stars.push(
                <div key={i}>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" 
                        fill={"#FF9017"}
                    />
                </svg>
                </div>)
                continue;
            }
            if(rest > 0){
                stars.push(
                <div key={i}>
                <svg
                    width={'16'}
                    height={'15'}
                    viewBox="0 0 16 15"
                    fill="none"
                    style={{
                        position: 'relative',
                        clipPath: `inset(0 ${(rest)*100}% 0 0)`
                    }}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z"
                        fill="#FF9017"
                    />
                </svg>
                </div>)
                rest = 0
                continue
            }
            stars.push(
                <div key={i}>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" 
                        fill={"#D5CDC5"}
                    />
                </svg>
                </div>)
        }
        return stars
    }
