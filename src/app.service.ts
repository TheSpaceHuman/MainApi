import { Injectable } from '@nestjs/common';
import { IApiMenuItem } from './app.types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  navigations(): IApiMenuItem[] {
    return [
      { title: 'Home', path: '/', id: 1, icon: 'el-icon-house' },
      { title: 'Projects', path: '/projects', id: 2, icon: 'el-icon-list' },
      { title: 'Demos', path: '/demos', id: 3, icon: 'el-icon-platform' },
      { title: 'About', path: '/about', id: 4, icon: 'el-icon-promotion' },
    ];
  }
}
