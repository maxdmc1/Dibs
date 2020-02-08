import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ScheduleImage from '../images/schedule.jpg';



export default function Schedule() {
    return (
        <Container >
            <Row>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 1</Card.Title>
                                <Card.Text>
Add your daily schedule of activities
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 2</Card.Title>
                                <Card.Text>
Add your daily schedule of activities
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 3</Card.Title>
                                <Card.Text>
Add your daily schedule of activities
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

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 4</Card.Title>
                                <Card.Text>
Add your daily schedule of activities
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 5</Card.Title>
                                <Card.Text>
Add your daily schedule of activities
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 6</Card.Title>
                                <Card.Text>
Add your daily schedule of activities
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
