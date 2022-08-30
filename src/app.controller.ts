import { Controller, Get, Render } from '@nestjs/common';
import { AuthService } from './auth';
import { UserRepository } from './repository';

@Controller()
export class AppController {
  constructor() {} // private userRepository: UserRepository, // private authService: AuthService,
  @Get()
  @Render('Home')
  async getHello() {
    console.log(process.env.POSTGRES_HOST);
    // const data = await this.authService.getAllUsers();
    // console.log(data);
    return {
      message: 'Hello Guy hehe',
    };
  }
  @Get('/about')
  @Render('About')
  getAbout() {
    return {
      message: 'con cac ne',
    };
  }
}
