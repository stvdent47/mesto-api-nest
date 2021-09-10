import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ICat } from 'src/interfaces/cat.interface';
import { CatsService } from 'src/services/cats.service';
// import create from './handlers/create';
// import { AppService } from '../services/app.service';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): void {
    // console.log({ request });
    // if (!req.body) {
    // return 'this returns all the cats';
    res.status(200).send('this is sent with res');
    // }
  }

  @Get('cat')
  findOne(): string {
    return 'this would return a specific cat';
  }

  @Get(':id')
  // findOneExact(@Param() params): string {
  //   console.log({ params });
  //   return `this would return cat ${params.id}`;
  // }
  // findOneExact(@Param('id') id: string): string {
  //   console.log({ id });
  //   return `this would return cat ${id}`;
  // }
  async findOneAsync(@Param('id') id: number): Promise<string> {
    if (typeof id !== 'number') throw new Error('not a number');

    const idToSec: number = id * 1000;
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            `this asynchronously a cat with #${id} after ${idToSec} milliseconds`,
          ),
        idToSec,
      );
    });
  }

  @Post()
  create(): string {
    return 'this creates a new cat';
  }
  @Post('createCat')
  createCat(@Body() cat: ICat): ICat {
    return this.catService.addCat(cat);
  }

  @Get('getAllCats')
  async getAllCats(): Promise<ICat[]> {
    return this.catService.getAllCats();
  }
}
