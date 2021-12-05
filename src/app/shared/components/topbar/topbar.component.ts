import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  displayName = 'Jeanpier - Prueba Gizlo';
  gizloLogoUrl = 'https://gizlocorp.com/wp-content/uploads/2021/06/gizlobn.png';
  constructor() {}
}
