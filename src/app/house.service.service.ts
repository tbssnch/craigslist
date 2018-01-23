import { Injectable } from '@angular/core';
import { House } from './house.model';
import { HOUSING } from './mock-house';

@Injectable()
export class HouseService {

  constructor() { }

  getHousing() {
    return HOUSING;
  }

  getHouseById(houseId: number){
    for (let i = 0; i <= HOUSING.length - 1; i++) {
      if (HOUSING[i].id === houseId) {
        return HOUSING[i];
      }
    }
   }


}
