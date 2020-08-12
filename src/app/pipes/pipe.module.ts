import { NgModule } from '@angular/core';
import { PIPES } from './index';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PIPES],
    imports: [CommonModule],
    exports: [PIPES]
})

export class PipeModule { }
