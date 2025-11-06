import { Col, Container, Row } from "react-bootstrap"
import AllProducts from "../products/AllProducts"
import ProductsCategories from "../Components/ProductsCategories"

const Products = () => {
  return (
    <>
      <Container>
          <Row>
              <Col lg={3} className="sticky-top overflow-y-auto" style={{ height: '700px', overflowY: 'auto' }}>
                <ProductsCategories />
              </Col>
              <Col lg={9}>
                  <AllProducts />
              </Col>
          </Row>
      </Container>
    </>
  )
}

export default Products