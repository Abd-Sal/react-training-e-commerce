import { IoSearchSharp } from "react-icons/io5";
import { TiShoppingBag } from "react-icons/ti";
import { IoSend } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router";

const OurServices = ({img, serviceName, icon='search', specialClass}) => {
  return (
    <Col lg={3} className={specialClass}>
      <NavLink to={'/about-us'}>
        <div className="position-relative  d-flex flex-column justify-content-between align-items-start bg-white rounded-2 h-100" >
            <div className="sev-img w-100">
                <img src={img} alt="our service" className="sev-img w-100"/>
            </div>
            <h3 className="ps-2 pt-1 pb-2 pe-2 w-75 service-desc-text">{serviceName}</h3>
          <div className="position-absolute d-flex justify-content-center align-items-center rounded-5 icon-serv border border-white">
            {
              (icon === 'search' && <IoSearchSharp />) ||
              (icon === 'products' && <TiShoppingBag />) ||
              (icon === 'share' && <IoSend />) ||
              (icon === 'shield' && <FaShieldAlt />)
            }
          </div>
        </div>
      </NavLink>
    </Col>
  )
}

export default OurServices