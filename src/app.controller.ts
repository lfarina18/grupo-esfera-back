import { Controller, Get, Param } from '@nestjs/common';
import * as appService from './app.service';
import { corpus } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: appService.AppService) {}

  @Get(':pair')
  getPairValues(@Param('pair') pair: string) {
    return this.appService.getPairValues(corpus, pair);
  }
}
