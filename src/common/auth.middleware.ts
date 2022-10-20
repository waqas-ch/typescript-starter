import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";



@Injectable()
export class AuthMiddleware implements NestMiddleware{

    public async use(req: any, res: any, next: (error?: any) => void) {
        
        const {authorization}=req.headers;
        if(!authorization){
            throw new HttpException({'message':'Missing authorization header'},HttpStatus.BAD_REQUEST)
        }
        next()
    }
        
    
}