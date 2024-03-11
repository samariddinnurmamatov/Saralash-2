import Container from "../../../shared/Container";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from '../../../../assets/logo.png'
import { Fragment } from "react";
import { BsCart2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";


const Mainheader = () => {
  const cartCount = useSelector(
    (state) => state.cart.cartData.length
  );
  const favoriteCount = useSelector(
    (state) => state.favorite.favorites.length
  );
  return (
    <Fragment>
      <header className="py-8 text-sm">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <a href="tel:0129-12323-123123" className="flex items-center gap-2"><FaPhoneAlt /> 0129-12323-123123</a>
            </div>
            <div className="w-[13%]">
              <Link to="/"><img src={Logo} alt="Logo" /></Link>
            </div>
            <div>
              <ul className="flex items-center  gap-7">
                <li className="flex items-center gap-1 relative">
                  <BsCart2 />
                  <Link to="/cart">Cart <span className="text-white bg-red-500 rounded-[100%] px-1 absolute top-[-15px] right-[-10px]">{cartCount}</span></Link>
                </li>
                <li className="flex items-center gap-1"><FiSearch />Search</li>
                <li className="flex items-center gap-1 relative">
                  <MdFavoriteBorder /> 
                  <Link to="/Like">Like <span className="text-white bg-red-500 rounded-[100%] px-1 absolute top-[-15px] right-[-10px]">{favoriteCount}</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>
      <hr className="w-4/5 mx-auto border-t" />
      <nav className="flex items-center justify-center gap-9 py-7 text-[13px]">
        <Link to="/">
          HOME
        </Link>
        <FlyoutLink to="#" FlyoutContent={ShopContent}>
          SHOP <FaChevronDown />
        </FlyoutLink>
        <FlyoutLink to="#" FlyoutContent={PagesContent}>
          PAGES <FaChevronDown />
        </FlyoutLink>
        <FlyoutLink to="#" FlyoutContent={BlogContent}>
          BLOG <FaChevronDown />
        </FlyoutLink>
        <FlyoutLink to="#" FlyoutContent={ElementsContent}>
          ELEMENTS <FaChevronDown />
        </FlyoutLink>
      </nav>
    </Fragment>
  );
};



const FlyoutLink = ({ children, to, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  
  const showFlyout = FlyoutContent && open;
  
  
  return (
    <div
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
    className="relative w-fit h-fit"
    >
      <Link to={to} className="relative text-black flex items-center gap-2">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
          />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          style={{ translateX: "-50%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute left-1/2 top-12 bg-white text-black z-10"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ShopContent = () => {
  return (
    <div className="w-100 bg-white p-6 shadow-xl flex gap-9 justify-between">
      <div className="mb-3 space-y-3">
        <h6 className="text-gray-500">Pages</h6>
        <Link to="shop" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          SHOP
        </Link>
        <Link to="checkout" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          CHECKOUT
        </Link>
        <Link to="cart" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          CART
        </Link>
        <Link to="pricing" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          PRICING
        </Link>
        <Link to="confirmation" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          CONFIRMATION
        </Link>
      </div>
      <div className="mb-6 space-y-3">
        <h6 className="text-gray-500">Layout</h6>
        <Link to="#" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          PRODUCT DETAILS
        </Link>
        <Link to="#" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
        SHOP WITH SIDEBAR
        </Link>
      </div>
    </div>
  );
};


export const PagesContent = () => {
  return (
    <div className="w-100 bg-white p-6 shadow-xl flex gap-9 justify-between">
      <div className="mb-3 space-y-3">
        <h6 className="text-gray-500">Introduction</h6>
        <Link to="contact-us" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          CONTACT US
        </Link>
        <Link to="about-us" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          ABOUT US
        </Link>
        <Link to="#" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          404 PAGE
        </Link>
        <Link to="coming-soon" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          COMING SOON
        </Link>
        <Link to="faq" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          FAQ
        </Link>
      </div>
      <div className="mb-3 space-y-3">
        <h6 className="text-gray-500">Dashboard</h6>
        <Link to="dashboard" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          USER INTERFACE
        </Link>
        <Link to="orders" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          ORDERS
        </Link>
        <Link to="address" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          ADDRESS
        </Link>
        <Link to="profile-details" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          PROFILE DETAILS
        </Link>
      </div>
      <div className="mb-3 space-y-3">
        <h6 className="text-gray-500">Utility</h6>
        <Link to="login-page" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          LOGIN PAGE
        </Link>
        <Link to="signin-page" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          SIGNIN PAGE
        </Link>
        <Link to="forget-password" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          FORGET PASSWORD
        </Link>
      </div>
    </div>
  );
};


export const BlogContent = () => {
  return (
    <div className="w-100 bg-white p-6 shadow-xl flex gap-9 justify-between">
      <div className="mb-3 space-y-3">
        <Link to="blog-left-sidebar" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          BLOG LEFT SIDEBAR
        </Link>
        <Link to="blog-right-sidebar" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          BLOG RIGHT SIDEBAR
        </Link>
        <Link to="blog-full-width" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          BLOG FULL WIDTH
        </Link>
        <Link to="blog-columns" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          BLOG 2 COLUMNS
        </Link>
        <Link to="blog-single" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          BLOG SINGLE
        </Link>
      </div>
    </div>
  );
};

export const ElementsContent = () => {
  return (
    <div className="w-100 bg-white p-6 shadow-xl flex gap-9 justify-between">
      <div className="mb-3 space-y-3">
        <Link to="typography" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          Typography
        </Link>
        <Link to="buttons" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          Buttons
        </Link>
        <Link to="alerts" className="block text-[12px] hover:underline" style={{whiteSpace: "nowrap"}}>
          Alerts
        </Link>
      </div>
    </div>
  );
};

FlyoutLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  FlyoutContent: PropTypes.elementType.isRequired,
};


export default Mainheader;