import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../shared/services/blog.service';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, PostCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    private blogService = inject(BlogService);
    readonly blogPosts = this.blogService.getAllPosts();
}
