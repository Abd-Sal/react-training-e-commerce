import { FaUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { useEffect, useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router";

const NavbarActions = () => {
  const [logoutShow, setLogoutShow] = useState(false)
  const navigate = useNavigate();

  const logout = () =>{
    if(localStorage.getItem('auth')){
      localStorage.removeItem('auth');
      navigate('/login', { replace: true });
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setLogoutShow(true)
    }
  },[])

  return (
    <div className="d-flex justify-content-between align-items-center gap-3">
      <a href="#" className='nav-action d-flex flex-column justify-content-center align-items-center'>
        <FaUser />
        <p>Profile</p>  
      </a>
      <a href="#" className='nav-action d-flex flex-column justify-content-center align-items-center'>
        <MdFavorite />
        <p>Orders</p>  
      </a>
      <a href="#" className='nav-action d-flex flex-column justify-content-center align-items-center'>
        <TiShoppingCart />
        <p>My Cart</p>  
      </a>
      {
        logoutShow && 
        <button 
          className='btn nav-action d-flex flex-column justify-content-center align-items-center'
          onClick={()=>{
            console.log('logged out')
            logout()
          }}>
            <IoLogOut/>
            <p>Logout</p>
          </button>
      }
    </div>
  )
}

export default NavbarActions