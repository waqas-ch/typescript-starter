import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GenreEntity   {
  @PrimaryGeneratedColumn()
  @ApiProperty()

  id: number;

  @Column()
  @ApiProperty()

  name: string;


}