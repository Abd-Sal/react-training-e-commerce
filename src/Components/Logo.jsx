import { NavLink } from 'react-router'

const Logo = () => {
  return (
    <NavLink to={'/'} className='logo d-flex justify-content-start align-items-center gap-2'>
      <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="9" r="9" fill="#6CA7FF"/>
      <circle cx="24" cy="23" r="5" fill="#96C0FF"/>
      <circle cx="7" cy="25" r="7" fill="#5E9FFF"/>
      </svg>
      <p className='mb-0'>TamStore</p>
    </NavLink>
  )
}

export default Logo