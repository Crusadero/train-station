import { Col, Row } from "react-bootstrap";
import TrainVM from "../../../api/services/train/train.viewmodel";
import "./trains-list-item.css";

export default function TrainsListItem(props: {
    name: string
    source: string,
    destination: string,
    arrival: string,
    train: TrainVM,
    onClick: (train: TrainVM) => void,
}) {
    return(
        <Row className="trains-list-item" onClick={() => props.onClick(props.train)}>
            <Col> {props.name} </Col>
            <Col> {props.source} </Col>
            <Col> {props.destination} </Col>
            <Col> {props.arrival} </Col>
        </Row>
    );
};