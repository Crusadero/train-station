import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { StationsService } from './controllers/station/station.service';
import { TrainsService } from './controllers/train/train.service';

@Controller()
export class AppController {
  	constructor(
		private readonly appService: AppService,
		private readonly _stationsService: StationsService,
		private readonly _trainsService: TrainsService
	) {
		this.init();
	};

	async init(): Promise<void> {
		for (let i = 0; i < 6; i++) {
			if ((await this._stationsService.findOne(i + 1))) continue;

			await this._stationsService.createStation({
				name: `Station ${i}`
			});
		};

		let id = 1;
		for (let i = 0; i < 5; i++) {
			for (let z = 0; z < 5; z++) {
				if ((await this._trainsService.findOne(id))) continue;
		
				await this._trainsService.createTrain({ 
					name: `Train ${z}`,
					arrivalDate: new Date(),
					sourceStationID: i + 1,
					destinationStationID: i + 2,
				});

				id++;
			};
		};
		
		// await this._trainsService.createTrain({ 
		// 	name: `Train hidden`,
		// 	arrivalDate: new Date("2022-08-05T14:48:00"),
		// 	sourceStationID: 1,
		// 	destinationStationID: 2,
		// });

		// не видно таяк більше 7 днів
	};

  	getHello(): string {
    	return this.appService.getHello();
  	};
};
