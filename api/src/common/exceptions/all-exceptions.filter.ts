import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal Server Error';

    const devErrorResponse: any = {
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      errorName: exception?.name,
      message: exception?.message,
    };

    const prodErrorResponse: any = {
      statusCode,
      message,
    };

    this.logger.log(
      `\nRequest Method: ${request.method}\nRequestUrl: ${
        request.url
      }\n${JSON.stringify(devErrorResponse)}`,
    );

    response
      .status(statusCode)
      .json(
        process.env.NODE_ENV === 'development'
          ? devErrorResponse
          : prodErrorResponse,
      );
  }
}
