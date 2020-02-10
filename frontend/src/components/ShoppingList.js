import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ShoppingList() {
    return (
        <div className="container">
            <Row>
                <Col>
                    <>
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>Family 1</Card.Header>
                            <Card.Body>
                                <Card.Title>Shopping List</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Button variant="outline-secondary" href="#list">Save</Button>
                    </>
                </Col>
                <Col>
                    <>
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>Family 2</Card.Header>
                            <Card.Body>
                                <Card.Title>Shopping List</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Button variant="outline-secondary" href="#list">Save</Button>
                    </>
                </Col>
                <Col>
                    <>
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>Family 3</Card.Header>
                            <Card.Body>
                                <Card.Title>Shopping List</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Button variant="outline-secondary" href="#list">Save</Button>
                    </>
                </Col>
                
            </Row>
            
        </div>
    );
}

export default ShoppingList;
