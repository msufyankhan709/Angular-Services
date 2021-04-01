import { Component,Inject } from '@angular/core';
import {ColorsToken} from "./tokens/colors-token";

import {Logger} from "./Servicees/logger";
import {Colors} from "./models/colors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger]
})
export class AppComponent {
  title = 'Services';

  public colors:string[]=[];

  constructor(@Inject(ColorsToken) private colorsSvc:Colors){
    this.colorsSvc.addColor("red");
    this.colorsSvc.addColor("White");
    this.colorsSvc.addColor("Blue");
    this.colorsSvc.addColor("Pink");
    this.colors=this.colorsSvc.getAll();
  }
}
