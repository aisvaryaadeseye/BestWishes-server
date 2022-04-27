import React, { useState } from "react";
import ProductDetail from "../../component/productDetail";
import {
  productScreenContainer,
  productScreenLeft,
  ProductScreenRight,
} from "./style";
import "./style.css";
import Pagination from "@material-ui/lab/Pagination";
import ProductScreenSidebar from "../../component/productScreenSidebar";
import { productData } from "../../component/data/productData";

// import Link
const ProductScreenOthers = () => {
  return (
    <div className="productScreenContainer">
      <div className="productScreenLeft">
        {/* ===== */}
        <ProductScreenSidebar sideBarText="Other Categories" />
      </div>

      <div className="productScreenRight">
        <div className="productScreenRightTop">
          {/* <Link></Link> */}
          <p>
            Home <i className="fa-solid fa-caret-right faRightP"></i>
          </p>

          <p>Other Categories</p>
        </div>
        <div className="productScreenRightBottom">
          {productData.map((product) => {
            return <ProductDetail key={product.id} product={product} />;
          })}
          {/* <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail /> */}
          <div className="pagginationContainer">
            <Pagination count={10} variant="outlined" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreenOthers;
