import { NavLink } from "react-router"

const MainPartHeroSection = () => {
  return (
    <div className="main-part-hero-section w-100 h-100 rounded-2 ps-5 pt-5">
        <p>Latest trending</p>
        <h2>Electronic items</h2>
        <NavLink to="/products?category=smartphones" className="btn btn-white-native mt-2">
            Learn more
        </NavLink>
    </div>
  )
}

export default MainPartHeroSection