import { Controller, Get, Render } from '@nestjs/common';
import { UserRepository } from './repository';

@Controller()
export class AppController {
  constructor(private userRepository: UserRepository) {}
  @Get()
  @Render('Home')
  async getHello() {
    console.log(process.env.POSTGRES_HOST);
    const data = await this.userRepository.find();
    console.log(data);
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
