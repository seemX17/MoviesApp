import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { debug } from 'util';
import { DataService } from 'src/app/shared/services/data.service';
import { IMoviesModel } from 'src/app/shared/models/movies';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  moviesForm;
  constructor(private formBuilder: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.createForm();

  }
  createForm() {
    const Urlreg = '/*^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
    this.moviesForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(Urlreg)
      ]),
    });
  }
  onSubmit(data: IMoviesModel) {
    this.addData(data);
    this.moviesForm.reset();
  }
  
  addData(data:IMoviesModel){
    let payload: IMoviesModel = {
      image: data.image,
      name: data.name,
      release: new Date()
    }
    this.service.postData(payload).subscribe((data) => {
      console.log(data['id'])
    });
  }
}
