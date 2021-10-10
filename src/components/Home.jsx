import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import GuitarPlayer from "../video/GuitarPlayer.mp4"

const Home = () => {
    return (
        <div className="d-flex m-5 justify-content-center">
            <video
            autoPlay loop muted
            style={{
                position: 'absolute', width: '100%', left: "50%", top: '50%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: '-1'
            }}
            >
            <source
                src={GuitarPlayer} type="video/mp4"
            />
            </video>


            <Container
                style={{
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Row
                style={{
                    minWidth: '150px',
                    marginTop: '200px',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
                >
                <Col>
                <div
                style={{
                    margin: "0 auto",
                    color: 'white',
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontFamily: 'Roboto',
                    fontWeight: 'Bold',
                    fontSize: '2.5em',
                }}>
                    <span>
                    Welcome to
                    <span
                    style={{ color: '#ffc107' }}
                    > MusicLand
                    </span>
                    </span>
                </div>
                    </Col>
                </Row>

                <Row
                style={{ minWidth: '450px' }}
                >
                <Col>
                <div>
                <Link to="/products"
                    style={{
                        marginTop: '50px',
                        border: '5px solid white',
                        padding: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'Roboto',
                        fontSize: '1em',
                        color: 'white'
                }}
                >
                <span className="nav-warning--color">
                Visit our products!
                </span>
                </Link>
                </div>
                </Col>
                <Col>
                <div>
                <Link to="/products"
                    style={{
                        marginTop: '50px',
                        border: '5px solid white',
                        padding: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'Roboto',
                        fontSize: '1em',
                        color: 'white'
                }}
                >
                <span className="nav-warning--color">
                Contact Us!
                </span>
                </Link>
                </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
