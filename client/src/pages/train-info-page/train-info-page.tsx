import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrain } from "../../api/services/train/train.service";
import TrainVM from "../../api/services/train/train.viewmodel";
import AppHeader from "../../components/app-header/app-header";
import TrainInfo from "../../components/train-info/train-info";
import "./train-info-page.css";

export default function TrainInfoPage() {
    const { id } = useParams();

    const [train, setTrain] = useState<TrainVM>();

    useEffect(() => {
        (async () => {
            const [train, error] = await getTrain(id as string);
            if (error) return alert(error);
            setTrain(train);
        })()
    }, [id]);

    if (!train) return <h1>Loading...</h1>;

    return (
        <div className="train-info-page">
            <AppHeader title="Train Info"/>
            <TrainInfo train={train}/>
        </div>
    )
};