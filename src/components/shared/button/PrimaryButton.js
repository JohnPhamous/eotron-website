import React from "react"
import { Link } from "gatsby"
import { Button } from "shards-react"

export const PrimaryButton = props => {
  return (
    <Link to={props.to}>
      <Button
        squared
        theme="danger"
        style={{
          display: `block`,
          background: `#601925`,
          ...props.style,
        }}
      >
        {props.children}
      </Button>
    </Link>
  )
}
