import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";

import ListGroup from 'react-bootstrap/ListGroup'


export default function Annoucements() {
    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <>
                        <ListGroup as="ul">
                            <ListGroup.Item variant="primary">
                                Annoucements
                            </ListGroup.Item>
                            <ListGroup.Item as="li">Communicate with your group</ListGroup.Item>
                            <ListGroup.Item as="li" disabled>
                               
                            </ListGroup.Item>
                            <ListGroup.Item as="li"></ListGroup.Item>
                        </ListGroup>
                    </>
                </Col>
                <Col>
                    <>
                        <ListGroup as="ul">
                            <ListGroup.Item variant="dark">
                                Shopping List
                            </ListGroup.Item>
                            <ListGroup.Item as="li">Add items to your group shopping list</ListGroup.Item>
                            <ListGroup.Item as="li" disabled>
                               
                            </ListGroup.Item>
                            <ListGroup.Item as="li"></ListGroup.Item>
                        </ListGroup>
                    <br />
                    </>
                </Col>

            </Row>
  
    
            
        </Container>
        
            
        
    );
}
