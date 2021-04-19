import React from 'react';
import {ImSkype} from 'react-icons/im';
import {FaTwitter,FaYoutube} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import "../css/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <ImSkype color="#00AFF0"/>
                <FaTwitter color="#1DA1F2" />
                <FaYoutube color="#FF0000" />
                <FcGoogle />
            </div>
            <div className="copyright">
                <p>Copyright &copy; Raj Solanki 2021</p>
            </div>
        </div>
    );
}

export default Footer;