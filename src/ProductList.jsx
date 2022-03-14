import React, { useEffect, useState } from "react"
import ProductListStyle from "./css/mlpr-ui-basic-component.module.css";
import MlprText from "./MlprText";
import {setDocumentTitle} from "./SetDocumentTitle";
import { Link } from "react-router-dom";
import QuantiyButton from "./QuantiyButton";

export default function ProductList() {

  setDocumentTitle("Home");

  const style = ProductListStyle;

  const [showProduct, setShowProduct] = useState(true);
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/variousthingmlpr/product-list/main/api.json")
    .then(response => response.json()).then(result => setProductInfo(result));
  }, []);

  return (
    <div>
      <div className="button-area-container text-center my-3">
        {
          !showProduct &&
          <button className={`${style.buttonSkeletonNormalAnimationPrimary} ${style.buttonNormalHoverPrimary} ${style.buttonNormalActivePrimary} ${style.width115Px} ${style.height45Px} ${style.fontWeight500}`} onClick={() => {setShowProduct(true)}}>Show product</button>
        }
        {
          showProduct &&
          <button className={`${style.buttonSkeletonNormalAnimationPrimary} ${style.buttonNormalHoverPrimary} ${style.buttonNormalActivePrimary} ${style.width115Px} ${style.height45Px} ${style.fontWeight500}`} onClick={() => {setShowProduct(false)}}>Hide product</button>
        }
      </div>
      <div className="text-container mb-3">
        <MlprText content="Select an product" customStyle={`${ProductListStyle.mlprLogoFont} ${ProductListStyle.fontWeight650} text text-center`}/>
      </div>
      <div className="container mb-3">
        <div className="row justify-content-center gx-2">
          {
            showProduct &&
            productInfo.map(product => (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2" key={product.id}>
                <div className={`${style.mlprBoxNormalBackgroundPrimary} p-3 d-flex align-items-start justify-content-center flex-column h-100`}>
                  <div className="product-image-container w-100 mt-2">
                    <Link to={`/product-info/${product.id}`}>
                      <img src={process.env.PUBLIC_URL+product.image} className="w-100 h-100"/>
                    </Link>
                  </div>
                  <div className="product-name-container">
                    <MlprText content={product.name} customStyle={`${style.mlprLogoFont} ${style.fontWeight650} text product-name mb-0`}/>
                  </div>
                  <div className="product-price-container">
                    <p className={`${style.fontWeight650} product-price-wrapper mb-0 text`}>MYR <span className="product-price">{product.price}</span></p>
                  </div>
                  <div className="product-description-container">
                    <p className="product-description text mb-0">{product.description}</p>
                  </div>
                  <div className="quantity-button-container mt-1">
                    <QuantiyButton productInfo={product}/>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
