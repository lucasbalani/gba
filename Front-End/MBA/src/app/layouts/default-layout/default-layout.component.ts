import { Component } from '@angular/core';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {

  isOpened = false;

  constructor(private _drawerService: DrawerService) { }

  ngOnInit(){
    this._drawerService.drawerToggle.subscribe({
      next: () => {
        this.isOpened = !this.isOpened
      }
    })
  }
}
