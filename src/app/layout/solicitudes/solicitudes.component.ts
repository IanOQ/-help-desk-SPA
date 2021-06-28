import { Component, OnInit } from '@angular/core';
// import { RestService } from '../rest.service';
// import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  students: any = [];
  constructor() {} // public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.getStudents();
  }
  /*
  getStudents() {
    this.students = [];
    this.rest.getStudents().subscribe((data: {}) => {
      console.log(data);
      this.students = data;
    });
  }

  add() {
    this.router.navigate(['/student-add']);
  }

  delete(id) {
    this.rest.deleteStudent(id)
      .subscribe(res => { // haga algo por mi, eliminelo pero traiga los estudiantes
          this.getStudents();
        }, (err) => {
          console.log(err);
        }
      );
  }*/

}
