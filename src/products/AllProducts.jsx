import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Pagination, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import { useSearchParams } from 'react-router';
import ProductCardV2 from './ProductCardV2';

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [cat, setCat] = useState('')

  useEffect(()=>{
    setLoading(true);
    let url = 'https://dummyjson.com/products/';
    let search = searchParams.get("search");
    let category = searchParams.get("category")
    if(search)
      url += `search?q=${search}`
    if(category){
      url += `category/${category}`
    }
    fetch(`${url}`)
      .then((res) =>{
        if(res.ok)
          return res.json()
        throw new Error({msg: 'Not Fetched', res: res.json()})
      } )
      .then((data) =>{
          setAllProducts(data.products);
      })
      .catch((e) => {
        console.log(e.message.msg)
      })
      .finally(()=>{ 
        setLoading(false);
      })
  },[searchParams])

  return (
      <Row className='position-relative' key={2}>
          {(allProducts.length != 0 ? allProducts.map((item)=>(
              <Col lg={4} key={item.id} className='pe-0 mb-3'>
                <ProductCardV2
                  cardType={1}
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
                <Alert key={'faild-msg'} variant={'warning'} className='w-100 position-absolute top-50 start-50 translate-middle'>
                    No Results...
                </Alert>
              </Col>
              </>
          )}
          {
            loading &&
            <Spinner animation="border" role="status" className='position-absolute spinner-product-loading'>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
      </Row>
  )
}

export default AllProducts