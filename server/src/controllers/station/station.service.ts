import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStationDTO } from "./dto/station.create.dto";
import { StationEntity } from "./station.entity";
import StationVM from "./station.viewmodel";

@Injectable()
export class StationsService {
    constructor(
        @InjectRepository(StationEntity)
        private _stationsRepository: Repository<StationEntity>,
    ) {};

    async createStation(createStationDTO: CreateStationDTO) {
        return await this._stationsRepository.insert({
            name: createStationDTO.name
        });
    };

    async getStations(): Promise<StationVM[]> {
        const trains = await this._stationsRepository.find();
        
        return trains.map(train => this.createStationVM(train));
    };

    async findOne(id: number): Promise<StationEntity> {
        return await this._stationsRepository.findOneBy({ id });
    };

    createStationVM(station: StationEntity): StationVM {
        return new StationVM(
            station.id,
            station.name,
        );
    };
};