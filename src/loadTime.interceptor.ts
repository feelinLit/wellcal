import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();
    const response = context.switchToHttp().getResponse();
    return next
      .handle()
      .pipe(
        finalize(() =>
          response.setHeader(
            'X-Server-Load-Time',
            `${Date.now() - startTime}ms`,
          ),
        ),
      );
  }
}
