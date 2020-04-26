import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown,Form, FormControl, Button, ReactBootstrapStyle} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Báo cáo lừa đảo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
          Vui lòng điền thông tin bạn cần báo cáo:
        </p>
        <Form>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
              <Form.Label>Website cần báo cáo: </Form.Label>
              <Form.Control type="text" placeholder="https://websitecanbaocao.com" />
          </Form.Group>
          
          <Button variant="outline-danger" type="submit" style={{float: "right"}}>
              Báo cáo
          </Button>
          </Form>
      </Modal.Body>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-danger" onClick={() => setModalShow(true)}>
        Report Website
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function HeaderElement(){
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">KovidGuard</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="blog">Blog</Nav.Link>
        <NavDropdown title="Info" id="basic-nav-dropdown">
          <NavDropdown.Item href="contact">Liên hệ</NavDropdown.Item>
          <NavDropdown.Item href="report">Báo cáo lừa đảo</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <App></App>
    </Navbar.Collapse>
    </Navbar>
  );
} 

export default HeaderElement;