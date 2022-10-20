import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';
@Injectable()
export class BookService {
    constructor(
      @InjectRepository(BookEntity) private readonly repo: Repository<BookEntity>,
    ) {}
  
    books = [];
    getbooks() {
      return this.books;
    }
    findAll(): Promise<BookEntity[]> {
      return this.repo.find();
    }
    createbook(book: BookEntity) {
      // this.books.push(book)
      this.repo.save(book);
      return 'Added Successfully';
    }
    updatebook(book: BookEntity, id: number) {
      // let itemIndex = this.books.findIndex(item => item.id == id);
      // this.books[itemIndex] = book;
      this.repo.update(id, book);
      return 'Updated Successfully';
    }
    findByName(id: number): Promise<BookEntity> {
      return this.repo.findOneBy({
          id: id // where id is your column name
          })
    }
    deletebook(id:number){
      return this.repo.delete(id)
    }
   
  }
