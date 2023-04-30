import { Component } from '@angular/core';
import { DrawerService } from './services/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MBA';

  constructor(private _drawerService: DrawerService) { }

  onDrawerToggle(){
    this._drawerService.Toggle();
  }
}
