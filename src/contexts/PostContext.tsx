import React, { createContext, useContext, useState, ReactNode } from 'react';
import { posts as initialPosts, categories } from '../data/posts';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
}

interface PostContextType {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'date'>) => void;
  updatePost: (id: number, post: Partial<Post>) => void;
  deletePost: (id: number) => void;
  getPostById: (id: number) => Post | undefined;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
};

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (newPost: Omit<Post, 'id' | 'date'>) => {
    const post: Post = {
      ...newPost,
      id: Math.max(...posts.map(p => p.id)) + 1,
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
    };
    setPosts(prev => [...prev, post]);
  };

  const updatePost = (id: number, updatedPost: Partial<Post>) => {
    setPosts(prev => prev.map(post =>
      post.id === id ? { ...post, ...updatedPost } : post
    ));
  };

  const deletePost = (id: number) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const getPostById = (id: number) => {
    return posts.find(post => post.id === id);
  };

  const value: PostContextType = {
    posts,
    addPost,
    updatePost,
    deletePost,
    getPostById,
  };

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );
};
