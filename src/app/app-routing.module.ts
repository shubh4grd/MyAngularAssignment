import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { ApplicationsComponent } from './dashboard/applications/applications.component';
import { ChangemakersComponent } from './dashboard/changemakers/changemakers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpportunitiesComponent } from './dashboard/opportunities/opportunities.component';
import { OrgSettingsComponent } from './dashboard/org-settings/org-settings.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'dashboard/opportunities', component: OpportunitiesComponent},
  {path:'dashboard/applications', component: ApplicationsComponent},
  {path:'dashboard/analytics', component: AnalyticsComponent},
  {path:'dashboard/changemakers', component: ChangemakersComponent},
  {path:'dashboard/org-settings', component: OrgSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
