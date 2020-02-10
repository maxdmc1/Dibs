import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';


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
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Enter Item"
                                            aria-label="Shopping item input"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary">Save</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        
                    </>
                </Col>
                <Col>
                    <>
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>Family 2</Card.Header>
                            <Card.Body>
                                <Card.Title>Shopping List</Card.Title>

                                <Card.Text>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Enter Item"
                                            aria-label="Shopping item input"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary">Save</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </>
                </Col>
                <Col>
                    <>
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>Family 3</Card.Header>
                            <Card.Body>
                                <Card.Title>Shopping List</Card.Title>

                                <Card.Text>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Enter Item"
                                            aria-label="Shopping item input"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary">Save</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </>
                </Col>
                
            </Row>
            
        </div>
    );
}

export default ShoppingList;
