import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Menu() {
  return (
    <Container >
      
      <Navbar bg="light" variant="light">
        <Row className="justify-content-md-center">
          
            
    
            <Nav className="mr-auto">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Trip Selector
              </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Trip 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Trip 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">trip 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="primary" href="#schedule">Activity Schedule</Button>
              <Button variant="success" href="#meals">Meal Plan</Button>
              <Button variant="danger" href="#rooms">Bedrooms</Button>
            </Nav>
         
        </Row>
      </Navbar>
      


     
    </Container>
  
     
      
    
  );
}
export default Menu;

