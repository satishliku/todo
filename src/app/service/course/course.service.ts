import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icourse } from 'src/app/courseinterface/Icoures';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _http:HttpClient) { }

  private _url:string="assets/data/course.json";
  getCourse():Observable<Icourse[]>
  {
    return this._http.get<Icourse[]>(this._url)
  }
}
