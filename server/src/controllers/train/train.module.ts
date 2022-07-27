import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationModule } from '../station/station.module';
import { TrainsController } from './train.controller';
import { TrainEntity } from './train.entity';
import { TrainsService } from './train.service';

@Module({
    imports: [StationModule, TypeOrmModule.forFeature([TrainEntity])],
    providers: [TrainsService],
    controllers: [TrainsController],
    exports: [TrainsService]
})
export class TrainsModule {}