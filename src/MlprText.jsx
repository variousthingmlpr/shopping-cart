import React from "react"

export default function MlprText(props) {
  return (
    <>
      <h4 className={`${props.customStyle}`}>{props.content}</h4>
    </>
  )
}
