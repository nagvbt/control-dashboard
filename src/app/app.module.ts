import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppMaterialModule } from "./app-material/app-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AppComponent } from "./app.component";
import "hammerjs";

import { HomeLayoutComponent } from "./layouts/home-layout.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/auth.guard";
import { AuthService } from "./auth/auth.service";

import { MatDatepickerModule, MatNativeDateModule } from "@angular/material";
// import { FlexLayoutModule } from '@angular/flex-layout';
import { EventStreamService } from "./core/event-stream/event-stream.service";

import "./rxjs-operators";
import { MasterModeComponent } from "./master-mode/master-mode.component";
import { StateComponent } from "./master-mode/state/state.component";
import { ParamCardComponent } from "./param-card/param-card.component";
import { ParamTableComponent } from "./param-table/param-table.component";

import { TodoComponent } from "./master-mode/todo/todo.component";

import { EmergencyStopComponent } from "./emergency-stop/emergency-stop.component";
import { VarTableComponent } from "./var-table/var-table.component";
import { GraphWidgetComponent } from "./graph-widget/graph-widget.component";
import { CtrlTableComponent } from "./ctrl-table/ctrl-table.component";
import { StatesComponent } from "./states/states.component";
import { AuthenticationService } from "./services/authentication/authentication.service";
import { HttpClientModule } from "@angular/common/http";
import { HTTP_OVERRIDE_PROVIDER } from "./core/http/app.interceptor";
import { ChartsModule } from "ng2-charts";
import { MatTabsModule } from "@angular/material/tabs";
import { InputCounterComponent } from "./lib/input-counter/input-counter.component";
import { CanDeactivateGuard } from "app/services/appserver/can-deactivated-guard.service";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    HeaderComponent,
    MasterModeComponent,
    StateComponent,
    ParamCardComponent,
    ParamTableComponent,
    TodoComponent,
    EmergencyStopComponent,
    VarTableComponent,
    GraphWidgetComponent,
    CtrlTableComponent,
    StatesComponent,
    InputCounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    EventStreamService,
    AuthenticationService,
    HTTP_OVERRIDE_PROVIDER,
    CanDeactivateGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
