import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignuComponent } from './signup.component';

const routes: Routes = [
    {
        path: '',
        component: SignuComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule {}
