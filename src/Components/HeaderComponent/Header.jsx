import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconCart from '../../assets/images/iconCart.svg'
import iconUser from '../../assets/images/iconUser.svg'
import LogoApp from '../../assets/images/logo.svg'
import { CiSearch } from "react-icons/ci";
const Header = (props)=>{
  return<>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={LogoApp}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Catogaries</Nav.Link>
            <Nav.Link href="#action1">Services</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          </Nav>
          <Form className="d-flex" id='formSearch'>
            <Form.Control
              type="search"
              placeholder="Search"
              id='inputSearch'
            />
            <Button id='btnSearch'><CiSearch style={{color:'#000', fontSize:'25px', fontWeight:'200'}}/></Button>
          </Form>
          <Button>Login</Button>
          <Button>Register</Button>
          <a href=""><img src={iconCart} alt="Icon Cart" /></a>
          <a href=""><img src={iconUser} alt="Icon User" /></a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}
export default Header