import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

import Card from 'react-bootstrap/Card';


export default function Annoucements() {
    return (
        <Container>
            
            <Row>
                
                <Col>
                    
                    <Card border="danger" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Danger Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    
                </Col>
              

            </Row>
  
    
            
        </Container>
        
            
        
    );
}
