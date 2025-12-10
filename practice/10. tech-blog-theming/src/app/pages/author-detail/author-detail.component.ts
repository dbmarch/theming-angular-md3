import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../../shared/services/blog.service';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { AuthorCardComponent } from '../../components/author-card/author-card.component';

@Component({
    selector: 'app-author-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, PostCardComponent, AuthorCardComponent],
    templateUrl: './author-detail.component.html',
    styleUrl: './author-detail.component.scss'
})
export class AuthorDetailComponent {
    private route = inject(ActivatedRoute);
    private blogService = inject(BlogService);

    readonly authorId = toSignal(
        this.route.paramMap.pipe(
            map(params => Number(params.get('id')))
        )
    );

    readonly author = this.blogService.getAuthorById(this.authorId() ?? 0);
    readonly authorPosts = this.blogService.getPostsByAuthor(this.authorId() ?? 0);
} 