import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StationEntity } from "../station/station.entity";
import { StationsService } from "../station/station.service";
import { CreateTrainDTO } from "./dto/train.create.dto";
import { TrainEntity } from "./train.entity";
import TrainVM from "./train.viewmodel";


@Injectable()
export class TrainsService {
    constructor(
        @InjectRepository(TrainEntity)
        private readonly _trainsRepository: Repository<TrainEntity>,
        private readonly _stationsService: StationsService
    ) {}

    async createTrain(createTrainDTO: CreateTrainDTO) {
        const sourceStation = await this._stationsService.findOne(createTrainDTO.sourceStationID);
        const destinationStation = await this._stationsService.findOne(createTrainDTO.destinationStationID);
        
        return await this._trainsRepository.insert({
            name: createTrainDTO.name,
            arrivalDate: createTrainDTO.arrivalDate,
            sourceStation,
            destinationStation
        });
    };

    async getTrains(): Promise<TrainVM[]> {
        const trains = await this._trainsRepository.createQueryBuilder("train_entity")
            .leftJoinAndSelect('train_entity.destinationStation', 'destinationStation')
            .leftJoinAndSelect('train_entity.sourceStation', 'sourceStation')
            .where(`train_entity.arrivalDate >= CURDATE() AND train_entity.arrivalDate <= (CURDATE() + INTERVAL 7 DAY)`)
            .getMany();

        

        return trains.map(train => this.createTrainVM(train));
    };

    async getTrain(id: number): Promise<TrainVM> {
        const train = await this._trainsRepository.createQueryBuilder("train_entity")
        .leftJoinAndSelect('train_entity.destinationStation', 'destinationStation')
        .leftJoinAndSelect('train_entity.sourceStation', 'sourceStation')
        .where("train_entity.id = :id", { id })
        .getOne();

        return this.createTrainVM(train);
    };

    async findOne(id: number): Promise<TrainEntity> {
        return await this._trainsRepository.findOneBy({ id });
    };

    createTrainVM(train: TrainEntity): TrainVM {
        return new TrainVM(
            train.id,
            train.name,
            train.arrivalDate,
            train.sourceStation.name,
            train.destinationStation.name,
        );
    };
};