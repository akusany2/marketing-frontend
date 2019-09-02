import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginModule } from "./loginModule/login.module";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => LoginModule
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
