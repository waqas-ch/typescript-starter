import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class BaseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('CatInterceptor BEFORE');

    return next.handle().pipe(catchError(err=>
        throwError(new HttpException('new message',HttpStatus.BAD_GATEWAY))));
  }
}