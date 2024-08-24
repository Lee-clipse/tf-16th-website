import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import {
  API_WHERE,
  LOG_IGNORE_URL_LIST,
  LOG_IMPORTANT_URL_LIST,
} from 'src/common/const';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl, body } = request;
    response.on('finish', () => {
      const { statusCode } = response;
      const statusCodeText =
        statusCode >= 400 ? `🔴 ${statusCode}` : statusCode;

      if (!isIgnoreableUrl(method, originalUrl, body)) {
        if (isImportantUrl(originalUrl)) {
          this.logger.log(
            `\n\t 🟢 ${method} ${originalUrl} ${convertImportantUrl(
              originalUrl,
            )}\n\t - body: ${JSON.stringify(body)}\n`,
          );
        } else {
          this.logger.log(
            `\n\t ${method} ${originalUrl} ${statusCodeText} \n\t - body: ${JSON.stringify(
              body,
            )}\n`,
          );
        }
      }
    });
    next();
  }
}

const convertImportantUrl = (originalUrl: string) => {
  for (const importantUrl of LOG_IMPORTANT_URL_LIST) {
    if (originalUrl.includes(importantUrl)) {
      return API_WHERE[importantUrl];
    }
  }
  return '?';
};

const isIgnoreableUrl = (method: string, originalUrl: string, body: object) => {
  for (const ignoreUrl of LOG_IGNORE_URL_LIST) {
    if (originalUrl.includes(ignoreUrl)) return true;
  }
  return false;
};

const isImportantUrl = (originalUrl: string) => {
  for (const importantUrl of LOG_IMPORTANT_URL_LIST) {
    if (originalUrl.includes(importantUrl)) return true;
  }
  return false;
};
