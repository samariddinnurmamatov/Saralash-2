import { FiHome } from 'react-icons/fi';
import { FaPhoneAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const ContactInfo = () => (
  <ul className="flex flex-col gap-3 text-[15px] text-gray-800">
    <li><a href="#" className="flex items-center gap-4"><FiHome /> Khaja Road, Bayzid, Chittagong, Bangladesh</a></li>
    <li><a href="#" className="flex items-center gap-4"><FaPhoneAlt /> Phone: +880-31-000-000</a></li>
    <li><a href="#" className="flex items-center gap-4"><FaFax /> Fax: +880-31-000-000</a></li>
    <li><a href="#" className="flex items-center gap-4"><MdOutlineEmail /> Email: hello@example.com</a></li>
  </ul>
);

export default ContactInfo;
