import { Col, Row } from 'react-bootstrap'

const RequestToSupplier = () => {
  return (
    <>
        <Row>
            <Col lg={6}>
                <div className='sup-texts d-flex flex-column justify-content-start align-items-start pt-5 ps-5'>
                    <h2>An easy way to send requests to all suppliers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className=' h-100 w-100'>
                    <form action=""
                        onSubmit={(e)=>{e.preventDefault()}}
                    >
                        <div className='w-100 p-3 mt-5 mb-5 bg-white rounded-2 d-flex flex-column justify-content-start align-items-start gap-3'>
                            <h2>Send quote to suppliers</h2>
                            <input 
                                type="text"
                                placeholder='What item you need?'
                                className='form-control '
                            />
                            <textarea name="" id=""
                                className='form-control'
                            ></textarea>
                            <div className='w-100 d-flex justify-content-start align-items-center gap-2'>
                                <input
                                    type="test"
                                    className='form-control w-50'
                                    placeholder='Quantity'
                                    name="" id="" />
                                <select
                                    className='form-select w-25'
                                >
                                    <option value="Pcs">Pcs</option>
                                    <option value="Kg">Kg</option>
                                    <option value="M2">M^2</option>
                                </select>
                            </div>
                            <button className='btn btn-primary'>Send inquiry</button>
                        </div>
                    </form>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default RequestToSupplier