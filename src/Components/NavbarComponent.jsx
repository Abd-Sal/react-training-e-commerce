import { Container, Col, Row } from 'react-bootstrap'
import Logo from './Logo'
import SearchNavbar from './SearchNavbar'
import NavbarActions from './NavbarActions'
import FilterNavbar from './FilterNavbar'

const NavbarComponent = ({showNavFilter=true}) => {
  return (
    <>
      <div className='bg-white'>
          <Container className='pt-2'>
              <Row className='mb-0 pb-0'>
                  <Col lg={2}>
                      <Logo/>
                  </Col>
                  <Col lg={7}>
                    <SearchNavbar/>
                  </Col>
                  <Col lg={3} className='d-flex justify-content-end align-items-center pe-0'>
                    <NavbarActions/>
                  </Col>
              </Row>
          </Container>
          <hr className='pt-0 mt-0'/>
          {
            showNavFilter 
            ? <FilterNavbar top={'pb-2'}/>
            : ''
          }
          {/* <hr className='pt-0 mt-0'/> */}
      </div>
    </>
  )
}

export default NavbarComponent