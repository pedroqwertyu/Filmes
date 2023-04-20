import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Site De Filmes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/filmes/">Filmes</Nav.Link>
            <Nav.Link href="/companias/">Companias</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho