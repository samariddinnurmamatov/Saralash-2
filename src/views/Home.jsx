import { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import Container from "../components/shared/Container";
import Input from "../components/ui/Input";
import { INPUT_TYPE } from "../components/ui/utils/constant";
import Img1 from "../assets/shop/category/category-1.jpg";
import Img2 from "../assets/shop/category/category-2.jpg";
import Img3 from "../assets/shop/category/category-3.jpg";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Link } from "react-router-dom";
import "../index.css"
import ProductItem from "./Product";
import { productData } from "../mock/data";



export const InputStyles =
  "py-[13px] px-[20px] rounded-[3px] text-dark text-[12px] font-[500] border-[1px] border-solid !border-border-profile bg-light flex-1 transition-all duration-100 ease-in-out";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  return (
    <Fragment>
      <section className="carousel">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1 flex flex-col items-center justify-center gap-5 w-[90%] mx-auto">
                <p>PRODUCTS</p>
                <div className="flex flex-col items-center justify-center text-[22px]" style={{fontFamily: "Playfair Display"}}>
                  <h1>The beauty of nature </h1>
                  <h1>is hidden in details.</h1>
                </div>
                <div>
                  <button className="border-[2px] border-solid border-white bg-transparent hover:bg-white hover:text-black ease-in-out text-white py-3 px-9" type="button">Shop Now</button>
                </div>
                </div>
            <div className="keen-slider__slide number-slide2 flex flex-col items-start justify-center">
              <div className="w-[50%] mx-auto flex flex-col gap-5">
                <p>PRODUCTS</p>
                <div className="flex flex-col text-[22px]" style={{fontFamily: "Playfair Display"}}>
                  <h1>The beauty of nature </h1>
                  <h1>is hidden in details.</h1>
                </div>
                <div>
                  <button className="border-[2px] border-solid border-white bg-transparent hover:bg-white hover:text-black ease-in-out text-white py-3 px-9" type="button">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3 flex flex-col items-center justify-center text-end">
              <Container>
                <div className="flex flex-col gap-5">
                  <p>PRODUCTS</p>
                  <div className="flex flex-col text-[22px]" style={{fontFamily: "Playfair Display"}}>
                    <h1>The beauty of nature </h1>
                    <h1>is hidden in details.</h1>
                  </div>
                  <div>
                    <button className="border-[2px] border-solid border-white bg-transparent hover:bg-white hover:text-black ease-in-out text-white py-3 px-9" type="button"><Link to="shop"> Shop Now</Link></button>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
      </section>
      <section className="product-category section py-20">
        <Container>
          <div className="title text-center">
            <h3 className="">PRODUCT CATEGORY</h3>
          </div>
          <div className="flex items-center justify-between py-10 gap-5">
            <div className="box-two space-y-3">
              <div className="box relative" style={{overflow: "hidden"}}>
                <a href="#">
                  <img src={Img1} alt="" className="w-[100%] h-auto transition-all duration-300 ease-in-out transform scale-100 hover:scale-110" />
                  <div className="absolute top-0 p-6">
                    <h4 className="text-black text-2xl">Clothes Sales</h4>
                    <p className="text-gray-500">Shop New Season Clothing</p>
                  </div>
                </a>
              </div>
              <div className="box relative" style={{overflow: "hidden"}}>
                <a href="#">
                  <img src={Img2} alt="" className="w-[100%] h-auto transition-all duration-300 ease-in-out transform scale-100 hover:scale-110" />
                  <div className="absolute top-0 p-6">
                    <h4 className="text-black text-2xl">Smart Casuals</h4>
                    <p className="text-gray-500">Get Wide Range Selection</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="box-one">
              <div className="box relative" style={{overflow: "hidden"}}>
                <a href="#">
                  <img src={Img3} alt="" className="w-[100%] h-auto transition-all duration-300 ease-in-out transform scale-100 hover:scale-110 z-1" />
                  <div className="absolute top-0 p-6">
                    <h4 className="text-black text-2xl">Smart Casuals</h4>
                    <p className="text-gray-500">Get Wide Range Selection</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 py-20">
        <Container>
          <div className="text-center">
            <h3> TRENDY PRODUCTS</h3>
          </div>
          <div>
          <div className="grid grid-cols-3 gap-7 py-5">
            {productData.map((product) => (
              <ProductItem key={product.id} data={product}
              />
            ))}
          </div>
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 py-20">
        <Container>
          <div className="text-center">
            <div className="title">
              <h2>SUBSCRIBE TO NEWSLETTER</h2>
              <p className="text-gray-500 text-[14px] py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, <br/> facilis numquam impedit ut sequi. Minus facilis vitae excepturi sit laboriosam.</p>
            </div>
            <div className="pt-7">
              <Input
                typeInput="text"
                styleType={INPUT_TYPE.SIMPLE}
                className={`${InputStyles} !border-stroke w-[44%]`}
                placeholder="Enter Your Email Address"
              />
              <button className="border-[1px] border-solid border-gray-500 bg-black text-white py-3 px-9" type="button">Subscribe Now!</button>
            </div>
          </div>
        </Container>
      </section>
      <section className="instagram-feed py-20">
        <Container>
          <p className="text-center text-[16px] letter-spacing-2px tracking-[2px]">VIEW US ON INSTAGRAM</p>
        </Container>
      </section>
    </Fragment>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

Arrow.propTypes = {
  left: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Home;
