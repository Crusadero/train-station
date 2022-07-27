import { ReactNode } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./trains-list.css";

export default function TrainsList(props: {
    listItems: ReactNode,
}) {
    return (
        <div className="trains-list">
            <Container className="list-container">
                <div className="list-items">
                    <Row className="header-row">
                        <Col>Train</Col>
                        <Col>Source</Col>
                        <Col>Destination</Col>
                        <Col>Arrival</Col>
                    </Row>
                    {props.listItems}
                </div>
            </Container>
        </div>
    )
};