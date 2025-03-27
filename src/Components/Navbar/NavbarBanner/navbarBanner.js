import React, { useState } from "react";
import "./navbarBanner.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const NavbarBanner = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const options = [
    { name: "MX Player" },
    { name: "Sell" },
    { name: "Bestsellers" },
    { name: "Today's Deals" },
    { name: "Prime" },
    { name: "Mobiles" },
    { name: "Customer Service" },
    { name: "New Releases" },
    { name: "Electronics" },
    { name: "Fashion" },
    { name: "Home & Kitchen" },
    { name: "Computers"},
    { name:"Books"},
    { name:"Car & Motorbike"},
    { name: "Toys & Games"},
  ];

  const sidebarOptions = [
    "Trending",
    "Bestsellers",
    "New Releases",
    "Movers and Shakers",
    "Digital Content and Devices",
    "Echo & Alexa",
    "Fire TV",
    "Kindle E-Readers & eBooks",
    "Audible Audiobooks",
    "Amazon Prime Video",
    "Amazon Prime Music",
    "Shop by Category",
    "Mobiles, Computers",
    "TV, Appliances, Electronics",
    "Men's Fashion",
    "Women's Fashion",
    "Toys & Games",
    "Books",
    "Beauty, Health",
    "Grocery",
    "Sports, Fitness",
  ];

  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        <div
          className="optionsNavbarBanner"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionsNavbarBanner">All</div>
        </div>

        {showDropdown && (
          <div className="dropdownMenu">
            <div className="dropdownHeader">
              <span>Hello, sign in</span>
              <CloseIcon
                className="closeIcon"
                onClick={() => setShowDropdown(false)}
              />
            </div>
            <ul>
              {sidebarOptions.map((item, index) => (
                <li key={index} className="dropdownItem">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {options.map((item, ind) => {
          return (
            <Link to={'/products'} className="optionsNavbarBanner" key={ind}>
              <div className="allOptionsNavbarBanner">{item.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarBanner;

    