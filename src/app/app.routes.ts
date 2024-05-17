import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { LayoutComponent } from './pages/layout.component';
import { DashboardComponent } from './pages/dashboard.component';
import { ViewProfileComponent } from './pages/view-profile.component';
import { NgModule } from '@angular/core';
import { EditProfileComponent } from './pages/edit-profile.component';

export const routes: Routes = [
    {
    path: '',redirectTo:'login' ,pathMatch:'full'//default to login    
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'dashboard',
    component:DashboardComponent
},
{
    path: 'view-profile',
     component:ViewProfileComponent
},
{
    path: 'edit-profile',
     component:EditProfileComponent
},
// {//after login this is children component  and will be registered
//   path:'',
//     component:LayoutComponent,
//     children:[
        
       
//     ]
// }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
