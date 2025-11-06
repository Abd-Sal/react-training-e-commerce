import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap'
import FullNewsLatterSubscribe from '../Components/FullNewsLatterSubscribe'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router';
import ProductImages from '../Components/ProductImages';
import { CallAPIService } from '../Services/CallAPIService';
import { APIConfig } from '../API/APIConfig';

const ProductDetails = () => {
    const [loadingPage, setLoadingPage] = useState(true)
    const [product, setProduct] = useState({});
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
        }
    }, [product]);

    if(loadingPage)
        return(<></>)
    return (
            <>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1>Product Details</h1>
                        </Col>
                        <Col lg={4} className='position-relative'>
                            <ProductImages images={product.images}/>
                            {
                                // console.log(product.images)
                            }
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


