import { useContext, useEffect, useRef, useState } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router";
import Logo from "../Components/Logo";
import { AuthContext } from "../context/AuthContext";
import { APIConfig } from "../API/APIConfig";
import { CallAPIService } from "../Services/CallAPIService";

const Login = () => {
    // const {setAuth} = useContext(AuthContext)
    const {auth, setAuth, isInitialized} = useContext(AuthContext)

    const [userInfo, setUserInfo] = useState({
        'name': '',
        'pass': ''
    })

    const [loading, setLoading] = useState(false)
    const [faildStatus, setFaildStatus] = useState('');
    const [success, setSuccess] = useState(false)
    const [preAuthCheck, setPreAuthCheck] = useState(false)
    const navigate = useNavigate();
    const username = useRef();
    const password = useRef();
    const loginRequest = () =>{
        setFaildStatus('')
        setLoading(true);
        fetch('https://tamkeen-dev.com/api/user/login?_format=json',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(userInfo)
        })
        .then((response)=>{
            if(response.ok){
                setSuccess(true)
                return response.json();
            }
            return response.json().then((serverErrorMsg) => { throw new Error(serverErrorMsg.message)})
        })
        .then((data) => {
            let _data = data
            setAuth({
                ...auth,
                data,
                'ps' : `basic ${btoa(`${userInfo.name}:${userInfo.pass}`)}`
            })
            localStorage.setItem('auth', JSON.stringify(_data));
        })
        .catch((e)=>{
            setFaildStatus(e.message)
        })
        .finally(()=>{
            setLoading(false);
            username.current ? username.current.value = '': '';
            password.current ? password.current.value = '': '';
            username.current ? username.current.focus() : '';
        })
    }
   
    useEffect(()=>{
        if(success){
            navigate('/', { replace: true });
            return;
        }
        const authData = localStorage.getItem('auth')
        if(localStorage.getItem('auth')){
            if(authData.includes('id') && authData.includes('token')){
                navigate('/', { replace: true });
                return;
            }
        }
        setPreAuthCheck(true)
    }, [success, preAuthCheck])

    // useEffect(()=>{
    //     if(!success)
    //         return;
    //     let url = `${APIConfig.BASE_URL_TAMKEEN}${APIConfig.ENDPOINTS_TAMKEEN.USER}?_format=json`;
    // }, [])

    if(preAuthCheck)
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={{span: 6, offset: 3 }} className="vh-100 d-flex flex-column justify-content-center align-items-start gap-4">
                            <form action=""
                                className="w-100 d-flex flex-column justify-content-center align-items-start gap-4"
                                onSubmit={(e)=>{
                                    e.preventDefault();
                                    loginRequest()
                                }}
                            >
                                <div className="w-100 d-flex justify-content-center align-items-center">
                                    <Logo/>
                                </div>
                                <h1>Login</h1>
                                {
                                    faildStatus &&
                                    <Alert key={'danger'} variant={'danger'} className="w-100">
                                        {faildStatus}
                                    </Alert>
                                }
                                <input 
                                    type="text"
                                    placeholder="Username"
                                    className="form-control"
                                    ref={username}
                                    onInput={(e)=>{
                                        setUserInfo({
                                            ...userInfo,
                                            'name': e.target.value
                                        })
                                    }}
                                    />
                                <input 
                                    type="password"
                                    placeholder="******"
                                    className="form-control"
                                    ref={password}
                                    onInput={(e)=>{
                                        setUserInfo({
                                            ...userInfo,
                                            'pass': e.target.value
                                        })
                                    }}
                                    />
                                <p>if you do not have account, <NavLink to={'/registration'} className={'primary-color'}>Create Account</NavLink>.</p>
                                <button 
                                    className="btn btn-dark w-100"
                                    onClick={loginRequest}
                                    disabled={!userInfo.name || !userInfo.pass || loading}
                                    >Login</button>
                                    {loading && userInfo.name && userInfo.pass ? 
                                        <div className="w-100 d-flex justify-content-center align-items-center">
                                            <Spinner animation="grow"/>
                                        </div> :
                                        ''
                                    }
                            </form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    return(<></>)
}

export default Login