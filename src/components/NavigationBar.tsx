import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavigationBar() {

    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Plant Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="plants">MyPlants</Nav.Link>
          <Nav.Link href="calendar">Watering Schedule</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
}

export default NavigationBar