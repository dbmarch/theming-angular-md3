import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Author } from '../../shared/models/blog.model';

@Component({
    selector: 'app-author-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './author-card.component.html',
    styleUrl: './author-card.component.scss'
})
export class AuthorCardComponent {
    readonly author = input.required<Author>();
    readonly clickable = input(true);
} 