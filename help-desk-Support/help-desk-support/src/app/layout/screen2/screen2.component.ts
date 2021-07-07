import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {
  now: Date;

  constructor() { }

  ngOnInit() {

  }
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filtro.trim().toLowerCase();
  }






}

