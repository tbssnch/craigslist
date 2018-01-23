import { Component, OnInit } from '@angular/core';
import { House } from '../house.model';
import { Router } from '@angular/router';
import { HouseService } from '../house.service.service';


@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
  providers: [HouseService]
})

export class HousingComponent implements OnInit {
  housing: House[];
  constructor(private router: Router, private houseService: HouseService){}

  ngOnInit(){
    this.housing = this.houseService.getHousing();
  }

  goToDetailPage(clickedHouse: House) {
     this.router.navigate(['housing', clickedHouse.id]);
  };

}
