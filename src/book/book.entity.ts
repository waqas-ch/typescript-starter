import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/auth/auth.entity';
import { GenreEntity } from 'src/genre/genre.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

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
  @ApiProperty()

  genres:GenreEntity[]
  }