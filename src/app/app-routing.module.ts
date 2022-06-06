import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: TopicListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'detail/:productId',
    component: TopicDetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
