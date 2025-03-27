import React, { useState } from 'react';
import './homeBanner.css';
import homeBannerItemProduct from '../../../homeProduct.json';
import Banner from '../../../Assets/Banner.jpg';
import Banner2 from '../../../Assets/Banner2.jpg';
import Banner3 from '../../../Assets/Banner3.png';
import Banner4 from '../../../Assets/Banner4.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HomeBanner = () => {
    const banners = [Banner, Banner2, Banner3, Banner4];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevBanner = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const nextBanner = () => {
        setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="homeBanner">
           
            <button className="bannerArrow leftArrow" onClick={prevBanner}>
                <FaArrowLeft />
            </button>

            
            <img className="homeBannerimg" src={banners[currentIndex]} alt="Home Banner" />

            <button className="bannerArrow rightArrow" onClick={nextBanner}>
                <FaArrowRight />
            </button>

            <div className="grayBackgroundHomeBanner"></div>

         
            <div className="homeBannerItemDiv">
                {homeBannerItemProduct.product.map((item, index) => (
                    <div className="homeBannerItemDivCard" key={index}>
                        <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                        <div className="imgHomeBannerItemDivCard">
                            {item.imgs.map((imgSrc, imgIndex) => (
                                <div className="imgBannerHomeDiv" key={imgIndex}>
                                    <img className="imgBannerHomeDivImg" src={imgSrc} alt={`Product ${imgIndex + 1}`} />
                                    <div className="imgBannerImgName">Product</div>
                                </div>
                            ))}
                        </div>
                        <div className="seeMoreHomeBanner">See More</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeBanner;