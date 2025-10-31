import { useEffect, useState } from "react"
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import ProductCardV2 from "../products/ProductCardV2";

const OffersTop4Product = ({query = 'phone', colSize = 3}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [failed, setFailed] = useState('');

    useEffect(()=>{
        setLoading(true);
        fetch(`https://dummyjson.com/products/search?q=${query}&limit=4`)
        .then(res => {
            if(res.ok) 
                return res.json()
            throw new Error('Couldn`t load products :(');
        })
        .then(data => {
            setProducts(data.products);
        })
        .catch((err)=>{
            setFailed(err.message)
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [])

    return (
        <>
        <Row className="h-100">
            {
                products && products.map((item)=>(
                    <Col lg={colSize} key={item.id} className="border-start border-secondary-subtle">
                        <ProductCardV2
                            key={item.id}
                            id={item.id}
                            cardType={2}
                            thumbnail={item.thumbnail}
                            category={item.category}
                            title={item.title}
                            discountPercentage={item.discountPercentage}
                        />
                    </Col>
                ))
            }
        {
            loading && 
            (<Col lg={12} className="position-relative">
              <Spinner animation="border" role="status" className='position-absolute spinner-product-loading'>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>)
        }
        {
            failed &&
            <Col lg={12} className="position-relative">
                <Alert key={'faild-msg'} variant={'danger'} className='w-75 position-absolute top-50 start-50 translate-middle'>
                    {failed}
                </Alert>
            </Col>
            
        }
        </Row>
        </>
    )
}

export default OffersTop4Product