import React from "react";
import Header from "../Header";
import { FaArrowRight } from "react-icons/fa";
import "./index.css";
import BestSellers from "../BestSellers";
import ShopByCategory from "../ShopByCategory";
import WhyRosier from "../WhyRosiers";
import WhyPeopleLove from "../WhyPeopleLove";
import CookingWithRosier from "../CookingWithRosier";
import Community from "../Community";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <div className="text-center p-2 span_top_div">
        <span className="span_top">
          🎁 Pre-book your Diwali hampers now &amp; get 20% off! ✨🪔🎇{" "}
          <FaArrowRight />
        </span>
      </div>
      {<Header />}
      {/* //Banner section */}
      <div className="banner_section">
        <img
          className="w-100"
          src="https://www.rosierfoods.com/cdn/shop/files/Pre-book_your.png?v=1728738426&width=1500"
          alt="diwali banner"
        />
      </div>
      {/* //Best sellers Section */}
      <div className="best_sellers_section">
        <BestSellers />
      </div>
      {/* shop by category section */}
      <div className="Shop_by_category">
        <ShopByCategory />
      </div>
      {/* second banner */}
      <div className="second_banner">
        <img
          className="w-100"
          src="https://www.rosierfoods.com/cdn/shop/files/banner-roiser.png?v=1709202957&width=1500"
          alt="green banner"
        />
      </div>
      {/* why rosier section */}
      <div>
        <WhyRosier />
      </div>
      {/* WhyPeopleLove section  */}
      <WhyPeopleLove />
      {/* Cooking with rosier section */}
      <CookingWithRosier />
      {/* Community section */}
      <Community />
      {/* another banner about founder section  */}

      <div className="w-100">
        <img
          className="w-100"
          src="https://www.rosierfoods.com/cdn/shop/files/A_NOTE_FROM_OUR_FOUNDER_Website_1.png?v=1712600153&width=1500"
          alt="about_founder"
        />
      </div>

      {/* Footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
