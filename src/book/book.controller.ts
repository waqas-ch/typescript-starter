import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Book } from 'src/interfaces/book.interface';
import { BookService } from './book.service';
@Controller('auth')
export class BookController {

    constructor(private authService:BookService){

    }
    @Get('books')
    getName(){
    return this.authService.findAll()
    }
    @Get('book/:id')
    getOnebook(
        @Param ('id')id:string
    ){
    return this.authService.findByName(parseInt(id))
    }
    @Post('book')
    createbook(@Body() book:Book
        ){
            console.log(book,"000----->");
    return this.authService.createbook(book)
    }

    @Put('book/:id')
    updateBook(@Param('id') id: string, @Body() body: Book) {
      
      console.log('body: ', body),id;
  
      return this.authService.updatebook(body,parseInt(id));
    }
    @Delete('book/:id')
    deletebook(@Param('id')id:string){
    this.authService.deletebook(parseInt(id))

    }
  
}
