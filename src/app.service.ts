import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) { }

  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Observable<AxiosResponse<User[]>> {
    return this.httpService.get('https://jsonplaceholder.typicode.com/users');
  }
}
