import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb(){
    const heroes = [
      { id: 12, name: 'Dr. Stranger' },
      { id: 13, name: 'Iron-Man' },
      { id: 14, name: 'Spider-Man' },
      { id: 15, name: 'Mighty Thor' },
      { id: 16, name: 'Incredible Hulk' },
      { id: 17, name: 'Moon Knight' },
      { id: 18, name: 'Loki' },
      { id: 19, name: 'Ant-Man' },
      { id: 20, name: 'Star Lord' }
    ];
    return {heroes}
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
