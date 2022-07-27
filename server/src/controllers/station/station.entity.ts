import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { TrainEntity } from '../train/train.entity';


@Entity()
export class StationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => TrainEntity, (train) => train.destinationStation)
    destinationStations: TrainEntity[];

    @OneToMany(() => TrainEntity, (train) => train.sourceStation)
    sourceStations: TrainEntity[];
};