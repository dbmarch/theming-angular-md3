import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { AuthorDetailComponent } from './pages/author-detail/author-detail.component';
import { TopicComponent } from './pages/topic/topic.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'author/:id', component: AuthorDetailComponent },
    { path: 'topic/:topic', component: TopicComponent },
    { path: '**', redirectTo: '/home' }
];
