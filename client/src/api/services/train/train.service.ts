import { API_URL } from "../../config";
import TrainVM from "./train.viewmodel";

const REQUEST_PAGE = "trains";


export async function getTrains(): Promise<[data: TrainVM[], error: string]> {
    try {
        const options: RequestInit = {
            method: "GET",
        };

        const response = await fetch(`${API_URL}${REQUEST_PAGE}`, options);
        const text = await response.json()

        const error = (typeof text === "object") ? text.error : null;
        return [error ? null : text, error];
    } catch(e) {
        console.error(e);
        return [[], ""];
    };
};

export async function getTrain(
    id: number | string
): Promise<[data: TrainVM, error: string]> {
    try {
        const options: RequestInit = {
            method: "GET",
        };

        const response = await fetch(`${API_URL}${REQUEST_PAGE}/${id}`, options);
        const text = await response.json()

        const error = (typeof text === "object") ? text.error : null;
        return [error ? null : text, error];
    } catch(e) {
        console.error(e);
        return [null, ""];
    };
};