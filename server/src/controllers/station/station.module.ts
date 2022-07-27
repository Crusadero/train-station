import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationsController } from './station.controller';
import { StationEntity } from './station.entity';
import { StationsService } from './station.service';

@Module({
    imports: [TypeOrmModule.forFeature([StationEntity])],
    providers: [StationsService],
    controllers: [StationsController],
    exports: [StationsService]
})
export class StationModule {}