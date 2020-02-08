import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import RoomsImage from '../images/beds.png';



export default function Meals() {
    return (
        <Container >
            <Row>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={RoomsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Room 1</Card.Title>
                                <Card.Text>
                                    Call Dibbs! on this room
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={RoomsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Room 2</Card.Title>
                                <Card.Text>
                                    Call Dibbs! on this room
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={RoomsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Room 3</Card.Title>
                                <Card.Text>
                                    Call Dibbs! on this room
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

                            <Card.Img src={RoomsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Room 4</Card.Title>
                                <Card.Text>
                                    Call Dibbs! on this room
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={RoomsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Room 5</Card.Title>
                                <Card.Text>
                                    Call Dibbs! on this room
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={RoomsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Room 6</Card.Title>
                                <Card.Text>
                                    Call Dibbs! on this room
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
