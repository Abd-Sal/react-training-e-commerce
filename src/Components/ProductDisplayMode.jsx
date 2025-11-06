import { Col, Row } from "react-bootstrap"
import { IoGrid } from "react-icons/io5";
import { PiListLight } from "react-icons/pi";

const ProductDisplayMode = ({gridShape, setGridShape, totalItems=0, category='All Products'}) => {
  return (
    <>
        <Row className="p-2">
          <Col lg={6} className="d-flex align-items-center">
            <p className="mb-0">{totalItems} items in <strong>{category ? category : 'All Products'}</strong></p>
          </Col>
          <Col lg={6}>
            <form className="d-mode d-flex justify-content-end align-items-center">
              <div className="group">
                <label htmlFor="grd" className="btn">
                  <IoGrid className="pointer"/>
                </label>
                <input
                  id="grd"
                  className="hidden-checkbox"
                  type="radio"
                  name="displayStyle"
                  checked={gridShape}
                  onChange={(e)=>{
                    if(e.target.checked)
                      setGridShape(true)
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="list" className="btn">
                  <PiListLight className="pointer"/>
                </label>
                <input
                  id="list"
                  className="hidden-checkbox"
                  type="radio"
                  name="displayStyle"
                  checked={!gridShape}
                  onChange={(e)=>{
                    if(e.target.checked)
                      setGridShape(false)
                  }}
                />
              </div>
            </form>
          </Col>
        </Row>
    </>
  )
}

export default ProductDisplayMode