import { Controller, Get } from '@nestjs/common';

@Controller({ version: '1', path: 'blogs' })
export class BlogsController {
  @Get()
  findAll() {
    return { message: 'blogs' };
  }
}
