import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/auth.entity';
import { AuthModule } from './auth/auth.module';
import { configService } from './config/config.service';
import { BookModule } from './book/book.module';
import { GenreModule } from './genre/genre.module';
import { AuthMiddleware } from './common/auth.middleware';
import { HttpExceptionFilter } from './common/index';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'chwaqas2806',
      database: 'student-db',
      autoLoadEntities:true,
      synchronize: true,
    }),
    BookModule,
    GenreModule,

  ],
  providers:[
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ]
  
})
export class AppModule {}
