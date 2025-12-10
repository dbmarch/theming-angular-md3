import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../../shared/services/blog.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { AuthorCardComponent } from '../../components/author-card/author-card.component';
import { TagListComponent } from '../../components/tag-list/tag-list.component';

@Component({
    selector: 'app-post-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, AuthorCardComponent, TagListComponent],
    templateUrl: './post-detail.component.html',
    styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
    private route = inject(ActivatedRoute);
    private blogService = inject(BlogService);

    readonly postId = toSignal(
        this.route.paramMap.pipe(
            map(params => Number(params.get('id')))
        )
    );

    readonly post = this.blogService.getPostById(this.postId() ?? 0);
} 