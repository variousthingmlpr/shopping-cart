import React, { useContext, useState } from "react"
import QuantityButtonStyle from "./css/mlpr-ui-basic-component.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {CartContext} from "./CartContext";

export default function QuantiyButton(props) {

  const style = QuantityButtonStyle;

  const {cartItems, setCartItems} = useContext(CartContext);

  const productUniqueId = cartItems.findIndex(item => {
    return item.id === props.productInfo.id
  });

  const [productQuantity, setProductQuantity] = useState(productUniqueId === -1 ? 0 : cartItems[productUniqueId].quantity);

  const handleIncrease = () => {
    if (productUniqueId === -1) {
      setCartItems(
        [
          {
            id: props.productInfo.id,
            image: props.productInfo.image,
            name: props.productInfo.name,
            price: props.productInfo.price,
            description: props.productInfo.description,
            quantity: 1
          },
          ...cartItems
        ]
      );
    } else {
      let cartArray = [...cartItems];
      cartArray[productUniqueId].quantity++;
      setCartItems(cartArray);
    }
    setProductQuantity(productQuantity+1);
  }

  const handleReduce = () => {
    if (cartItems[productUniqueId].quantity === 1) {
      let cartArray = [...cartItems];
      cartArray.splice(productUniqueId, 1);
      setCartItems(cartArray);
    } else {
      let cartArray = [...cartItems];
      cartArray[productUniqueId].quantity--;
      setCartItems(cartArray);
    }
    setProductQuantity(productQuantity-1);
  }

  return (
    <>
      {
        productQuantity === 0 ?
        <button className={`${style.buttonSkeletonNormalAnimationPrimary} ${style.buttonNormalHoverPrimary} ${style.buttonNormalActivePrimary} ${style.height45Px} ${style.fontWeight500} p-2`} onClick={handleIncrease}><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>&nbsp; Shopping cart</button> :

        <div className="d-flex align-items-center justify-content-start">
          <button className={`${style.buttonSkeletonNormalAnimationPrimary} ${style.buttonNormalHoverPrimary} ${style.buttonNormalActivePrimary} ${style.fontWeight500} ${style.width25Px} ${style.height25Px} rounded-circle`}  onClick={handleIncrease}><FontAwesomeIcon icon={faPlus} style={{fontSize: ".9rem"}}></FontAwesomeIcon></button>

          <span className={`${style.mlprLogoFont} ${style.fontWeight650} product-quantity text mx-1`}>{productQuantity}</span>

          <button className={`${style.buttonSkeletonNormalAnimationPrimary} ${style.buttonNormalHoverPrimary} ${style.buttonNormalActivePrimary} ${style.fontWeight500} ${style.width25Px} ${style.height25Px} rounded-circle`} onClick={handleReduce}><FontAwesomeIcon icon={faMinus} style={{fontSize: ".9rem"}}></FontAwesomeIcon></button>

        </div>
      }
    </>
  )
}
