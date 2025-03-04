import React, { useContext } from "react";
import { useParams } from "react-router-dom"; 
import Footer from "../components/Footer";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { MdOutlineShoppingCart } from "react-icons/md";

const Product = () => {
  const { id } = useParams(); // Get the ID from the URL
  const { products } = useContext(ProductContext); // Get products from context

  // Find the product with the matching id
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div className="text-white">Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="relative bg-richblack-900">
      {/* Product Details */}
      <div className="flex flex-row gap-[120px] mt-10 mr-[135px] h-[600px]">
        <div className="flex flex-col h-[1200px]">
          <h1 className="text-richblack-100 ml-[135px] text-4xl">{product.name}</h1>
          <button className="border-2 text-richblack-100 text-md w-[140px] py-[7px] px-[9px] ml-[135px] mt-[80px] rounded-lg">
            View Service
          </button>
        </div>
        <img src={product.image} className="w-[850px] h-[550px] rounded-lg" alt={product.name} />
      </div>

      {/* Other Products Section */}
      <div className="flex flex-row">
        <div className="text-richblack-100 rounded-lg ml-[31%] h-[600px] mr-7">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Cart and Additional Info */}
        <div>
          <div className="border-[1px] text-white h-[30%] w-[300px] rounded-lg p-6">
            <MdOutlineShoppingCart className="w-[60px] h-[50px] ml-[95px] mt-7" />
            <h1 className="ml-[45px] mt-2">No items in your cart</h1>
          </div>

          <div className="border-[1px] text-white h-[30%] w-[300px] rounded-lg p-6 mt-6">
            <h1 className="text-xl mb-5">HS Promise</h1>
            <h1 className="text-md"> +- Verified Professionals</h1>
            <h1 className="text-md"> +- Hassle-Free Booking</h1>
            <h1 className="text-md"> +- Transparent Pricing</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
