import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "./index.module.css"

const OrderButton = ({ variant, content = "Order Now" }) => {
    return (
        <button
          className={"btn " + styles.orderButton}
          style={{
              transform: variant === "main" ? `rotate(0deg)` : `rotate(2deg)`,
              height: variant === "main" ? `80px` : `50px`,
              padding: variant === "main" ? `0 50px` : `0 20px`,
              fontSize: variant === "main" ? `36px` : `24px`
          }}
        >
          {content}
        </button>
    )
}

OrderButton.propTypes = {
  
}

OrderButton.defaultProps = {
  
}

export default OrderButton
