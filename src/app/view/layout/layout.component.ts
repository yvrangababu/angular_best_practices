import { Component, HostListener, OnInit } from '@angular/core';
import { iMenuContent } from 'src/app/interfaces/menu.interface';
import { ApplicationMenu } from 'src/app/menu/application.menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public menu: iMenuContent[] = ApplicationMenu;

  constructor() { }

  /*Listing on windows resize */
  @HostListener('window:resize')
  
  public onResize(): void {
    const navbarHeight = 90;
    const closedButtonHeight = 40;
    const availableHeight = window.innerHeight - (navbarHeight+closedButtonHeight);
    document.getElementById('main-menu')!.style.height = availableHeight + 'px';

  }



  ngOnInit(): void {
  this.onResize();
  }


}
