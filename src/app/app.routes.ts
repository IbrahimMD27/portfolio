
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home} from './pages/home/home';
import { Skills } from './pages/skills/skills';
import { Resume } from './resume/resume';

export const routes: Routes = [
  { path: '', component: Home, title: 'Portfolio | Home' },
  { path: 'resume', component: Resume},
  { path: 'skills', component: Skills, title: 'Tiffany Du | Skills' },
  
  // Redirect any other path to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Enable smooth scrolling for anchor links like #about
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }