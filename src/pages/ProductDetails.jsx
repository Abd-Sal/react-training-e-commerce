import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap'
import FullNewsLatterSubscribe from '../Components/FullNewsLatterSubscribe'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router';
import ProductImages from '../Components/ProductImages';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [fail, setFail] = useState('');
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true)
        setFail('')
        fetch(`https://dummyjson.com/products/${id}`)
        .then((response)=>{
            if(response.ok)
                return response.json()
            return response.json().then((serverError)=>{
                throw new Error(serverError.message || `HTTP ${response.status}`)
            })
        })
        .then((data)=>{
            setProduct(data);
        })
        .catch((e)=>{
            setFail(e.message);
            console.log(e.message);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[id])

    return (
            <>
                <Container>
                    <Row>
                        <Col lg={4} className='position-relative'>
                            <ProductImages images={product.images}/>
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


