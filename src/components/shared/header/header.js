import React, { Component } from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
} from "shards-react"
import { Link } from "gatsby"
import styled from "styled-components"

import Routes from "../../../data/routes"
import "./header.css"
import Icon from "../../../images/icon.png"
import LogoSrc from "../../../images/full-logo.png"

export default class NavExample extends Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)

    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
      background: "",
      boxShadow: "none",
    }
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen,
      },
    })
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen,
      },
    })
  }

  listenScrollEvent = e => {
    if (window.scrollY > 500) {
      this.setState({
        color: "#90b1e0",
        boxShadow: `0 0.46875rem 2.1875rem rgba(90,97,105,.1), 0 0.9375rem 1.40625rem rgba(90,97,105,.1), 0 0.25rem 0.53125rem rgba(90,97,105,.12), 0 0.125rem 0.1875rem rgba(90,97,105,.1)`,
      })
    } else {
      this.setState({ color: "none", boxShadow: `none` })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  render() {
    return (
      <Navbar
        type="dark"
        expand="md"
        style={{
          zIndex: 5,
          background: this.state.color,
          boxShadow: this.state.boxShadow,
          paddingTop: 0,
        }}
      >
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <AppNav navbar>
            {Routes.map((r, i) => {
              if (i === Routes.length / 2) {
                return (
                  <>
                    <NavbarBrand to="/" tag={Link} className="logo">
                      <Logo src={LogoSrc} alt="ScanUV Logo" />
                    </NavbarBrand>
                    <NavItem key={r.to}>
                      <Link
                        to={r.to}
                        activeClassName="active"
                        className="nav-link"
                      >
                        {r.title}
                      </Link>
                    </NavItem>
                  </>
                )
              }
              return (
                <NavItem key={r.to}>
                  <Link to={r.to} activeClassName="active" className="nav-link">
                    {r.title}
                  </Link>
                </NavItem>
              )
            })}
          </AppNav>
        </Collapse>
      </Navbar>
    )
  }
}

const Logo = styled.img`
  height: 30px;
  margin: auto 18px;
`

const AppNav = styled(Nav)`
  @media (max-width: 769px) {
    .logo {
      display: none;
    }
  }
`
