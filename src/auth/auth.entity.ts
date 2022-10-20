import { ApiProperty } from '@nestjs/swagger';
import { BookEntity } from 'src/book/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty({ required: true })
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column({ default: true })
  @ApiProperty()
  isActive: boolean;

  @OneToMany((type) => BookEntity, (book) => book.user)
  @ApiProperty()
  
  books: BookEntity[];
}
