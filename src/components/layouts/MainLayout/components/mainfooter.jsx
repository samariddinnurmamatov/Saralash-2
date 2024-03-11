import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import Container from "../../../shared/Container";


const Mainfooter = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <Container>
        <div className="flex flex-col gap-8 items-center justify-center">
          <ul className="flex items-center gap-8">
            <li>
              <a href="https://www.facebook.com/themefisher">
                <FaFacebook className="text-gray-700 text-xl" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/themefisher">
                <FaInstagram className="text-gray-700 text-xl" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/themefisher">
                <FaTwitter className="text-gray-700 text-xl" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/themefisher/">
                <FaPinterest className="text-gray-700 text-xl" />
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-5">
            <li>
              <a href="contact.html" className="text-[12px]">CONTACT</a>
            </li>
            <li>
              <a href="shop.html" className="text-[12px]">SHOP</a>
            </li>
            <li>
              <a href="pricing.html" className="text-[12px]">PRICING</a>
            </li>
            <li>
              <a href="contact.html" className="text-[12px]">PRIVACY POLICY</a>
            </li>
          </ul>
          <p className="text-gray-500">Copyright ©2021, Designed & Developed by <a href="" className="text-black">Themefisher</a></p>
        </div>
      </Container>
    </footer>
  );
};

export default Mainfooter;