import { IMoviesModel } from '../models/movies';

export class sortData {
  //sort using year
  static sortDate(data): any[] {
    let sortedArr = data.sort(function (a, b) {
      var c = new Date(a.release).getFullYear();
      var d = new Date(b.release).getFullYear();
      return c - d;
    });
    return sortedArr;
  }
}
