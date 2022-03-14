import React, { useState, useEffect } from "react"
import MlprText from "./MlprText";
import ProductInfoStyle from "./css/mlpr-ui-basic-component.module.css";
import { useParams } from "react-router-dom";
import { setDocumentTitle } from "./SetDocumentTitle";
import QuantiyButton from "./QuantiyButton";

export default function ProductInfo() {

  setDocumentTitle("Product info");

  const style = ProductInfoStyle;

  const { productUniqueId } = useParams();

  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/variousthingmlpr/product-list/main/api.json")
      .then(response => response.json()).then(result => {
        let getProductDetails = result.find(item => {
          return item.id === parseInt(productUniqueId);
        });
        setProductInfo(getProductDetails);
      });
  }, []);

  return (
    <div>
      <div className="text-container my-3">
        <MlprText content="Product info" customStyle={`${ProductInfoStyle.mlprLogoFont} ${ProductInfoStyle.fontWeight650} text text-center`} />
      </div>
      {
        productInfo &&
        <div className="container mb-3">
          <div className="row">
            <div className="col-12">
              <div className={`${style.mlprBoxNormalBackgroundPrimary} p-3 d-flex align-items-start justify-content-center flex-column h-100`}>
                <div className="product-image-container w-100 mt-2">
                  <img src={`${process.env.PUBLIC_URL}/${productInfo.image}`} className="w-100 h-100" />
                </div>
                <div className="product-name-container">
                  <MlprText content={productInfo.name} customStyle={`${style.mlprLogoFont} ${style.fontWeight650} text product-name mb-0`} />
                </div>
                <div className="product-price-container">
                  <p className={`${style.fontWeight650} product-price-wrapper mb-0 text`}>MYR <span className="product-price">{productInfo.price}</span></p>
                </div>
                <div className="product-description-container">
                  <p className="product-description text mb-0">{productInfo.description}</p>
                </div>
                <div className="quantity-button-container mt-1">
                  <QuantiyButton productInfo={productInfo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
