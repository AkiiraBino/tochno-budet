import "./App.css"

import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
      />
      <Container>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer/>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
