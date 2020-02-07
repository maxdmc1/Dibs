import React from 'react';
import Nav from 'react-bootstrap/Nav';
function Navbar() {
  return (
    <div className="container" > 
      <Nav variant="pills" defaultActiveKey="/home">
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

