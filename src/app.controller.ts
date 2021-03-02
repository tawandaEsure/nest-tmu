import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { first, map } from 'rxjs/operators';
import { AppService } from './app.service';
import { User } from './user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Get from service
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Get from here
  @Get('/yo')
  getYo(): string {
    return 'yo';
  }

  // Get from external api 
  @Get('/findall')
  findAll() {
    return this.appService.findAll().pipe(first(), map(response => response.data));
  }
}
