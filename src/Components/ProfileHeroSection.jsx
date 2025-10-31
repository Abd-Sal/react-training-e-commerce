import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ProfileHeroSection = () => {
  const {authInfo} = useContext(AuthContext);

  const [auth, setAuth] = useState({
    'current_user': {
      'name': `${authInfo ? `${authInfo.current_user.name}` : 'Unknown'}`
    }
  });
  useEffect(()=>{
    const authData = localStorage.getItem('auth')
    if(authData){
      if(authData.includes('id') && authData.includes('token'))
        setAuth(JSON.parse(authData));
    }
  },[])
  return (
    <div className="profile shadow-sm p-4 pt-2 pb-2 rounded-2 d-flex flex-column justify-content-between align-items-center gap-2">
        <div className="w-100 pro-details d-flex justify-content-start align-items-center gap-4">
            <div className="img">
                <img src='..\..\src\assets\profile-men.png' alt="profile" />
            </div>
            <p className="mb-0">Hi, {auth.current_user.name} <br />let’s get stated</p>
        </div>
        <button disabled={auth} className="btn btn-primary w-100">
          <NavLink to={'login'}>
              Join now
          </NavLink>
        </button>
        <button disabled={auth} className="btn login-btn w-100">
          <NavLink to={'login'}>
              Log in
          </NavLink>
        </button>
    </div>
  )
}

export default ProfileHeroSection;


export const OfferWithNewSupplier = () => {
  return (
    <NavLink to={'about-us'}>
        <div className="w-100 offer-by-supplier shadow-sm p-3 pt-2 pb-2 rounded-2 mt-2 mb-1 d-flex justify-content-start align-items-center">
            <h4>Get US $10 off <br /> with a new <br /> supplier</h4>
        </div>
    </NavLink>
  )
}

export const SendNewSupplier = () => {
  return (
    <NavLink to={'about-us'}>
        <div className="w-100 h-100 send-by-supplier shadow-sm p-3 pt-2 pb-2 rounded-2 mt-2 d-flex justify-content-start align-items-center">
            <h4>Send quotes with <br /> supplier <br />preferences</h4>
        </div>
    </NavLink>
  )
}
