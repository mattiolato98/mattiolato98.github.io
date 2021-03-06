import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BiographyComponent } from './biography/biography.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'biography', component: BiographyComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '',   redirectTo: '/biography', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
