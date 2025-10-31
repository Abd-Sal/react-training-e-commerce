import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
        <a href="#" className="social facebook"><FaFacebook /></a>
        <a href="#" className="social twitter"><FaTwitter /></a>
        <a href="#" className="social linked-in"><FaLinkedinIn /></a>
        <a href="#" className="social instagram"><FaSquareInstagram /></a>
        <a href="#" className="social youtube"><FaYoutube /></a>
    </div>
  )
}

export default SocialMedia