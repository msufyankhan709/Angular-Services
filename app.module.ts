import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Logger,simpleLogger } from './Servicees/logger';
import {ColorsToken} from "./tokens/colors-token";
import { ColorsMutable } from './Servicees/colors-mutable';
import {ColorsImmutable} from "./Servicees/colors-immutable";

// const useImmutable=false;

//   const colorsFactory=(logger:Logger)=>{
//   if(useImmutable){
//     return new ColorsImmutable(logger);
//   }else
//   {
//     return new ColorsMutable(logger);
//   }
//   }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {provide:Logger,useValue:simpleLogger},
    {provide:ColorsToken,useClass:ColorsMutable} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
