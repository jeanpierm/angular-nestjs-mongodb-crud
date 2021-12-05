import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  static readonly usersEndpoint: string = `${environment.baseUrl}/users`;
  readonly TYPE_PARAM = 'type';

  users: User[] = [];
  loadingTable: boolean = true;

  constructor(private http: HttpClient) {}

  loadUsers(userType?: string): void {
    !this.loadingTable && (this.loadingTable = true);
    this.getUsers(userType).subscribe((users) => {
      this.users = users;
      this.loadingTable = false;
    });
  }

  getUsers(userType?: string) {
    const url = UsersService.usersEndpoint;
    let options = {};
    if (userType) {
      const params = new HttpParams().set(this.TYPE_PARAM, userType);
      options = { params };
    }
    return this.http.get<User[]>(url, options);
  }
}
