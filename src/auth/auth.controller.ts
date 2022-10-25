import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from './auth.entity';
import { AuthService } from './auth.service';
import { Student } from '../interfaces/student.interface';
import { ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../common/exception.filter';
import { BaseInterceptor } from 'src/common/exception.intercept';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('students')
//   @UseFilters(new HttpExceptionFilter())
  @UseInterceptors(BaseInterceptor)

  getName() {
    // throw new HttpException('Conflict',HttpStatus.CONFLICT)
    return this.authService.findAll();
  }
  @Get('student/:id')
  getOneStudent(@Param('id') id: string) {
    return this.authService.findByName(parseInt(id));

  }
  @Get('student/books/:id')
  getBooksStudent(@Param('id') id: string) {
    // return this.authService.findByName(parseInt(id));
    return this.authService.getBooksOfUser(parseInt(id))

  }
  @Post('student')
  @UsePipes(new ValidationPipe({transform:true}))
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOkResponse({description:'OK'})
  @ApiInternalServerErrorResponse({description:'Error'})
  createStudent(@Body() student: User) {
    console.log(student, '000----->');
    
    return this.authService.createStudent(student);
  }

  @Put('student/:id')
  updateUser(@Param('id') id: string, @Body() body: User) {
    console.log('body: ', body), id;

    return this.authService.updateStudent(body, parseInt(id));
  }
  @Delete('student/:id')
  deleteStudent(@Param('id') id: string) {
    this.authService.deleteStudent(parseInt(id));
  }
}
