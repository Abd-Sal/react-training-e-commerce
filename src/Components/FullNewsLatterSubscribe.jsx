import { Col, Container, Row } from "react-bootstrap"
import SubscribeNewsLatter from "./SubscribeNewsLatter"

const FullNewsLatterSubscribe = () => {
    return (
        <>
            <div className="news-color">
                <Container>
                    <Row>
                        <Col lg={3}></Col>
                        <SubscribeNewsLatter />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default FullNewsLatterSubscribe