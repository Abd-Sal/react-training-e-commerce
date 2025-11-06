import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap'
import FullNewsLatterSubscribe from '../Components/FullNewsLatterSubscribe'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router';
import ProductImages from '../Components/ProductImages';
import { CallAPIService } from '../Services/CallAPIService';
import { APIConfig } from '../API/APIConfig';
import { ratingRepresentation } from '../products/ProductCardV2';

const ProductDetails = () => {
    const [loadingPage, setLoadingPage] = useState(true)
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [fail, setFail] = useState('');
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true)
        setFail('')
        CallAPIService.getFetch({
            'url': `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.PRODUCT_BY_ID(id)}`
        })
        .then((data)=>{
            setProduct(data);
        })
        .catch((e)=>{
            setFail(e.message);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[id])

    useEffect(() => {
        if (product) {
            setLoadingPage(false)
            console.log(product);
        }
    }, [product]);

    if(loadingPage)
        return(<></>)
    return (
            <>
                <Container>
                    <Row>
                        <Col lg={12} className='position-relative white rounded-2 border border-gray mt-3 mb-3'>
                            <Row>
                                {
                                    product &&
                                    <Col lg={4}>
                                        <ProductImages images={product.images}/>
                                    </Col>
                                }
                                {
                                    product &&
                                    <Col lg={8}>

                                        <div className="product-details">
                                            {/* Product Header */}
                                            <div className="product-header">
                                                <h1 className="product-title">{product.title}</h1>
                                                <p className="product-brand">by {product.brand}</p>
                                                <div className='d-flex justify-content-start align-items-center gap-1'>
                                                    {ratingRepresentation({
                                                        rating: product.rating
                                                    })}
                                                    <div className='ps-5'>
                                                        <i>{product.rating}</i>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Product Info */}
                                            <div className="product-info">
                                                <div className="price-section">
                                                <span className="current-price">${product.price}</span>
                                                {product.discountPercentage > 0 && (
                                                    <span className="original-price">
                                                    ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                                    </span>
                                                )}
                                                {product.discountPercentage > 0 && (
                                                    <span className="discount-badge">{product.discountPercentage}% OFF</span>
                                                )}
                                                </div>

                                                <p className="product-description">{product.description}</p>

                                                {/* Stock Status */}
                                                <div className="stock-info">
                                                    <span className={`stock-status ${product.availabilityStatus.toLowerCase().replace(' ', '-')}`}>
                                                        {product.availabilityStatus}
                                                    </span>
                                                    <span className="stock-count">{product.stock} units available</span>
                                                </div>

                                                {/* Key Details */}
                                                <div className="key-details">
                                                    <div className="detail-item">
                                                        <strong>Category:</strong> {product.category}
                                                    </div>
                                                    <div className="detail-item">
                                                        <strong>SKU:</strong> {product.sku}
                                                    </div>
                                                    <div className="detail-item">
                                                        <strong>Weight:</strong> {product.weight}g
                                                    </div>
                                                    <div className="detail-item">
                                                        <strong>Dimensions:</strong> {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="product-tags">
                                                {product.tags.map((tag, index) => (
                                                    <span key={index} className="tag">{tag}</span>
                                                ))}
                                                </div>

                                                {/* Shipping & Warranty */}
                                                <div className="service-info">
                                                <div className="info-item">
                                                    <strong>Shipping:</strong> {product.shippingInformation}
                                                </div>
                                                <div className="info-item">
                                                    <strong>Warranty:</strong> {product.warrantyInformation}
                                                </div>
                                                <div className="info-item">
                                                    <strong>Return Policy:</strong> {product.returnPolicy}
                                                </div>
                                                <div className="info-item">
                                                    <strong>Minimum Order:</strong> {product.minimumOrderQuantity} units
                                                </div>
                                                </div>
                                            </div>

                                            {/* Reviews Section */}
                                            <div className="reviews-section">
                                                <h3>Customer Reviews ({product.reviews.length})</h3>
                                                <div className="reviews-list">
                                                {product.reviews.map((review, index) => (
                                                    <div key={index} className="review-card">
                                                    <div className="review-header">
                                                        <span className="reviewer-name">{review.reviewerName}</span>
                                                        <span className="review-rating">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                                                        <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
                                                    </div>
                                                    <p className="review-comment">{review.comment}</p>
                                                    </div>
                                                ))}
                                                </div>
                                            </div>

                                            {/* Meta Information */}
                                            <div className="meta-info">
                                                <small>
                                                Product added: {new Date(product.meta.createdAt).toLocaleDateString()} | 
                                                Last updated: {new Date(product.meta.updatedAt).toLocaleDateString()}
                                                </small>
                                            </div>
                                        </div>
                                    </Col>
                                }
                            </Row>
                        </Col>
                        {
                            fail &&
                            <Col lg={12} className='position-relative'>
                                <Alert key={'faild-msg'} variant={'danger'} className='w-100 position-absolute top-50 start-50 translate-middle'>
                                    {fail}
                                </Alert>
                            </Col>
                        }
                        {
                            loading &&
                            <Col lg={12} className='position-relative'>
                                <Spinner animation="border" role="status" className='position-absolute spinner-product-loading'>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </Col>
                        }
                    </Row>
                </Container>
                <FullNewsLatterSubscribe />
            </>
        )
}

export default ProductDetails


