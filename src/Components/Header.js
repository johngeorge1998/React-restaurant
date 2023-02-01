import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

 function Header() {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="no logo"
              src="https://static.vecteezy.com/system/resources/previews/000/656/457/original/restaurant-badge-and-logo-good-for-print-vector.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            &nbsp;
            Food Finder
          </Navbar.Brand>
          </Container>
          </Navbar>
    </div>
  )
}

export default Header;
