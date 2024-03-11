import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCartData,
  removeFromCart,
  updateQuantity,
} from "../../redux/slice/cartSlice";
import Container from "../../components/shared/Container";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleClearCart = () => {
    if (cartData.length > 0) {
      dispatch(clearCartData());
    }
  };

  // Calculate total quantity and total price
  let totalQuantity = 0;
  let totalPrice = 0;

  cartData.forEach((item) => {
    totalQuantity += item.quantity;

    // Parse the price if it's a string
    const itemPrice =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
        : item.price;

    totalPrice += itemPrice * item.quantity;
  });

  return (
    <Fragment>
      <section className="page-header bg-gray-100 py-10">
        <Container>
          <div className="content">
            <h1 className="page-name text-[40px]">Cart</h1>
            <ol className="breadcrumb flex items-center gap-3 text-gray-500 text-[14px]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <span>/</span>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ol>
          </div>
        </Container>
      </section>
      <section className="contact-section py-20">
        <Container>
          {cartData.length === 0 ? (
            // Render empty cart content
            <div className="laptop:flex  flex flex-col items-center justify-center">
              <img
                src="https://sello.uz/images/fixed/empty-card.svg"
                alt="Your cart is empty"
                width={100}
                height={100}
                className="object-contain w-[43%]"
              />
              <div className="py-5">
                <h2 className="font-[500] text-[21px]">Корзина 0</h2>
                <p className="pt-2 mb-[15px] text-gray-400">
                  Прошу прощения! Ваша корзина на данный момент пуста
                </p>
                <p className="py-3 text-gray-400">
                  Нажмите на кнопку ниже, чтобы начать делать покупки
                </p>
                <Link
                  to="/"
                  className="py-2 px-10 rounded-[8px] text-white"
                  style={{ backgroundColor: "rgb(0, 156, 146)" }}
                >
                  Начать покупки
                </Link>
              </div>
            </div>
          ) : (
            // Render cart items
            <div className="laptop:flex gap-[12px] items-baseline">
              <div className="laptop:w-[100%]">
                <div className="flex items-center gap-[10px] justify-between">
                  <p
                    style={{ backgroundColor: "rgba(80,219,207,.08)" }}
                    className="p-2 rounded-[8px] laptop:text-[15px] tablet:text-[10px] mobi2:text-[10px] mobile:text-[10px] cursor-pointer text-end"
                    onClick={handleClearCart}
                  >
                    Ochirish hammasini
                  </p>
                </div>
                {cartData.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-300 rounded-[6px] p-4 mt-8 flex justify-between items-center gap-[15px]"
                  >
                    <span className="w-[150px] bg-gray-500">
                      <picture>
                        <img
                          src={`${item.imageSrc}`}
                          alt="img"
                          className="w-[100%]"
                        />
                      </picture>
                    </span>
                    <div className="flex flex-col gap-[10px] ">
                      <span>{item.name}</span>
                      <span
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-red-500 cursor-pointer w-[50px]"
                        >
                        Ochirish
                      </span>
                    </div>
                    <div>
                        <h3>${item.price}</h3>
                    </div>
                    <div className="flex gap-[10px]">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            handleUpdateQuantity(item.id, item.quantity - 1);
                          }
                        }}
                        disabled={item.quantity <= 1}
                        className="border border-gray-500 rounded-[6px] px-2"
                      >
                        -
                      </button>{" "}
                      {item.quantity}{" "}
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="border border-gray-500 rounded-[6px] px-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-7 px-5 rounded-[8px] laptop:w-[40%]">
                <h3 className="font-[500]">Сумма заказа</h3>
                <div className="py-3">
                  <div className="flex justify-between items-center">
                    <p className="text-[13px] text-gray-500">
                      Количество товаров:{" "}
                    </p>
                    <span>{totalQuantity}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[13px] text-gray-500">Доставка: </p>
                    <span>{0}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-[13px] text-gray-500">
                      Общая сумма к оплате :{" "}
                    </p>
                    <span>{totalPrice.toLocaleString()} UZS</span>
                  </div>
                  <div className="py-3">
                    <button
                      className="py-2 px-2 text-white rounded-[8px] bg-black"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </Fragment>
  );
};

export default Cart;
