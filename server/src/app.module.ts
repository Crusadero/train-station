import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationEntity } from './controllers/station/station.entity';
import { TrainEntity } from './controllers/train/train.entity';
import { TrainsModule } from './controllers/train/train.module';
import { StationModule } from './controllers/station/station.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'root',
			logging: false,
			database: 'train_station',
			entities: [StationEntity, TrainEntity], 
			synchronize: true,
		}),
		TrainsModule,
		StationModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {};
