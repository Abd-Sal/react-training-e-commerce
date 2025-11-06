import { useEffect, useState } from "react"
import { Alert, Col, Row, Spinner } from "react-bootstrap"
import { NavLink } from "react-router"
import ProductCardV2 from "../products/ProductCardV2";
import { CallAPIService } from '../Services/CallAPIService';
import { APIConfig } from '../API/APIConfig';

const ProductsPackage8 = ({title, backgroundURL, categroy, limit=8}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState('');

  const getProducts = ()=>{
    setIsLoading(true);
    setIsFailed('');
    CallAPIService.getFetch({
      'limit': limit,
      'skip': 0,
      'url': `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.PRODUCTS_BY_CATEGORIRES(categroy)}`
    })
    .then((data)=>{
      setProducts(data.products);
    })
    .catch((e)=>{
      setIsFailed(e.message);
    })
    .finally(()=>{
      setIsLoading(false);
    })
  }

  useEffect(()=>{
    getProducts();
  }, [])

  return (
    <Row className="h-100 bg-white rounded-2 shadow-sm p-0">
        <Col lg={3} className="p-0">
          <div className="ps-3 pt-3 w-100 h-100 d-flex flex-column rounding-start-end justify-content-start align-items-start gap-3" style={{backgroundImage: `url(${backgroundURL})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h2 className="spec-title">{title}</h2>
            <NavLink to={`/products?category=${categroy}`} className="btn btn-white-native mt-2">
                source now
            </NavLink>
          </div>
        </Col>
        <Col lg={9} className="position-relative h-100 ">
          <Row className="h-50">
            {
              Array.isArray(products) && products.map((item, index)=>{return (
                <Col lg={3} 
                  key={item.id}
                  className={`${index === 0 || index === 4 ? 'border-start' : ''} ${index < 4 ? 'border-bottom' : ''} ${index !== 3 && index !== 7 ?  'border-end' : ''} border-secondary-subtle p-0 h-100`}
                > 
                  <ProductCardV2 
                    cardType={3}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    category={item.category}
                    price={(parseFloat(item.price) - parseFloat(item.price * item.discountPercentage / 100)).toFixed(2)}
                    key={item.id}
                  />
                </Col>
              )})
            }
            {
              isLoading &&
              <Col lg={12}>
                <Spinner animation="border" role="status" className='position-absolute spinner-product-loading'>
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Col>
            }
            {
              isFailed &&
              <Col lg={12}>
                <Alert key={'faild-msg'} variant={'danger'} className='w-75 position-absolute top-50 start-50 translate-middle'>
                    {isFailed}
                </Alert>
              </Col>
            }
          </Row>
        </Col>
    </Row>
  )
}

export default ProductsPackage8