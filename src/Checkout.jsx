import React, { useContext } from "react"
import MlprText from "./MlprText"
import CheckoutStyle from "./css/mlpr-ui-basic-component.module.css";
import { setDocumentTitle } from "./SetDocumentTitle";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import QuantiyButton from "./QuantiyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Checkout() {

  setDocumentTitle("Checkout");

  const style = CheckoutStyle;

  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    return total += item.price * item.quantity;
  }, 0);

  const isFreeShippingPrice = 15000;

  return (
    <div>
      <div className="text-container my-3">
        <MlprText content="Checkout" customStyle={`${CheckoutStyle.mlprLogoFont} ${CheckoutStyle.fontWeight650} text text-center`} />
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-12 col-md-6">
            {
              cartItems.length > 0 ?
              cartItems.map(product => (
                <div className="mb-2" key={product.id}>
                  <div className={`${style.mlprBoxNormalBackgroundPrimary} p-3 d-flex align-items-start justify-content-center flex-column h-100`}>
                    <div className="product-image-container w-100 mt-2">
                      <Link to={`/product-info/${product.id}`}>
                        <img src={process.env.PUBLIC_URL + product.image} className="w-100 h-100" />
                      </Link>
                    </div>
                    <div className="product-name-container">
                      <MlprText content={product.name} customStyle={`${style.mlprLogoFont} ${style.fontWeight650} text product-name mb-0`} />
                    </div>
                    <div className="product-price-container">
                      <p className={`${style.fontWeight650} product-price-wrapper mb-0 text`}>MYR <span className="product-price">{product.price}</span></p>
                    </div>
                    <div className="product-description-container">
                      <p className="product-description text mb-0">{product.description}</p>
                    </div>
                    <div className="quantity-button-container mt-1">
                      <QuantiyButton productInfo={product} />
                    </div>
                  </div>
                </div>
              )) :
              <div className="cart-is-empty-info text-center mb-3">
                <FontAwesomeIcon icon={faCartPlus} style={{fontSize: "6rem"}} className="mb-2"></FontAwesomeIcon>
                <MlprText content="Your shopping cart is empty" customStyle={`${style.mlprLogoFont} ${style.fontWeight650}`}/>
              </div>
            }
          </div>
          <div className="col-12 col-md-6">
            <div className={`${style.mlprBoxNormalBackgroundPrimary} checkout-info-container p-3 text-center`}>
              <div className="total-price-container mb-2">
                <MlprText content="Total price" customStyle={`${style.mlprLogoFont} ${style.fontWeight650} mb-0 text total-price-title mb-1`}/>
                <span className={`${style.mlprLogoFont} ${style.fontWeight650} mb-0 text shopping-cart-total-price`}>{`MYR ${totalPrice}`}</span>
              </div>
              <div className="id-free-shipping-info-container">
                {
                  totalPrice >= isFreeShippingPrice ?
                  <p className={`${style.fontWeight500} ${style.borderRadiusLevel1} bg-dark text-white p-2 mb-0 text`}>You can waive the shipping fee</p> :
                  <p className={`${style.fontWeight500} ${style.borderRadiusLevel1} bg-dark text-white p-2 mb-0 text`}>Free shipping on orders over {`MYR ${isFreeShippingPrice}`}, you are still {`${isFreeShippingPrice - totalPrice}`} short</p>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
