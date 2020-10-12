import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Row,
  Container,
  Col,
  Image
} from "react-bootstrap";
import logo from "./images/logo512.png"
import logo1 from "./images/angular.png"
import logo2 from "./images/téléchargement (1).png"

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="http://localhost:3000/#home">WikiLord</Navbar.Brand>
        <Nav className="mr-auto ">
          <Container>
            <Row>
              <Col md={4}>
                <Nav.Link href="#home">Join Us</Nav.Link>
              </Col>
              <Col md={4}>
                <Nav.Link href="#features">Information</Nav.Link>
              </Col>
              <Col md={3}>
                <Nav.Link href="#choice">Choices</Nav.Link>
              </Col>
            </Row>
          </Container>
        </Nav>
      </Navbar>
    </>

  );
}
function App1() {
  return (
    <>
    <section id="home" className="home-design">
    <Container>
  <Row>
    <Col md={5}>
    <Form className='form-design'>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Col>
  <Col md={7}>
  <div className="logo-design">
    <img src={logo} alt="react logo"></img>
    <h2 className="title-design">-React Js-</h2>
  </div>
  </Col>
  </Row>
  </Container>
  </section>
</>
  );
}
function App2() {
  return (
    <>
    <section id="features" className="welcome-room-design">
        <Container>
          <Row>
          <Col md={6}>
            <div className="logo-div">
              <img src={logo} alt="" class="logo-react" />
            </div>
            </Col>
            <Col md={6}>
            <div className="info-div">
              <h2 className="title-style">REACT JS</h2>
              <p class="definition">
                React js est une bibliothèque JavaScript libre développée par
                Facebook depuis 2013. Le but principal de cette bibliothèque est
                de faciliter la création d'application web monopage, via la
                création de composants dépendant d'un état et générant une page
                (ou portion) HTML à chaque changement d'état.
              </p>
              <a
                href="https://fr.wikipedia.org/wiki/React_(JavaScript)"
                target="-blank"
                ><Button variant="success">Savoir Plus</Button>{' '}</a>
            </div>
            </Col>
          </Row>
          </Container>
      </section>
      </>
  );   
}
function App3() {
  return (
    <>
    <section id="choice" className="sanding-design">
        <div className="container-sanding">
          <h3>
            <i className="fas fa-grin-hearts"></i> Donnez vos avis sur ces trois
            librairies js <i class="fas fa-grin-hearts"></i>
          </h3>
          <div className="sanding-display">
            <div className="logo-designes">
              <img src={logo} alt="react js logo" className="logos-lib" />
              <img src={logo1} alt="angular js logo" className="logos-lib"/>
              <img src={logo2} alt="vue js logo" className="logos-lib"/>
            </div>
            <div className="s-display">
              <div className="sanding">
                <h4 className="title-logo">React JS</h4>
                <form className="form-designes">
                  <p>-selecte vos avis:</p>
                  <input type="radio" name="gender" value="Fabulous" />
                  <label for="male">Fabulous!!!</label><br />
                  <input type="radio" name="gender" value="Great" />
                  <label for="female">Great!!</label><br />
                  <input type="radio" name="gender" value="Good" />
                  <label for="other">Good</label>
                </form>
              </div>
              <div className="sanding">
                <h4 className="title-logo">Angular JS</h4>
                <form className="form-designes">
                  <p>-selecte vos avis:</p>
                  <input type="radio" name="gender" value="Fabulous" />
                  <label for="male">Fabulous!!!</label><br />
                  <input type="radio" name="gender" value="Great" />
                  <label for="female">Great!!</label><br />
                  <input type="radio" name="gender" value="Good" />
                  <label for="other">Good</label>
                </form>
              </div>
              <div className="sanding">
                <h4 className="title-logo">Vue JS</h4>
                <form className="form-designes">
                  <p>-selecte vos avis:</p>
                  <input type="radio" name="gender" value="Fabulous" />
                  <label for="male">Fabulous!!!</label><br />
                  <input type="radio" name="gender" value="Great" />
                  <label for="female">Great!!</label><br />
                  <input type="radio" name="gender" value="Good" />
                  <label for="other">Good</label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="last">
      <p>Copyright@OmarTEBESSI</p>
    </footer>
    
    </>
  )
  
}

export {App,App1,App2,App3};