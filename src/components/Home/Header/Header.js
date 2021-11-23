import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className=""><i className="fas fa-plane-departure"></i> Pack &amp; Go</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="nav-menu text-white" to="/home#packages">Packages</Nav.Link>
                        <Nav.Link as={Link} className="nav-menu text-white" to="/add-packages">Add Package</Nav.Link>
                        <Nav.Link as={Link} className="nav-menu text-white" to="/userr-order">User Booking</Nav.Link>
                        <Nav.Link as={Link} className="nav-menu text-white" to="/manage-all-booking">Manage All Booking</Nav.Link>
                        {user?.email ?
                            <Button className="me-2 btn-danger" onClick={logOut} variant="danger">Sign Out </Button> :
                            <Nav.Link as={Link} className="nav-menu text-white" to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <a className="nav-menu text-decoration-none" href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;