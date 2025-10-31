import { Col } from "react-bootstrap"
import { MdOutlineMail } from "react-icons/md";

const SubscribeNewsLatter = () => {
  return (
    <>
        <Col lg={6}>
            <div className="w-100 d-flex flex-column justify-content-center align-items-center gap-3 pt-5 pb-5">
                <h2 className="new-h">Subscribe on our newsletter</h2>
                <p className="new-p">Get daily news on upcoming offers from many suppliers all over the world</p>
                <form action="" className="w-100">
                    <div className="d-flex justify-content-center align-items-center gap-2 w-100 position-relative">
                        <MdOutlineMail className="position-absolute mail-icon"/>
                        <input 
                            type="text"
                            className="form-control ps-5 pe-5"
                            placeholder="Email"
                        />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </form>
            </div>
        </Col>
    </>
  )
}

export default SubscribeNewsLatter