import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import MealsImage from '../images/meals.jpg';



export default function Meals() {
    return (
        <Container >
            <Row>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 1</Card.Title>
                                <Card.Text>
Create your meal plan for the day
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 2</Card.Title>
                                <Card.Text>
Create your meal plan for the day
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 3</Card.Title>
                                <Card.Text>
Create your meal plan for the day
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>


            </Row>
            <Row>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 4</Card.Title>
                                <Card.Text>
Create your meal plan for the day
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 5</Card.Title>
                                <Card.Text>
Create your meal plan for the day
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 6</Card.Title>
                                <Card.Text>
Create your meal plan for the day
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>


            </Row>
        
        </Container>

    );
}
