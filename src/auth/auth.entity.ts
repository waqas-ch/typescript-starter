import { ArrayMinSize, IsArray, IsBoolean, isBoolean, IsOptional, IsString, isString, ValidateNested } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BookEntity } from 'src/book/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Type as ValidaType} from '@nestjs/class-transformer'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  @IsOptional()
  id: number;

  @Column()
  @ApiProperty({ required: true })
  @IsString()
  firstName: string;

  @Column()
  @ApiProperty()
  @IsString()
  lastName: string;

  @Column({ default: true })
  @ApiProperty()
//   @IsBoolean()
  isActive: boolean;

  @OneToMany((type) => BookEntity, (book) => book.user)
  @ApiProperty({type:[BookEntity]})
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @ValidaType(()=>BookEntity)
  books: BookEntity[];
}
