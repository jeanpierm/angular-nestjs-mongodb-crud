import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, RouterModule, PrimeNGModule],
  exports: [TopbarComponent],
})
export class SharedModule {}
