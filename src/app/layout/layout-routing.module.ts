import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarSolicitudComponent } from './consultar-solicitud/consultar-solicitud.component';

import { LayoutComponent } from './layout.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'screen1',
                loadChildren: () => import('./screen1/screen1.module').then(m => m.Screen1Module)
            },
            {
                path: 'screen2',
                component: Screen2Component
            },
            {
                path: 'solicitudes',
                component: SolicitudesComponent
            },
            {
                path: 'consultar-solicitud',
                component: ConsultarSolicitudComponent
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
