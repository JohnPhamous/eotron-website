import React from "react"
import { Button } from "shards-react"

export const ExternalButton = props => {
  return (
    <Button
      squared
      theme="dark"
      style={{
        color: "white !important",
        background: `#22223A`,
      }}
      href={props.link}
    >
      {props.children}
    </Button>
  )
}

export const RegularButton = props => {
  return (
    <Button
      squared
      theme="dark"
      style={{
        color: "white !important",
        background: `#22223A`,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}
