import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpExceptionFilter } from 'src/common';
import { AuthMiddleware } from 'src/common/auth.middleware';
import { BaseInterceptor } from 'src/common/exception.intercept';
import { AuthController } from './auth.controller';
import { User } from './auth.entity';
import { AuthService } from './auth.service';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService,
    // { provide: APP_FILTER, useClass: HttpExceptionFilter },
    // { provide: HTTP_INTERCEPTORS, useClass:BaseInterceptor , multi: true },
  ],
})
export class AuthModule implements NestModule{
    public configure(consumer: MiddlewareConsumer) {
      consumer.apply(AuthMiddleware).
      exclude('/v1.0/auth/students')
      .forRoutes({
        path:'/v1.0/auth/*',
        method:RequestMethod.ALL
      })
      
    }
}
