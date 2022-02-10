import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { IApiMenuItem } from './app.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Header('Access-Control-Allow-Origin', '*')
  @Get('navigations')
  navigations(): IApiMenuItem[] {
    return this.appService.navigations();
  }
}
