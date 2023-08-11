import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavB() {

  const cart = useSelector((state)=>(state.cart))
    return (
        <Navbar bg="light" expand="lg" fixed='top'>
          <Container>
            <Link to="/" className='navbar-brand'>CartApp</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className='nav-link' to="/">Products</Link>
                <Link className='nav-link' to="/cart">Car - {cart.length} </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavB;