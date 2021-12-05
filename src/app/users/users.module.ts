import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { PrimeNGModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, UsersTableComponent],
  imports: [CommonModule, UsersRoutingModule, PrimeNGModule, FormsModule],
  exports: [UsersComponent],
})
export class UsersModule {}
