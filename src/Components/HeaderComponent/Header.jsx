import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconCart from '../../assets/images/svg/iconCart.svg'
import iconUser from '../../assets/images/svg/iconUser.svg'
import LogoApp from '../../assets/images/svg/logo.svg'
import { CiSearch } from "react-icons/ci";
import { Image } from 'react-bootstrap';
const Header = (props)=>{
  return<>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#"><Image src={LogoApp}></Image></Navbar.Brand>
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
          <a href="#action1"><Image src={iconCart} alt="Icon Cart" /></a>
          <a href="#action1"><Image src={iconUser} alt="Icon User" /></a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}
export default Header