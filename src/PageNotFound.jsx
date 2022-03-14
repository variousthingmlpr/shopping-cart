import React from "react"
import MlprText from "./MlprText"
import PageNotFoundStyle from "./css/mlpr-ui-basic-component.module.css";
import {setDocumentTitle} from "./SetDocumentTitle";

export default function PageNotFound() {

  setDocumentTitle("404 page not found");

  return (
    <div>
      <div className="text-container my-3">
        <MlprText content="404 page not found" customStyle={`${PageNotFoundStyle.mlprLogoFont} ${PageNotFoundStyle.fontWeight650} text text-center`}/>
      </div>
    </div>
  )
}
