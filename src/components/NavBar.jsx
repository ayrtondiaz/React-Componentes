import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import '../Styles/Estilos.css'

const NavBar = () => {
        return (
          <>
            <Navbar className="navbar " >
              <Container>
                <Nav className="me-auto">
              <NavLink className="me-auto" to='/'>Noatech</NavLink>
                  <NavLink className="me-auto" to='/category/pc'>PC</NavLink>
                  <NavLink className="me-auto" to='/category/xbox'>XBOX</NavLink>
                  <NavLink className="me-auto" to='/category/ps'>PLAYSTATION</NavLink>
                </Nav>
                <div className= "cart">
                 <NavLink className="navlink" to='/cart'><CartWidget />
                 </NavLink>
                </div>
              </Container>
            </Navbar>
          </>
            )
}

export default NavBar;