import { Component } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  value:string | undefined;
  items: Array<{}> = [];


  ngOnInit(){
    this.items = [
      {
        label: '',
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
            }
          }
          ,
          {
            label: 'Setting',
            icon: 'pi pi-cog',
            command: () => {
              
            }
          },
          {
            label: 'Logout',
            icon: 'pi pi-upload',
            command: () => {
              
            }
          }
        ]
      }
    ];
  }
}
