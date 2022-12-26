import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, Observable, tap } from "rxjs";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const userAgent = context.switchToHttp().getRequest().headers['user-agent'];

    const now = Date.now();
    return next.handle().pipe(
      tap((data) => {
        // you can capture user-agent string of user browser and save it to logger
        // also can calculate the execution time.
        console.log(`After... ${Date.now() - now}ms`, data, userAgent); // you can use any logger like winston
      }),
      catchError((err) => {
        console.log('err caught in interceptor, you can log it in logger or send it to newrelic or similar', err);
        throw err; // throwing it for client
      }),
    );
  }

}