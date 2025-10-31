import { Col, Container, Row } from 'react-bootstrap'
import FullNewsLatterSubscribe from '../Components/FullNewsLatterSubscribe'

const ProductDetails = () => {
  return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1>Product Details Page</h1>
                    </Col>
                </Row>
            </Container>
            <FullNewsLatterSubscribe />
        </>
    )
}

export default ProductDetails


