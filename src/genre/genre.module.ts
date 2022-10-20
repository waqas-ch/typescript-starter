import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreController } from './genre.controller';
import { GenreEntity } from './genre.entity';
import { GenreService } from './genre.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenreEntity])],

  controllers: [GenreController],

  providers: [GenreService]
})
export class GenreModule {}
