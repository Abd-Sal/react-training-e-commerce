import { useState } from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';
import ProductCardV2 from './ProductCardV2';
import Paginatoin from '../Components/Paginatoin';

const AllProducts = ({gridShape, setTotalItems, setCategory}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  return (
      <Row className='position-relative row-' key={2}>
          {(allProducts.length != 0 ? allProducts.map((item, index)=>(
              <Col lg={gridShape ? 4 : 12} key={item.id} className={`mb-3 pe-0 ${gridShape ? 'special-padding-product-card' : ''}`}>
                <ProductCardV2
                  cardType={gridShape ? 1 : 5}
                  description={!gridShape ? item.description : ''}
                  id={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title} 
                  rating={item.rating}
                  category={item.category}
                  price={item.price}
                  discountPercentage={item.discountPercentage}
                  key={`product-${item.id}`}
                />
              </Col>
          ))
          :
              !loading &&
              <>
              <Col lg={12} className='position-relative pt-5 pb-5'>
                <Alert key={'faild-msg'} variant={'warning'} className='position-absolute top-50 start-50 translate-middle'>
                    {
                      errorMsg ? errorMsg : 'No Results...'
                    }
                </Alert>
              </Col>
              </>
          )}
          {
            loading &&
            <Col lg={12} className='position-relative pt-5 pb-5'>
              <Spinner animation="border" role="status" className='position-absolute spinner-product-loading'>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          }
          <Col lg={12} className={`ps-0 ${gridShape ? 'pe-0' : '' }`}>
            <Paginatoin 
              setCategory={setCategory}
              setTotalItems={setTotalItems}
              setAllProducts={setAllProducts}
              setLoading={setLoading}
              setErrorMsg={setErrorMsg}
              sortingFields={['title', 'price', 'rating']}
            />
          </Col>
      </Row>
  )
}
export default AllProducts