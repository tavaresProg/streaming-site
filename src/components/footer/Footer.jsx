import {AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="social-links">
                <AiFillFacebook/>
                <AiFillInstagram/>
                <AiOutlineTwitter/>
            </div>

            <div className="span-container"><span> ©2023 Series Hub - All rights reserved.</span></div>
        </div>
    )
}

export default Footer