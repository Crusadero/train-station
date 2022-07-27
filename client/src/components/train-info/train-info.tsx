import TrainVM from "../../api/services/train/train.viewmodel";
import "./train-info.css";

export default function TrainInfo(props: {
    train: TrainVM,
}) {

    console.log(props.train);
    return (
        <div className="train-info">
            <table>
                <tbody>
                    <tr>
                        <th>Train</th>
                        <td>{props.train.name}</td>
                    </tr>
                    <tr>
                        <th>Source</th>
                        <td>{props.train.sourceStationName}</td>
                    </tr>
                    <tr>
                        <th>Destination</th>
                        <td>{props.train.destanationStationName}</td>
                    </tr>
                    <tr>
                        <th>Arrival</th>
                        <td>{new Date(props.train.arrivalDate).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};