import { Controller, Get, Param } from "@nestjs/common";
import { TrainsService } from "./train.service";

@Controller("trains")
export class TrainsController {
    constructor(
        private readonly _trainsService: TrainsService
    ) {};

    @Get()
    async getTrains() {
        return await this._trainsService.getTrains();
    };

    @Get(":id")
    async getTrain(
        @Param("id") id: number
    ) {
        return await this._trainsService.getTrain(id);
    };
};