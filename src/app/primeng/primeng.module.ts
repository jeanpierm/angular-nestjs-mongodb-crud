import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  exports: [
    RippleModule,
    ButtonModule,
    TableModule,
    SelectButtonModule,
    InputTextModule,
    TooltipModule,
  ],
})
export class PrimeNGModule {}
