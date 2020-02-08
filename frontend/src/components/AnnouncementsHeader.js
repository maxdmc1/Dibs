import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import PhoneImage from '../images/phone.png'


export default function RoomsHeader() {
    return (
        <Container id="announcements">
            <Image src={PhoneImage} fluid />
        </Container>
    );
}