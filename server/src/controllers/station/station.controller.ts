

import { Controller, Get } from "@nestjs/common";
import { StationsService } from "./station.service";

@Controller("stations")
export class StationsController {
    constructor(
        private readonly _stationsService: StationsService
    ) {};

    @Get()
    async getStations() {
        return await this._stationsService.getStations();
    };
};