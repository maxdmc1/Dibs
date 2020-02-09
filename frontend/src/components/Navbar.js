import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  return (
    <div className="container" > 
    
      <Nav variant="pills" defaultActiveKey="/home">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Trip Selector
  </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Trip 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Trip 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">trip 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Item>
          <Nav.Link href="#schedule">Activity Schedule</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#meals">Meal Plan</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#rooms">Bedroooms</Nav.Link>
        </Nav.Item>
 


      </Nav>
    </div>
  
     
      
    
  );
}
export default Navbar;

