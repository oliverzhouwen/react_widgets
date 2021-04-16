import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../style/header.css';

const Header = () => {
    return (
        <Navbar id="header" bg="dark" variant="dark">
            <Navbar.Brand href="#home" id="brand">WZ</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Country Wiki</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            {/* <Button variant="outline-info">Search</Button> */}
            </Form>
        </Navbar>
    )
}

export default Header;