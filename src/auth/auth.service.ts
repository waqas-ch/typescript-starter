import { Injectable } from '@nestjs/common';
import { Student } from '../interfaces/student.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './auth.entity';
import { BookEntity } from 'src/book/book.entity';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  students = [];
  getStudents() {
    return this.students;
  }
  findAll(): Promise<User[]> {
    return this.repo.find(
        {

            relations: {
                books: true,
            },
        }

    
    );
  }
  createStudent(student: User) {
    // this.students.push(student)
    this.repo.save(student);
    return 'Added Successfully';
  }
  updateStudent(student: User, id: number) {
    // let itemIndex = this.students.findIndex(item => item.id == id);
    // this.students[itemIndex] = student;
    this.repo.update(id, student);
    return 'Updated Successfully';
  }
  findByName(id: number): Promise<User> {
    return this.repo.findOneBy({
        id: id // where id is your column name
        })
  }
  deleteStudent(id:number){
    return this.repo.delete(id)
  }
  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    console.log(typeof(userID));
    const user: User = await this.repo.findOne({where: {id: userID}, relations: ['books']});
    return user.books;
  }
 
}
