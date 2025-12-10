import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TagListComponent } from '../tag-list/tag-list.component';
import { DatePipe } from '@angular/common';
import { BlogPost } from '../../shared/models/blog.model';
import { FavButtonComponent } from '../fav-button/fav-button.component';

@Component({
    selector: 'app-post-card',
    standalone: true,
    imports: [RouterLink, TagListComponent, DatePipe, FavButtonComponent],
    templateUrl: './post-card.component.html',
    styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
    post = input.required<BlogPost>();
} 