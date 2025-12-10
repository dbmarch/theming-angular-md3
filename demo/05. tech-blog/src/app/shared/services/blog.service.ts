import { Injectable, signal, computed } from '@angular/core';
import { BlogPost, Author } from '../models/blog.model';
import { BLOG_POSTS, AUTHORS } from '../../data/mock-data';
import { map, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private readonly _posts = signal<BlogPost[]>(BLOG_POSTS);
    private readonly _authors = signal<Author[]>(AUTHORS);

    getAllPosts() {
        return this._posts.asReadonly();
    }

    getPostById(id: number) {
        return computed(() => this._posts().find(post => post.id === id));
    }

    getAuthorById(id: number) {
        return computed(() => this._authors().find(author => author.id === id));
    }

    getPostsByAuthor(authorId: number) {
        return computed(() => this._posts().filter(post => post.author.id === authorId));
    }

    addPost(post: BlogPost) {
        this._posts.update(posts => [...posts, post]);
    }

    updatePost(updatedPost: BlogPost) {
        this._posts.update(posts => 
            posts.map(post => post.id === updatedPost.id ? updatedPost : post)
        );
    }

    deletePost(id: number) {
        this._posts.update(posts => posts.filter(post => post.id !== id));
    }

    getPosts() {
        return of(this._posts()).pipe(
            map(posts => posts)
        );
    }
} 