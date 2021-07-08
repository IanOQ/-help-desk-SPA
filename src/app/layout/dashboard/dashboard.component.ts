import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];

    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

    }

    constructor() {
        this.places = [
            {
                imgSrc: 'assets/images/Internet.png',
                place: 'Internet',
                description:
                    // tslint:disable-next-line:max-line-length
                    'El internet de alta velocidad te comunicará a todo el mundo a la velocidad más rápida'
            },
            {
                imgSrc: 'assets/images/tel.png',
                place: 'Telefonía',
                description:
                    // tslint:disable-next-line:max-line-length
                    'Con nuestros planes de datos te podras comunicar a todo el país'
            },
            {
                imgSrc: 'assets/images/tele.png',
                place: 'Televisión',
                description:
                    // tslint:disable-next-line:max-line-length
                    ' Con nuestros planes de televisión tendras acceso a miles de canales'

            }
        ];
    }

    ngOnInit() {}
}
