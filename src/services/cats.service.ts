import { Injectable } from '@nestjs/common';

import { ICat } from '../interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = [];

  addCat(cat: ICat): ICat {
    this.cats.push(cat);
    console.log({ cats: this.cats });
    return cat;
  }

  getAllCats(): ICat[] {
    console.log({ cats: this.cats });
    return this.cats;
  }
}
