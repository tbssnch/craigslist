import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { House } from '../house.model';
import { HouseService } from '../house.service.service';


@Component({
  selector: 'app-housing-detail',
  templateUrl: './housing-detail.component.html',
  styleUrls: ['./housing-detail.component.css'],
  providers: [HouseService]
})

export class HousingDetailComponent implements OnInit {
  houseId: number;
  houseToDisplay: House;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private houseService: HouseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.houseId = parseInt(urlParameters['id']);
    });
    this.houseToDisplay = this.houseService.getHouseById(this.houseId);
  }
}
