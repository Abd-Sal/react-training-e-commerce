import React, { useEffect, useState } from "react"
import { Alert, Col, Row, Spinner } from "react-bootstrap"
import { APIConfig } from "../API/APIConfig"
import { CallAPIService } from "../Services/CallAPIService"
import { useSearchParams } from "react-router"

const ProductsCategories = React.memo(function ProductsCategories() {
    const [categories, setCategories] = useState({})
    const [loading, setLoading] = useState(false)
    const [failMsg, setFailMsg] = useState('')

    const [searchParams, setSearchParams] = useSearchParams();

    const getCategories = () =>{
        setFailMsg('');
        setLoading(true);
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.PRODUCTS_CATEGORIRES}`;
        CallAPIService.getFetch({
            url: `${url}`
        })
        .then((data) =>{
            setCategories(data)
        })
        .catch((e) =>{
            setFailMsg(e.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    useEffect(()=>{
        getCategories();
    }, [])

  return (
    <>
        <Row>
            {
                loading &&
                <Col lg={12} className='position-relative pt-5 pb-5'>
                    <Spinner animation="border" role="status" className='position-absolute spinner-product-loading'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            }
            {
                failMsg &&
                <Col lg={12} className='pt-5 pb-5'>
                    <Alert key={'faild-msg'} variant={'warning'} className='w-100 font-small'>
                        {failMsg}
                    </Alert>
                </Col>
            }
            {
                !failMsg &&
                <Col lg={12} className="mb-1">
                    <input
                        type="radio"
                        id={'all-categories'}
                        value={''}
                        name={'category'}
                        className="hidden-checkbox"
                        checked={!searchParams.get('category')}
                        onChange={(e)=>{
                            e.target.checked &&
                            setSearchParams('')
                        }}
                    />
                    <label
                        htmlFor="all-categories" 
                        className="info-color button-style-label"
                    >
                    All Products</label>
                </Col>
            }
            {
                Array.isArray(categories) && categories.length > 0 &&
                categories.map((item, index) =>(
                    <Col lg={12} key={index} className="mb-1">
                        <input
                            type="radio"
                            id={item.slug}
                            name={'category'}
                            value={item.slug}
                            className="hidden-checkbox"
                            onChange={(e)=>{
                                e.target.checked &&
                                setSearchParams({'category':e.target.value})
                            }}

                            checked={searchParams.get('category') === item.slug}
                        />
                        <label 
                            htmlFor={item.slug}
                            className="info-color button-style-label"
                        >{item.name}</label>
                    </Col>
                ))
            }
        </Row>
    </>
  )
})
export default ProductsCategories