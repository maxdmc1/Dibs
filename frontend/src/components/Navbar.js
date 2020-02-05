import React from 'react';
import Nav from 'react-bootstrap/Nav';
function Navbar() {
  return (
    <div className="container"> 
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Trip Schedule</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Meals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Shopping List</Nav.Link>
        </Nav.Item>


      </Nav>
    </div>
  
     
      
    
  );
}
export default Navbar;

