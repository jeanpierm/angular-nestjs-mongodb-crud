import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { MessageService } from 'primeng/api';
import { Col } from 'src/app/shared/interfaces/col.interface';
import { UserType } from '../../interfaces/user-type.interface';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent implements OnInit {
  readonly BASE_COLS = [
    { field: '_id', header: 'ID' },
    { field: 'type', header: 'Type' },
    { field: 'email', header: 'Email' },
  ];
  readonly INTERNAL_COLS = [
    { field: 'name', header: 'Name' },
    { field: 'direction', header: 'Direction' },
    { field: 'gender', header: 'Gender' },
  ];
  readonly EXTERNAL_COLS = [
    { field: 'bilingual', header: 'Bilingual' },
    { field: 'nationality', header: 'Nationality' },
    { field: 'phone', header: 'Phone' },
  ];
  readonly INTERNAL_CODE = 'internal';
  readonly EXTERNAL_CODE = 'external';

  cols: Col[] = [];
  selectedUsers: User[] = [];
  userTypes: UserType[] = [];
  selectedTypes: string[] = [];

  get loading(): boolean {
    return this.usersService.loadingTable;
  }

  get users(): User[] {
    return this.usersService.users;
  }

  get isNoneOrAllUserTypesSelected(): boolean {
    return (
      this.selectedTypes.length === this.userTypes.length ||
      !this.selectedTypes.length
    );
  }

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadCols();
    this.loadUsers();
    this.userTypes = [
      { name: 'Internal Users', code: this.INTERNAL_CODE },
      { name: 'External Users', code: this.EXTERNAL_CODE },
    ];
  }

  handleSelectOnChange() {
    this.loadCols();
    this.loadUsers();
  }

  /**
   * Load colums of table dynamically.
   * If none or all user types are selected, load all columns.
   * If only one user type is selected, load columns of that type.
   */
  loadCols(): void {
    if (this.isNoneOrAllUserTypesSelected) {
      this.loadAllUserCols();
      return;
    }
    const sepecificType = this.selectedTypes[0];
    if (sepecificType === this.INTERNAL_CODE) {
      this.loadInternalUserCols();
    }
    if (sepecificType === this.EXTERNAL_CODE) {
      this.loadExternalUserCols();
    }
  }

  /**
   * Load users from service.
   * If none or all user types are selected, load all users.
   * If only one user type is selected, load users of that type.
   */
  loadUsers(): void {
    if (this.isNoneOrAllUserTypesSelected) {
      this.usersService.loadUsers();
    } else {
      this.usersService.loadUsers(this.selectedTypes[0]);
    }
  }

  private loadAllUserCols(): void {
    this.cols = [
      ...this.BASE_COLS,
      ...this.EXTERNAL_COLS,
      ...this.INTERNAL_COLS,
    ];
  }

  private loadExternalUserCols(): void {
    this.cols = [...this.BASE_COLS, ...this.EXTERNAL_COLS];
  }

  private loadInternalUserCols(): void {
    this.cols = [...this.BASE_COLS, ...this.INTERNAL_COLS];
  }
}
