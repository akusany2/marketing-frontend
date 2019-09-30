import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardModule } from "./Dashboard/Dashboard.module";
import { LoginModule } from "./Login/login.module";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => LoginModule
  },
  {
    path: "dashboard",
    loadChildren: () => DashboardModule
  },
  // -------------- temp
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }
  // ------------------
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
