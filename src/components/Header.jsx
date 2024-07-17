import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <Navbar className="bg-body-secondary p-3">
        <Container>
          <Navbar.Brand className='fw-medium'>
            <img
              alt=""
              src="https://icon-library.com/images/media-player-icon/media-player-icon-2.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media Player
          </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header