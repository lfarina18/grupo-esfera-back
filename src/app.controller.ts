import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('pair')
  getPairValues(@Body() body: AppDto) {
    return this.appService.getPairValues(body.corpus, body.pair);
  }
}
