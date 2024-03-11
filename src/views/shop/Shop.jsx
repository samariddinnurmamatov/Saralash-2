import { Fragment } from "react";
import Header from "./containers/Header";
import { productData } from "../../mock/data";
import ProductItem from "../Product";
import SectionContainer from "./components/SectionContainer";

const Shop = () => {
    return (
      <Fragment>
        <section className="Shop-Page">
          <Header />
          <SectionContainer>
            <div className="grid grid-cols-3 gap-7 py-20">
                {productData.map((product) => (
                  <ProductItem key={product.id} data={product}
                  />
                ))}
            </div>
          </SectionContainer>
        </section>
      </Fragment>
    );
};
  
export default Shop;
  