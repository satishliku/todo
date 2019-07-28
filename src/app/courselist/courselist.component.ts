import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course/course.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  constructor(private _courseService:CourseService) { }

  public course:any[]
  ngOnInit() {
    this._courseService.getCourse()
    .subscribe(data=>this.course=data);
  }

}
