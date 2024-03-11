import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../redux/slice/cartSlice';
import { BsCart2 } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Fragment } from "react";
import { toast } from "react-toastify";
import { addToFavorites, removeFromFavorites } from "../redux/slice/favoriteSlice";

const ProductCard = ({ data }) => {
  const { id, imageSrc, title, name, price } = data;

  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites); // favorites holatini to'g'ri olish
  const isFavorite = favorites.some((item) => item.id === id);
  const [isLiked, setIsLiked] = useState(isFavorite);
  const productInCart = cartData.find((item) => item.id === id);
  const [productQuantity, setProductQuantity] = useState(
    productInCart?.quantity || 0
  );

  const handleAddToCart = () => {
    const newQuantity = productQuantity + 1;
    dispatch(
      addToCart({
        id,
        imageSrc,
        title,
        name,
        price,
        quantity: newQuantity,
      })
    );

    setProductQuantity(newQuantity);

    // Display toast message based on quantity
    const toastMessage =
      newQuantity === 1
        ? "Product added to the cart!"
        : `Quantity updated to ${newQuantity}`;
    
    toast.success(toastMessage, {
      autoClose: 1000,
    });
  };

  const handleToggleFavorite = () => {
    if (isLiked) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(
        addToFavorites({
            id,
            imageSrc,
            title,
            name,
            price,
        })
      );
    }
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Product unliked" : "Product liked");
  };

  return (
    <Fragment>
      <div className="product-data">
        <div className="product">
          {title === "" ? "" : <span className="badge">{title}</span>}
          <img src={imageSrc} alt="img" />
          <div className="cart-icons">
            <ul>
              <li>
                <span data-toggle="modal" data-target="#product-modal">
                  <CiSearch />
                </span>
              </li>
              <li>
                <span onClick={handleToggleFavorite}>
                  <MdFavorite />
                </span>
              </li>
              <li onClick={handleAddToCart}>
                <span>
                  <BsCart2 />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <h4>
            <Link to={`/product/${id}`}>{name}</Link>
          </h4>
          <p className="price">${price}</p>
        </div>
      </div>
    </Fragment>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
