import * as React from "react"
import PropTypes from "prop-types"
import OrderButton from "./OrderButton"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <StaticImage
      alt="Gatsby logo"
      height={100}
      style={{ margin: 0, borderRadius: "100%" }}
      src="../images/logo.jpg"
    />
    <div style={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}>
      <div style={{
        position: "fixed", bottom: 20, left: 0,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}>
        <StaticImage
          alt="Gatsby logo"
          height={40}
          style={{ margin: 0, marginLeft: 40, cursor: "pointer" }}
          src="../images/whatsapp.png"
          title="contact us"
        />
        <p style={{color: `var(--color-primary)`, margin: "0 10px", color: `var(--color-text)`}}>Order on Whatsapp</p>
      </div>
      <OrderButton />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
