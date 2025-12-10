import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../../shared/services/blog.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
    selector: 'app-topic',
    standalone: true,
    imports: [CommonModule, RouterModule, PostCardComponent],
    templateUrl: './topic.component.html',
    styleUrl: './topic.component.scss'
})
export class TopicComponent {
    private route = inject(ActivatedRoute);
    private blogService = inject(BlogService);

    readonly topic = toSignal(
        this.route.paramMap.pipe(
            map(params => params.get('topic') ?? '')
        )
    );

    readonly posts = computed(() => {
        const currentTopic = this.topic();
        if (!currentTopic) return [];
        
        return this.blogService.getAllPosts()().filter(post => 
            post.tags.some(tag => 
                tag.toLowerCase() === currentTopic.toLowerCase()
            )
        );
    });
} 