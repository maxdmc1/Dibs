import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";

import ListGroup from 'react-bootstrap/ListGroup'


export default function Annoucements() {
    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>
                                Annoucements
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item as="li" disabled>
                            Morbi leo risus
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>
                            Shopping List
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item as="li" disabled>
                            Morbi leo risus
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                </Col>

            </Row>
  
    
            
        </Container>
        
            
        
    );
}
