import { Col, Container, Row } from "react-bootstrap"
import AllProducts from "../products/AllProducts"

const Products = () => {
  return (
    <>
      <Container>
          <Row>
              <Col lg={3}>

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