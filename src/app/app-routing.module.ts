import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./login/login.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import { HomeComponent } from "./home/home.component";
import { HomeLayoutComponent } from "./layouts/home-layout.component";
import { RouteName } from "./services/constants";
import { CanDeactivateGuard } from "app/services/appserver/can-deactivated-guard.service";

const routes: Routes = [
  // {
  //   path: RouteName.CONFIG,
  //   component: ConfigurationComponent,
  //   //b canActivate: [AuthGuard],
  //   children: [
  //     { path: RouteName.CONFIG, component: ConfigurationComponent },
  //     {
  //       path: "",
  //       component: OtherComponent,
  //       canDeactivate: [CanDeactivateGuard],
  //     },
  //   ],
  // },
  {
    path: "",
    component: HomeLayoutComponent,
    //b Un comment below line for the implementing login
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ],
  },
  {
    path: "",
    component: LoginLayoutComponent,
    children: [
      {
        path: RouteName.LOGIN,
        component: LoginComponent,
      },
    ],
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
