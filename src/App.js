import React from "react";
// Importing bootstrap components
import { Card, Button, Container, Row, Col } from "react-bootstrap";

//Using class component
class App extends React.Component {
  // Initial state
  state = {
    fullName: "Bukayo Saka",
    bio: "Male",
    imgSrc:
      "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Saka_46.jpg?h=74c28fda&auto=webp&itok=LovYzw79",
    profession: "Footballer",
    shows: true,
    timeMounted: 0,
    timeElapsed: 0,
  };

  // Component lifecycle
  componentDidMount() {
    this.setState({ timeMounted: Date.now() });

    // setInterval to update timeElapsed every
    this.timer = setInterval(() => {
      this.updateShow();
    }, 1000);
  }

  // Function to update timeElapsed
  updateShow() {
    const { timeMounted } = this.state;
    // Calculate time elapsed since mounting
    const updatedTime = Date.now();
    // Convert time to seconds
    const elapsedTime = Math.floor((updatedTime - timeMounted) / 1000);
    // Update timeElapsed
    this.setState({ timeElapsed: elapsedTime });
  }

  // Clear interval
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  // Function to handle button click
  handleClick = () => {
    this.setState({ shows: !this.state.shows });
  };

  // Render method
  render() {
    let text = "";
    // Change button text based on state
    text = this.state.shows ? "Hide Profile" : "Show Profile";
    return (
      <div className="text-center ">
        <Container>
          <Row>
            {this.state.shows ? (
              <Col sm={4} className="m-auto mt-5">
                <Card style={{}}>
                  <Card.Img variant="top" src={this.state.imgSrc} />
                  <div
                    className="bg-light text-center"
                    style={{ fontSize: "20px", fontStyle: "italic" }}
                  >
                    <Card.Body>
                      <Card.Title>{this.state.fullName}</Card.Title>
                      <Card.Text>{`Bio: ${this.state.bio}`}</Card.Text>
                      <div className="text-center">
                        <Card.Text className="d-inline-block">{`Profession: ${this.state.profession}`}</Card.Text>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ) : (
              <Col sm={4} className="d-none"></Col>
            )}

            <div className="text-center mt-5">
              <Button variant="primary" onClick={this.handleClick}>
                {text}
              </Button>
            </div>
            <p>Time Elapsed Since Mounting: {this.state.timeElapsed} seconds</p>
          </Row>
        </Container>
      </div>
    );
  }
}
//  Export App component
export default App;
