import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { DetailComponent } from './detail/detail.component';
import { registerComponent } from './register/register.component';
import { LayoutComponent } from './layout.component';
import { Screen2Component } from './screen2/screen2.component';
import { UpdateComponent } from './update/update.component';
//import { UpdateComponent } from './update/update.component';


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
                path: 'screen2',
                component: Screen2Component
            },
            {
                path: 'detail',
                component: DetailComponent
            },
            {
                path: 'comments',
                component: CommentsComponent
            },
            {
                path: 'register',
                component: registerComponent
            },
            {
                path: 'update',
                component: UpdateComponent
            }


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}

