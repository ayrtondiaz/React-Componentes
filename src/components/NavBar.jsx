
// import React from 'react';
// import CartWidget from "./CartWidget";
// import {Link} from "react-router-dom";
// import '../Styles/Estilos.css'

// const NavBar=()=>{
//     return(
//       <nav className="navbar navbar-expand-lg navbar-light">
//       <div className="container-fluid">
//         <div className="navbar-brand" style={{color:"white"}}><Link to="/">Sal.TECH</Link></div>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarText">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <div className="nav-link active" ><Link to="/category/pc">PC</Link></div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link active" ><Link to="/category/accesorios">ACCESORIOS</Link></div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link active" ><Link to="/category/pc">Nosotros</Link></div>
//             </li>
//             <li className="nav-item ">
//             </li>
//           </ul>
//           <span className="navbar-text"><Link to="/cart"> <CartWidget></CartWidget> </Link>
//                       </span>
//         </div>
//       </div>
//     </nav>
              
//           );  }

// export default NavBar;

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