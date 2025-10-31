import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router";
import Logo from "../Components/Logo";
import { useState } from "react";
import SuccededRegister from "../Components/SuccededRegister";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Registration = () => {
    const [registerData, setRegisterData] = useState({
            "name": {
                "value": ""
            },
            "field_name": {
                "value": ""
            },
            "field_surname": {
                "value": ""
            },
            "mail": {
                "value": ""
            },
            "field_mobile": {
                "value": ""
            },
            "field_gender": {
                "target_id": 9
            },
            "pass": {
                "value": ""
            }
        });

    const [isFailed, setIsFailed] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPass, setShowPass] = useState('password');

    const postData = ()=>{
        setIsLoading(true);
        setIsFailed('')
        fetch('https://tamkeen-dev.com/api/user/registerpass?_format=json',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(registerData)
        })
        .then((response) => {
            if(!response.ok)
                throw new Error(response.json())
            return response.json();
        })
        .then((data)=>{
            setIsSuccess(true);
        })
        .catch((e)=>{
            setIsFailed(e.message);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }    
    return (
        <>
            <Container>
                <Row>
                    <Col lg={{span: 6, offset: 3 }} className="vh-100 d-flex flex-column justify-content-center align-items-start gap-4">
                        <Alert variant="danger" className={`w-100 ${isFailed ? '' : 'd-none'}`}>
                            Registration failed, please try again.
                        </Alert>
                        <form action=""
                            className="w-100 d-flex flex-column justify-content-center align-items-start gap-3"
                            onSubmit={(e)=>{
                                e.preventDefault();
                                postData()
                            }}
                        >
                            <div className="w-100 d-flex justify-content-center align-items-center">
                                <Logo/>
                            </div>
                            <h4>Create New Account, if you have account <NavLink to={'/login'} className={'primary-color'}>Sign in</NavLink></h4>
                            <input 
                                type="text"
                                placeholder='Username'
                                className='form-control'
                                required
                                onInput={(e)=>{
                                    setRegisterData({
                                            ...registerData,
                                            "name": {
                                                "value": e.target.value
                                            }
                                        }
                                    )
                                }}
                            />
                            <input 
                                type="text"
                                placeholder='First Name'
                                className='form-control'
                                required
                                onInput={(e)=>{
                                    setRegisterData({
                                            ...registerData,
                                            "field_name": {
                                                "value": e.target.value
                                            }
                                        })
                                }}
                            />
                            <input 
                                type="text"
                                placeholder='Last Name'
                                className='form-control'
                                required
                                onInput={(e)=>{
                                    setRegisterData({
                                            ...registerData,
                                            "field_surname": {
                                                "value": e.target.value
                                            }
                                        })
                                }}
                            />
                            <input 
                                type="email"
                                placeholder='example@email.com'
                                className='form-control'
                                required
                                onInput={(e)=>{
                                    setRegisterData({
                                            ...registerData,
                                            "mail": {
                                                "value": e.target.value
                                            }
                                        }
                                    )
                                }}
                            />
                            <input 
                                type="text"
                                placeholder='ex: 0955 000 000'
                                className='form-control'
                                required
                                onInput={(e)=>{
                                    setRegisterData({
                                            ...registerData,
                                            "field_mobile": {
                                                "value": e.target.value
                                            }
                                        }
                                    )
                                }}
                            />
                            <select 
                                id="gender" 
                                className='form-select'
                                onChange={(e)=>{
                                    setRegisterData({
                                            ...registerData,
                                            "field_gender": {
                                                "target_id": e.target.value
                                            }
                                    })
                                }}
                            >
                                    <option value="9">Male</option>
                                    <option value="10">Female</option>
                            </select>
                            <div className="position-relative w-100">
                                <input 
                                    type={showPass}
                                    placeholder='******'
                                    className='w-100 form-control'
                                    required
                                    onInput={(e)=>{
                                        setRegisterData({
                                                ...registerData,
                                                "pass": {
                                                    "value": e.target.value
                                                }
                                            })
                                    }}
                                />
                                <button type="button"
                                    className="btn rounded-5 position-absolute top-50 end-0 translate-middle-y btn btn-light btn-sm rounded-0"
                                    onClick={()=>{
                                        if(showPass === 'password'){
                                            setShowPass('text')
                                        } else {
                                            setShowPass('password')
                                        }
                                    }}
                                >
                                    {
                                        showPass === 'password' ? <FaEye /> : <FaEyeSlash />
                                    }
                                </button>
                            </div>
                            <button 

                                className='w-100 btn btn-dark' 
                                disabled={isLoading}>
                                Register
                            </button>
                        </form>
                        {
                            isSuccess &&
                            <SuccededRegister
                                title={'Successfully Registration'}
                                message={`Hi ${registerData.name.value}, your registration process completed, please do activation through the link you received on registered email, then login.`}
                                newRoute={'/login'}/>
                        }
                        {
                            isLoading &&
                            <div className="w-100 d-flex justify-content-center align-items-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Registration