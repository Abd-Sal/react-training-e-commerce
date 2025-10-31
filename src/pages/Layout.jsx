import { Outlet, useNavigate } from "react-router"
import Footer from "../Components/Footer"
import NavbarComponent from "../Components/NavbarComponent"
import { useState, useEffect } from "react"
const Layout = ({children}) => {
  const [logoutShow, setLogoutShow] = useState(false)
  const navigate = useNavigate();

  useEffect(()=>{
    const authData = localStorage.getItem('auth')
    if(localStorage.getItem('auth')){
      if(authData.includes('id') && authData.includes('token')){
        setLogoutShow(true)
        return;
      }
    }
    navigate('login', { replace: true });
  },[])

  if(logoutShow)
    return (
      <>
        <div className={"wrapper"}>
          <header>
              <NavbarComponent/>
          </header>
          <main>
              <Outlet />
          </main>
          <footer>
              <Footer/>
          </footer>
        </div>
      </>
    )

    return(
      <></>
    )
}

export default Layout