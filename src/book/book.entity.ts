import { ArrayMinSize, IsArray, ValidateNested } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/auth/auth.entity';
import { GenreEntity } from 'src/genre/genre.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import {Type as ValidaType} from '@nestjs/class-transformer'

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()

  id: number;

  @Column()
  @ApiProperty()

  name: string;

  @ManyToOne(type=>User,user=>user.books)
  @ApiProperty()

  user:User[]
    
  @ManyToMany(type=>GenreEntity)
  @JoinTable()
  @ApiProperty({type:GenreEntity})
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @ValidaType(()=>BookEntity)
  genres:GenreEntity[]

  
  }