import './App.css';
import Navbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <Link to="/create">Create User</Link>

          </Col>
          <Col>
            <Link to="/list">List All Users</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
