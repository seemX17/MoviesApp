import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { IMoviesModel } from 'src/app/shared/models/movies';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie: any;

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    let id: number;
    this.route.params.subscribe((data) => {
      let param = data['id'];
      id = parseInt(param);
    });
    this.service.getData(id).subscribe((data) => {
      this.movie = data;
    })
  }

}
