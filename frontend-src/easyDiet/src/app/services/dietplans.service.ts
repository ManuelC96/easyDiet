import { Injectable, signal } from '@angular/core';
import { DietInfo } from '../models/diet.info';

@Injectable({
  providedIn: 'root'
})
export class DietplansService {

  constructor() { }

  dietInfoList = signal<DietInfo[]>([
    {
    id: 'A1',
    name: 'Diet 1',
    duration: 30,
    kcal: 2000
    },
    {
      id: 'B1',
      name: 'Diet 2',
      duration: 30,
      kcal: 2500
    },
    {
      id: 'C1',
      name: 'Diet 3',
      duration: 30,
      kcal: 3000
    },
    {
      id: 'D1',
      name: 'Diet 4',
      duration: 30,
      kcal: 1500
    },
    {
      id: 'E1',
      name: 'Diet 5',
      duration: 30,
      kcal: 1000
    }
  ])

}
