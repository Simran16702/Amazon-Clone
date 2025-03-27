import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './products.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import productDetail from './products.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    
    const { isDarkMode, toggleTheme } = useTheme();
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(50000);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);  
        }, 2000);
    }, []);

    const handleAddToCart = (item) => {
        toast.success("Added To Cart", {
            position: "bottom-right",
        });

        dispatch(addToCart(item));
    };

    const handlePriceFilter = (e) => {
        const { name, value } = e.target;
        if (name === "minPrice") {
            setMinPrice(value);
        } else if (name === "maxPrice") {
            setMaxPrice(value);
        }
    };

    return (
        <div className={isDarkMode ? 'dark' : 'light'}>
            

            {loading ? (
                
                <div className="loading-overlay">
                    <div className="spinner"></div> 
                </div>
            ) : (

                <div className="productPage">
                    <div className="productTopBanner">
                        <div className="productTopBannerItems">
                            Electronics
                        </div>
                        <div className="productTopBannerItemsSubMenu">Mobiles & Accessories</div>
                        <div className="productTopBannerItemsSubMenu">Laptops & Accessories</div>
                        <div className="productTopBannerItemsSubMenu">TV & Home Entertainment</div>
                        <div className="productTopBannerItemsSubMenu">Audio</div>
                        <div className="productTopBannerItemsSubMenu">Cameras</div>
                        <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
                        <div className="productTopBannerItemsSubMenu">Smart Technology</div>
                        <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
                        <div className="productTopBannerItemsSubMenu">Office & Stationary</div>
                    </div>

                    <div className="productsPageMain">
                        <div className="productsPageMainLeftCategory">
                            <div className="productsPageMainLeftCategoryContentSub">Category</div>
                            <div className="productsPageMainLeftCategoryContent">
                                <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div>
                                <div className="productsPageMainLeftCategoryContentSub">Smartphones</div>
                                <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                                <div className="productsPageMainLeftCategoryContent">Price Filter</div>

                                <div className="priceFilter">
                                    <label>Min Price: ₹</label>
                                    <input
                                        type="number"
                                        name="minPrice"
                                        value={minPrice}
                                        onChange={handlePriceFilter}
                                        min="0"
                                        placeholder="0"
                                    />
                                    <label>Max Price: ₹</label>
                                    <input
                                        type="number"
                                        name="maxPrice"
                                        value={maxPrice}
                                        onChange={handlePriceFilter}
                                        max="50000"
                                        placeholder="50000"
                                    />
                                </div>
                                <div className="productsPageMainLeftCategoryContent">Average Customer Review</div>
                               
                                <div className="ratingLeftBox">
                                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <div className="andUp"> & Up</div>
                                </div>

                                <div className="ratingLeftBox">
                                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <div className="andUp"> & Up</div>
                                </div>

                                <div className="ratingLeftBox">
                                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                    <div className="andUp"> & Up</div>
                                </div>

                                <button onClick={toggleTheme} className="theme-switcher">
                                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                                </button>
                            </div>
                        </div>

                        <div className="productsPageMainRight">
                            <div className="productsPageMainRightTopBanner">
                                1-5 of 5 results for <span className="productsPageMainRightTopBannerSpan">Computers & Accessories </span>
                            </div>

                            

                            <div className="itemsImageProductPage">
                                {productDetail.product.map((item) => (
                                    <div className="ItemsImageProductPageOne" key={item.id}>
                                        <div className="imgBlockitemsImageProductPageOne">
                                            <img src={item.imageUrl} className="productImage" alt={item.name} />
                                        </div>
                                        <div className="productNameProduct">
                                            <div>{item.name}</div>
                                            <div className="productNameProductRating">
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                            </div>
                                            <div className="priceProductDetailPage">
                                                <div className="currencyText">₹</div>
                                                <div className="rateHomeDetail">
                                                    <div className="rateHomeDetailsPrice">{item.price}</div>
                                                    <div className="addtobasketBtn" onClick={() => handleAddToCart(item)}>
                                                        Add To Cart
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="offProductPage">Upto 15% off on select cards</div>
                                            <div className="freeDeliveryHomepage">Free Delivery For Amazon Prime Members</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </div>
    );
};

export default Products;



           

        
        
        
        
        
        
        
        
        