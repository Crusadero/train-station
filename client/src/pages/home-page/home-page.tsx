import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTrains } from "../../api/services/train/train.service";
import TrainVM from "../../api/services/train/train.viewmodel";
import Header from "../../components/app-header/app-header";
import TrainsList from "../../components/trains-list/trains-list";
import TrainsListItem from "../../components/trains-list/trains-list-item/trains-list-item";
import "./home-page.css"

export default function HomePage() {
    const navigate = useNavigate();
    const navigateTrainInfoPage = (id: number) => navigate(`./train-info/${id}`);

    const [trains, setTrains] = useState<TrainVM[]>([]);

    useEffect(() => {
        (async () => {
            const [trains, error] = await getTrains();
            if (error) return alert(error);
            setTrains(trains);
        })()
    }, []);

    const onTrainDetail = (train: TrainVM) => {
        navigateTrainInfoPage(train.id);
    };

    if (!trains.length) return <h1>Loading...</h1>;

    return (
        <>
            <Header title="Trains Inforamtion"/>
            <TrainsList listItems={trains.map((train, index) => (
                <TrainsListItem
                    name={train.name}
                    source={train.sourceStationName}
                    destination={train.destanationStationName}
                    arrival={new Date(train.arrivalDate).toLocaleString()}
                    train={train}
                    onClick={onTrainDetail}
                    key={index}
                    
                />
            ))}/>
        </>
    )
};