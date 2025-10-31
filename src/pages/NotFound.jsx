import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <Container>
        <Row>
            <Col className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <div className="not-found">
                    <h1>404 - Page Not Found</h1>
                    <p>The page you're looking for doesn't exist.</p>
                    <Link to="/" className="btn btn-primary">
                        Go Back Home
                    </Link>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default NotFound