import { Col, Container, Row } from "react-bootstrap"
import CateHeroSection from "../Components/CateHeroSection"
import MainPartHeroSection from "../Components/MainPartHeroSection"
import ProfileHeroSection, {OfferWithNewSupplier, SendNewSupplier} from "../Components/ProfileHeroSection"
import TimeStapComponent from "../Components/TimeStapComponent"
import OffersTop4Product from "../Components/OffersTop4Product"
import ProductsPackage8 from "../Components/ProductsPackage8"
import RequestToSupplier from "../Components/RequestToSupplier"
import RecommendedProducts from "../Components/RecommendedProducts"
import OurServices from "../Components/OurServices"
import ListCountries from "../Components/ListCountries"
import FullNewsLatterSubscribe from "../Components/FullNewsLatterSubscribe"

const Home = () => {
  return (
    <>
      <div className="home pb-5">
        <Container>
            <Row className="mt-2 mb-2">
                <Col lg={12}>
                  <Row className="bg-white rounded-2 shadow-sm p-2 pt-3 pb-3 mt-3 mb-3">
                    <Col lg={9}>
                      <Row className="h-100">
                        <Col lg={3}>
                          <CateHeroSection/>
                        </Col>
                        <Col lg={9} className={'ps-0 ms-0'}>
                          <MainPartHeroSection/>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={3}>
                      <Row>
                        <Col lg={12} className="mb-3 ps-0 pe-0">
                          <ProfileHeroSection/>
                        </Col>
                        <Col lg={12} className="ps-0 pe-0">
                          <OfferWithNewSupplier/>
                        </Col>
                        <Col lg={12} className="ps-0 pe-0">
                          <SendNewSupplier/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
            </Row>

            <Row className="mb-2 pb-2">
              <Col lg={12} className="rounded-2 border border-secondary-subtle">
                <Row className="h-100 bg-white rounded-2 shadow-sm p-0 pt-0 pb-0">
                  <Col lg={3} className="p-3">
                    <TimeStapComponent days={4} hours={13} minutes={34} seconds={60}/>
                  </Col>
                  <Col lg={9}>
                    <OffersTop4Product colSize={3} query="phone" />
                  </Col>
                </Row>
              </Col>
              <Col lg={12} className="rounded-2 mt-3 mb-3 border border-secondary-subtle">
                <ProductsPackage8 
                  title="Home and outdoor"
                  backgroundURL="../src/assets/HomeAndOutDoor.jpg" 
                  categroy="furniture"
                  limit={8}
                />
              </Col>
              <Col lg={12} className="rounded-2 border border-secondary-subtle">
                <ProductsPackage8
                  title="Consumer electronics and gadgets"
                  backgroundURL="../src/assets/Electronic.png"
                  categroy="smartphones"
                  limit={8}
                />
              </Col>
            </Row>

            <Row className="mb-2 rounded-2 supp-img-back">
              <Col lg={12} className="bg-gradiant rounded-2">
                <RequestToSupplier />              
              </Col>
            </Row>

            <Row className="mb-2 row-cols-5 p-0">
              <RecommendedProducts category="mens-shirts"/>
            </Row>

            <Row className="mb-2 p-0">
              <Col lg={12} className="p-0">
                <h2 className="our-service-test-header">Our extra services</h2>
              </Col>
              <OurServices specialClass={'ps-0 shadow-hover'} img={'../src/assets/search.png'} serviceName={'Source from Industry Hubs'} icon="search" key={0}/>
              <OurServices specialClass={'shadow-hover'} img={'../src/assets/shipping.png'} serviceName={'Customize Your Products'} icon="products" key={1}/>
              <OurServices specialClass={'shadow-hover'} img={'../src/assets/share.png'} serviceName={'Fast, reliable shipping by ocean or air'} icon="share" key={2}/>
              <OurServices specialClass={'pe-0 shadow-hover'} img={'../src/assets/protection.png'} serviceName={'Product monitoring and inspection'} icon="shield" key={3}/>
            </Row>

            <Row className="mb-2 p-0 row-cols-5">
              <Col lg={12} className="p-0 w-100 mt-3 mb-3">
                <h2 className="our-service-test-header">Suppliers by region</h2>
              </Col>
              <ListCountries />
            </Row>
        </Container>
      </div>
      <FullNewsLatterSubscribe />
    </>
  )
}

export default Home