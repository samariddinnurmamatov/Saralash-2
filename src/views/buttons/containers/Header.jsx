import { Link } from 'react-router-dom';
import SectionContainer from '../components/SectionContainer';

const Header = () => (
  <section className="page-header bg-gray-100 py-10">
    <SectionContainer>
        <div className="content">
            <h1 className="page-name text-[40px]">About Us</h1>
            <ol className="breadcrumb flex items-center gap-3 text-gray-500 text-[14px]">
              <li><Link to="/">Home</Link></li>
              <span>/</span>
              <li><Link>about us</Link></li>
            </ol>
        </div>
    </SectionContainer>
  </section>
);

export default Header;
