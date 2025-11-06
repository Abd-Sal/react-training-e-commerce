import { FaListUl } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CallAPIService } from "../Services/CallAPIService";
import { APIConfig } from "../API/APIConfig";

const FilterNavbar = ({top}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [failMsg, setFailMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState({});

    const navigate = useNavigate();

    const getCategories = ()=>{
        setFailMsg('')
        setLoading(true);
        CallAPIService.getFetch({
            'url': `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.PRODUCTS_CATEGORIRES}`
        })
        .then((data)=>{
            setCategories(data)
        })
        .catch((err)=>{
            setFailMsg(err.message)
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    useEffect(()=>{
        getCategories();
    }, [])

    return (
    <>
        <Container className={top}>
            <Row>
                <Col lg={7}>
                    <div className="filter-nav d-flex justify-content-between align-items-center">
                        <div className="off-canves-btn">
                            <FaListUl />
                            <Button
                                className='btn off-canves-btn'
                                onClick={handleShow}
                            >All Categories</Button>
                        </div>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>All Categories</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="cat-canves w-100 border-bottom border-primary" key={'index'}>
                                    <button
                                        className="btn ps-2 w-100 rounded-0 d-flex justify-content-start align-items-center"
                                        onClick={()=>{
                                            navigate(`/products`)
                                        }}
                                    >All Products</button>
                                </div>
                                {
                                    Array.isArray(categories) && categories &&
                                    categories.map((item, index)=>(
                                        <div className="cat-canves w-100 border-bottom border-primary" key={index}>
                                            <button
                                                className="btn ps-2 w-100  d-flex justify-content-start align-items-center"
                                                onClick={()=>{
                                                    navigate(`/products?category=${item.slug}`)
                                                }}
                                            >{item.name}</button>
                                        </div>
                                    ))
                                }
                                {
                                    loading &&
                                    <Spinner animation="border" role="status" className='spinner-product-loading'>
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                }
                                {
                                    failMsg &&
                                    <Alert key={'faild-msg'} variant={'warning'} className='w-100 top-50 start-50 translate-middle'>
                                        {failMsg}
                                        <i 
                                            className="ms-2 clickable"
                                            onClick={()=>{getCategories()}}
                                        > Try Load Categories</i>
                                    </Alert>
                                }
                            </Offcanvas.Body>
                        </Offcanvas>
                        <div>
                            <NavLink 
                                to={'/'}
                                className={({ isActive }) =>
                                    `custom-nav-link ${isActive ? " active" : ""} btn`
                                }
                            >Home</NavLink>
                        </div>
                        <div>
                            <NavLink 
                                to={'/products'}
                                className={({ isActive }) =>
                                    `custom-nav-link ${isActive ? " active" : ""} btn`
                                }
                            >products</NavLink>
                        </div>
                        <div>
                            <NavLink 
                                to={'/about-us'} 
                                className={({ isActive }) =>
                                    `custom-nav-link ${isActive ? " active" : ""} btn`
                                }
                            >About Us</NavLink>
                        </div>
                        <div>
                            <NavLink 
                                to={'/contact-us'}
                                className={({ isActive }) =>
                                    `custom-nav-link ${isActive ? " active" : ""} btn`
                                }
                            >Contact Us</NavLink>
                        </div>
                    </div>
                </Col>
                <Col lg={5} className="pe-0">
                    <div className="filter-nav d-flex justify-content-end align-items-center gap-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="white" id="dropdown-basic-money" className="border-0">
                                English, USD
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item  as="div">English, USD</Dropdown.Item>
                                <Dropdown.Item  as="div">Germany, Euro</Dropdown.Item>
                                <Dropdown.Item  as="div">Syria, Pound</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="white" id="dropdown-basic-country" className="border-0">
                                Ship To 🇩🇪 
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item  as="div">🇩🇪 Germany</Dropdown.Item>
                                <Dropdown.Item  as="div">🇺🇸 United States</Dropdown.Item>
                                <Dropdown.Item  as="div">🇸🇾 Syria</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default FilterNavbar