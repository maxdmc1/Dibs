import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import ActivityImage from '../images/Activity.gif'


export default function Schedule() {
    return (
        <Container id="schedule">
            <Image src={ActivityImage} fluid  />
        </Container>
    );
}