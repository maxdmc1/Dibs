import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import RoomsImage from '../images/Rooms.png'


export default function RoomsHeader() {
    return (
        <Container>
            <Image src={RoomsImage} fluid />
        </Container>
    );
}