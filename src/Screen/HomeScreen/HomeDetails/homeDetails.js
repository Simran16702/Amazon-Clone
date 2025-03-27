import React from 'react';
import './homeDetails.css';
import image1 from '../../../Assets/image1.jpg';
import image2 from '../../../Assets/image2.jpg';
import image3 from '../../../Assets/image3.jpg';
import image4 from '../../../Assets/image4.jpg';
import image5 from '../../../Assets/image5.jpg';
import image6 from '../../../Assets/image6.jpg';
import image7 from '../../../Assets/image7.jpg';
import image8 from '../../../Assets/image8.jpg';

const HomeDetails = () => {

    return (
        <div className="homeDetails">
    
            <div className="homeDetailLongCard">
                <div className="homeDetailLongCardTitle">Today’s Deals</div>
                <div className="homeDetailLongCardItems">
                    <div className="scrollDiv">
                        {[{ img: image1, desc: "product1 | Starting @17999 Includ…" },
                          { img: image2, desc: "product2 | Starting @17999 Includ…" },
                          { img: image3, desc: "product3 | Starting @17999 Includ…" },
                          { img: image4, desc: "product4 | Starting @17999 Includ…" },
                          { img: image5, desc: "product5 | Starting @17999 Includ…" },
                          { img: image6, desc: "product6 | Starting @17999 Includ…" },
                          { img: image7, desc: "product7 | Starting @17999 Includ…" },
                          { img: image8, desc: "product8 | Starting @17999 Includ…" }].map((item, index) => (
                            <div 
                                key={index} 
                                className="homeDetailLongCardItem"
                            >
                                <img className='homeDetailLongCardItemImg' src={item.img} alt={`Product ${index + 1}`} />
                                <div className="homeDetailLongCardItemImgDetail">
                                    <div className="homeDetailLongCardItemImgTopDetail">
                                        <div className="homeDetailPercentageOff">
                                            Up to 20% off
                                        </div>
                                        <div className="limitedTimeDealhomeDetail">
                                            Limited Time Deal
                                        </div>
                                    </div>
                                    <div className="bottomHomeDetail">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="homeDetailLongCard">
                <div className="homeDetailLongCardTitle">Today’s Offer</div>
                <div className="homeDetailLongCardItems">
                    <div className="scrollDiv">
                        {[...Array(7)].map((_, index) => (
                            <div 
                                key={index} 
                                className="homeDetailLongCardItem"
                            >
                                <img 
                                    className='homeDetailLongCardItemImg' 
                                    src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg" 
                                    alt={`Product ${index + 9}`} 
                                />
                                <div className="homeDetailLongCardItemImgDetail">
                                    <div className="homeDetailLongCardItemImgTopDetail">
                                        <div className="homeDetailPercentageOff">
                                            Up to 20% off
                                        </div>
                                        <div className="limitedTimeDealhomeDetail">
                                            Limited Time Deal
                                        </div>
                                    </div>
                                    <div className="bottomHomeDetail">
                                        iQOO Z9 5G | Starting @17999 Includ…
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeDetails;

