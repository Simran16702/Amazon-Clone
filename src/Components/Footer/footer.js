import React from 'react';
import './footer.css';
import amazonLogo from '../../Assets/amazonLogo.png';
import india from '../../Assets/india.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerCont1">
                    <div className="contentFooterTitle">Get To Know Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">About Amazon</div>
                        <div className="contentFooterSubTitleCont">Careers</div>
                        <div className="contentFooterSubTitleCont">Press Releases</div>
                        <div className="contentFooterSubTitleCont">Amazon Science</div>
                    </div>
                </div>
                <div className="footerCont1">
                    <div className="contentFooterTitle">Connect With Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Facebook</div>
                        <div className="contentFooterSubTitleCont">Twitter</div>
                        <div className="contentFooterSubTitleCont">Instagram</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Make Money with Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Sell on Amazon</div>
                        <div className="contentFooterSubTitleCont">Sell under Amazon Accelerator</div>
                        <div className="contentFooterSubTitleCont">Protect and Build Your Brand</div>
                        <div className="contentFooterSubTitleCont">Amazon Global Selling</div>
                        <div className="contentFooterSubTitleCont">Supply to Amazon</div>
                        <div className="contentFooterSubTitleCont">Amazon Pay on Merchants</div>
                    </div>
                </div>
                
                <div className="footerCont1">
                    <div className="contentFooterTitle">Let Us Help You</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Your Account</div>
                        <div className="contentFooterSubTitleCont">Returns Centre</div>
                        <div className="contentFooterSubTitleCont">100% Purchase Protection</div>
                        <div className="contentFooterSubTitleCont">Amazon App Download</div>
                        <div className="contentFooterSubTitleCont">Help</div>
                    </div>
                </div>
            </div>

            {/* Amazon Logo & Language Selector */}
            <div className="amazonFooterBottom">
                <div className="amazonImg">
                    <img className='amazonImgFooter' src={amazonLogo} alt="Amazon Logo" />
                </div>
                
                <div className="footerLanguage">
                    <button className="footerLanguageBtn">
                        <i className="fa-solid fa-globe"></i> English
                    </button>
                    <button className="footerFlagBtn">
                        <img src={india} alt="India Flag" className="footerFlagImg" /> India
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
