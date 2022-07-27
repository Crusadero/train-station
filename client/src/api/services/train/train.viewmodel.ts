
export default class TrainVM {
    constructor(
        public id: number,
        public name: string,
        public arrivalDate: Date,
        public sourceStationName: string,
        public destanationStationName: string
    ) {};
};