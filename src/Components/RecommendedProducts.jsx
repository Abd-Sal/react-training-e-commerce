import { useState, useEffect } from "react"
import { Alert, Col, Spinner } from "react-bootstrap"
import ProductCardV2 from "../products/ProductCardV2"

const RecommendedProducts = ({category = 'mens-shirts'}) => {
    const [products, setProducts] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [failedMsg, setFailedMsg] = useState('')

  const getProducts = ()=>{
    setIsLoading(true);
    setFailedMsg('');
    fetch(`https://dummyjson.com/products/category/${category}?limit=10`)
    .then((response)=>{
      if(response.ok)
        return response.json();
      return response.json().then((serverError)=>{
          throw new Error(serverError.message || `HTTP ${response.status}`)
      })
    })
    .then((data)=>{
      setProducts(data.products);
    })
    .catch((e)=>{
      setFailedMsg(e.message);
    })
    .finally(()=>{
      setIsLoading(false);
    })
  }

  useEffect(()=>{
    getProducts();
  }, [])

  return (
    <>
        <h2 className="recommended-items-text w-100 mt-3 mb-3 p-0">Recommended items</h2>
        {
            Array.isArray(products) &&
            products.map((item, index, arr)=>(
                <Col 
                  className={`${index === 0 || index === 5 ? 'ps-0' : ''} ${index === arr.length-1 || index === 4 ? 'pe-0' : ''} mb-3`}
                  key={item.id}
                >
                    <ProductCardV2 
                        cardType={4}
                        key={item.id}
                        title={item.title}
                        thumbnail={item.thumbnail}
                        price={item.price}
                        category={item.category}
                        discountPercentage={item.discountPercentage}
                    />
                </Col>
            ))
        }
        {
            isLoading &&
            <Col lg={12} className="position-relative">
                <Spinner animation="border" role="status" className='position-absolute spinner-product-loading'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>            
            </Col>
        }
        {
            failedMsg &&
            <Col lg={12} className="position-relative">
                <Alert key={'faild-msg'} variant={'danger'} className='w-75 position-absolute top-50 start-50 translate-middle'>
                    {failedMsg}
                </Alert>
            </Col>
        }
    </>
  )

//   return (
//     <div className="mt-3 w-100 d-flex flex-wrap justify-content-between align-items-center h-100">
//      
//         {
//             isLoading &&
//             <Spinner animation="border" role="status" className='position-absolute spinner-product-loading'>
//                 <span className="visually-hidden">Loading...</span>
//             </Spinner>
//         }
//         {
//             failedMsg &&
//             <Alert key={'faild-msg'} variant={'danger'} className='w-75 position-absolute top-50 start-50 translate-middle'>
//                 {isFailed}
//             </Alert>
//         }
//     </div>
//   )
}

export default RecommendedProducts