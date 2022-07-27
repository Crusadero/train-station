import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { StationEntity } from '../station/station.entity';

@Entity()
export class TrainEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false
    })
    arrivalDate: Date;

    @ManyToOne(type => StationEntity)
    sourceStation: StationEntity;

    @ManyToOne(type => StationEntity)
    destinationStation: StationEntity;
};