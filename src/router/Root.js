import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Root() {
  return (
    <StyledWrapper>
      <Nav />
      <Outlet />
      <Footer />
    </StyledWrapper>
  )
}

export default Root

const StyledWrapper = styled.main`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: #f4f7fb;
`
