import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Logo from './images/logo.PNG'
import Bg from './images/bg.jpg'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function App() {
  return(
<>
{/* topbar */}
    <Navbar style={{backgroundColor:'#f4f4f4'}}>
        <Container>
          <Navbar.Brand  className='topbar-alignment'>Turo has launched in New York! Tap to explore cars.</Navbar.Brand>
        </Container>
      </Navbar>


      <Navbar>
      <Container>
        <Navbar.Brand >
        <img alt='' src= {Logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button className='btn-style' variant="outline-dark">Become a host</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='bg' style={{backgroundImage:`url("https://resources.turo.com/f/81934/1500x400/1b78692b7b/hp_ny_1500x400_2.jpg")`}}>
    <Form>
      <Container>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      </Container>
    </Form>
    </div>
  <Button> Hello</Button>

  </>
  )
}

export default App;