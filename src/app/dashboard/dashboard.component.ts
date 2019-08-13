import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { IMoviesModel } from '../shared/models/movies';
import { sortData } from '../shared/utilities/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Movies: IMoviesModel[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getData().subscribe((data) => {
      this.Movies = sortData.sortDate(Object.values(data));
    })
  }

}
