import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import MealsImage from '../images/Meals.png'


export default function MealsHeader() {
    return (
        <Container>
            <Image src={MealsImage} fluid />
        </Container>
    );
}