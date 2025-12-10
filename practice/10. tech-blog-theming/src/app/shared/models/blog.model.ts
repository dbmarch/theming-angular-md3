export interface Author {
    id: number;
    name: string;
    avatar: string;
    bio: string;
}

export interface BlogPost {
    id: number;
    title: string;
    content: string;
    summary: string;
    imageUrl: string;
    publishDate: Date;
    author: Author;
    tags: string[];
    likes: number;
    readTime: number;
    comments: number;
    isFavorite: boolean;
} 