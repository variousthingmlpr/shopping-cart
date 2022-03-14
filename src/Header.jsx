import React from "react"
import ProductListStyle from "./css/mlpr-ui-basic-component.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={`${ProductListStyle.mlprBoxNormalBackgroundPrimary} p-3`}>
      <ul className="d-flex align-items-center justify-content-center flex-wrap m-0 p-0">
        <li><Link to="/home" className={`${ProductListStyle.aTagTextNormalHaveTdcrtPrimary} ${ProductListStyle.aTagTextNormalHoverPrimary} ${ProductListStyle.fontWeight650} ${ProductListStyle.transitionDot2S} mx-2`}>Home</Link></li>
        <li><Link to="/checkout" className={`${ProductListStyle.aTagTextNormalHaveTdcrtPrimary} ${ProductListStyle.aTagTextNormalHoverPrimary} ${ProductListStyle.fontWeight650} ${ProductListStyle.transitionDot2S} mx-2`}>Checkout</Link></li>
      </ul>
    </header>
  )
}
