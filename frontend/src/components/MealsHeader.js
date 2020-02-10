import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import MealsImage from '../images/meals.gif'


export default function MealsHeader() {
    return (
        <Container id="meals">
            <Image src={MealsImage} fluid />
        </Container>
    );
}