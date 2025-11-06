import { Col, Container, Row } from "react-bootstrap"
import SubscribeNewsLatter from "./SubscribeNewsLatter"

const FullNewsLatterSubscribe = ({classes = ''}) => {
    return (
        <>
            <div className={`news-color ${classes}`}>
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