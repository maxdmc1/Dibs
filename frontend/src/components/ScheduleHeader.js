import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import ActivityImage from '../images/Activity.png'


export default function Schedule() {
    return (
        <Container>
            <Image src={ActivityImage} fluid  />
        </Container>
    );
}