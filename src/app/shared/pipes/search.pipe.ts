import { Pipe, PipeTransform } from '@angular/core';
import { IMoviesModel } from '../models/movies';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IMoviesModel[], filteredData: string): any {
    if (!filteredData)
      return value;
    return value.filter((item: IMoviesModel) => {
      return item.name.toLowerCase().indexOf(filteredData.toLowerCase()) > -1;
    })
  }

}
