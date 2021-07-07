import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SignupRoutingModule } from './signup-routing.module';
import { SignuComponent } from './signup.component';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        SignupRoutingModule,
        MaterialModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [SignuComponent]
})
export class SignupModule { }
