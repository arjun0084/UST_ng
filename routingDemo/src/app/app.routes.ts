import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';



export const routes: Routes = [
    {path:'first-component',component:FirstComponent,
    children:[
        {path:'',redirectTo:'child-a',pathMatch:'full'},
        {
            path:'child-a',
            component:ChildAComponent,
        },
        {
            path:'child-b',
            component:ChildBComponent,
        },
    ],
},
    {path:'second-component',component:SecondComponent},
    {path:'third-component',component:PagenotfoundComponent},
    {path:'',redirectTo:'/first-component',pathMatch:'full'},
    {path:'**',redirectTo:'/third-component',pathMatch:'full'}
];
