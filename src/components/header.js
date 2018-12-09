import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/logo.png'

const HeaderWrapper = styled.div`
  background: aqua;
  img {
    margin-bottom: 0;
  }
`

const HeaderContainer = styled.div`
  background: aqua;
  margin-bottom: 1.45rem;
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{
              width: '50px',
            }}
            src={logo}
            alt="logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
