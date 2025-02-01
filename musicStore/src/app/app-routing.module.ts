import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMusicComponent } from './components/view-music/view-music.component';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { EditMusicComponent } from './components/edit-music/edit-music.component';
import { SingleViewComponent } from './components/single-view/single-view.component';

const routes: Routes = [

  {path:'',component:ViewMusicComponent,pathMatch:'full'},
  {path:'add-music',component:AddMusicComponent},
  {path:'edit-music/:id',component:EditMusicComponent},
  {path:'view-music/:id',component:SingleViewComponent},
  {path:"**",redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
