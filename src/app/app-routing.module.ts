import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  
    {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    {path: '**', component: NopagesfoundComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
