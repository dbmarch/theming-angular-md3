import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-tag-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './tag-list.component.html',
    styleUrl: './tag-list.component.scss'
})
export class TagListComponent {
    readonly tags = input.required<string[]>();
} 