import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
// tslint:disable-next-line:class-name
export class registerComponent implements OnInit {
  now: Date;

  constructor() { }

  ngOnInit() {

  }
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filtro.trim().toLowerCase();
  }






}

