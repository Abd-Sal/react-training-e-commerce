import { Col, Container, Row } from "react-bootstrap"
import AllProducts from "../products/AllProducts"
import ProductsCategories from "../Components/ProductsCategories"
import ProductDisplayMode from "../Components/ProductDisplayMode"
import { useState } from "react"
import FullNewsLatterSubscribe from "../Components/FullNewsLatterSubscribe"

const Products = () => {
  const [gridShape, setGridShape] = useState(true)
  const [totalItems, setTotalItems] = useState(0);
  const [category, setCategory] = useState(0);

  return (
    <>
      <Container>
          <Row>
              <Col lg={3} className="mt-3 mb-1 sticky-top overflow-y-auto" style={{ height: '700px', overflowY: 'auto' }}>
                <ProductsCategories setCategory={setCategory} />
              </Col>
              <Col lg={9} className="">
                <Row>
                  <Col lg={12} className="bg-white rounded-2 border border-secandory mt-3 mb-3">
                    <ProductDisplayMode category={category} totalItems={totalItems} gridShape={gridShape} setGridShape={setGridShape}/>
                  </Col>
                  <Col lg={12} className={`${gridShape ?  '' : 'pe-0'}`}>
                    <AllProducts
                      gridShape={gridShape}
                      setCategory={setCategory}
                      setTotalItems={setTotalItems}
                    />
                  </Col>
                </Row>
              </Col>
          </Row>
      </Container>
      <FullNewsLatterSubscribe classes="mt-2"/>
    </>
  )
}

export default Products