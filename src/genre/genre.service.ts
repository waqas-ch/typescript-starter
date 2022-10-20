import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenreEntity } from './genre.entity';

@Injectable()
export class GenreService {
    constructor(
      @InjectRepository(GenreEntity) private readonly repo: Repository<GenreEntity>,
    ) {}
  
    Genres = [];
    getGenres() {
      return this.Genres;
    }
    findAll(): Promise<GenreEntity[]> {
      return this.repo.find();
    }
    createGenre(Genre: GenreEntity) {
      // this.Genres.push(Genre)
      this.repo.save(Genre);
      return 'Added Successfully';
    }
    updateGenre(Genre: GenreEntity, id: number) {
      // let itemIndex = this.Genres.findIndex(item => item.id == id);
      // this.Genres[itemIndex] = Genre;
      this.repo.update(id, Genre);
      return 'Updated Successfully';
    }
    findByName(id: number): Promise<GenreEntity> {
      return this.repo.findOneBy({
          id: id // where id is your column name
          })
    }
    deleteGenre(id:number){
      return this.repo.delete(id)
    }
    
  }
