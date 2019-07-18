import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log(cat)
    console.log('create')
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}