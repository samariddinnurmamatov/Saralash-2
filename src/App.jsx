import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './components/layouts';
import Home from './views/Home';
import ContactUs from './views/contact/ContactUs';
import AboutUs from './views/about/AboutUs';
import Faq from './views/faq/Faq';
import Login from './views/login/Login';
import Pricing from './views/pricing/Pricing';
import Confirmation from './views/confirmation/Confirmation';
import Typography from './views/typography/Typography';
import Shop from './views/shop/Shop';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Savat from './views/cart/Cart';
import Buttons from './views/buttons/Buttons';



function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="typography" element={<Typography />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Savat />} />
          <Route path="buttons" element={<Buttons />} />
        </Route>
        <Route path="login-page" element={<Login />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
