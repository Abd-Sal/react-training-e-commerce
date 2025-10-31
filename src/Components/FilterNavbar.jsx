import { FaListUl } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router";

const FilterNavbar = ({top}) => {
  return (
    <>
        <Container className={top}>
            <Row>
                <Col lg={8}>
                    <div className="filter-nav d-flex justify-content-between align-items-center">
                        <div>
                            <FaListUl />
                            <NavLink
                                to={'/products'}
                                className={({ isActive }) =>
                                    `custom-nav-link ${isActive ? " active" : ""} btn`
                                }
                            >All Categories</NavLink>
                        </div>
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
                                to={'/products?category=smartphones'}
                                className={({ isActive }) =>
                                    `custom-nav-link ${isActive ? " active" : ""} btn`
                                }
                            >Smart phones</NavLink>
                        </div>
                        <div>
                            <NavLink 
                                to={'/products?category=laptops'} 
                                className={({ isActive }) =>
                                    `custom-nav-link ${isActive ? " active" : ""} btn`
                                }
                            >Laptops</NavLink>
                        </div>
                        <div>
                            <NavLink 
                                to={'/products?category=beauty'}
                                className={({ isActive }) =>
                                    `custom-nav-link ${isActive ? " active" : ""} btn`
                                }
                            >Beauty</NavLink>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic" className="border-0">
                                    Help
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item  as="div" to={'/contact-us'}>
                                        <NavLink to={'/contact-us'} className={'btn'}>Contact Us</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item  as="div" to={'/about-us'}>
                                        <NavLink to={'/about-us'} className={'btn'}>About Us</NavLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className="pe-0">
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
        {/* <hr className='pt-0 mt-0'/> */}
    </>
  )
}

export default FilterNavbar