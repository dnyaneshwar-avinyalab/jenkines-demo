import { Component } from '@angular/core';
;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  visibleSidebar:any
  show : boolean=false

  constructor(){ }
  ngOnInit() {}
  
  toggle(){
    this.show=!this.show

  }

}

  

