import { GenreService } from './genre.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Genre } from 'src/interfaces/genre.interface';


@Controller('auth')
export class GenreController {

    constructor(private authService:GenreService){

    }
    @Get('Genres')
    getName(){
    return this.authService.findAll()
    }
    @Get('Genre/:id') 
    getOneGenre(
        @Param ('id')id:string
    ){
    return this.authService.findByName(parseInt(id))
    }
    @Post('Genre')
    createGenre(@Body() genre:Genre
        ){
            console.log(genre,"000----->");
    return this.authService.createGenre(genre)
    }

    @Put('Genre/:id')
    updateGenre(@Param('id') id: string, @Body() body: Genre) {
      
      console.log('body: ', body),id;
  
      return this.authService.updateGenre(body,parseInt(id));
    }
    @Delete('Genre/:id')
    deleteGenre(@Param('id')id:string){
    this.authService.deleteGenre(parseInt(id))

    }
  
}
