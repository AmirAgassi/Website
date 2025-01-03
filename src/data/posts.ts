import cybersecurityImage from '../assets/blog/wlu.png';
import aiImage from '../assets/blog/wlu.png';
import codingImage from '../assets/blog/wlu.png';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  path: string;
  published: boolean;
}

export const posts: BlogPost[] = [
  {
    id: 'first-post',
    title: 'WLU Information Disclosure',
    excerpt: 'How I exposed sensitive financial and student information to my university, by being the only student that actually used Bing. Unironically.',
    date: '2024-01-03',
    image: cybersecurityImage,
    path: '/blog/first-post',
    published: true
  },
  {
    id: 'upcoming-post',
    title: "I'm gonna start",
    excerpt: "writing them",
    image: aiImage,
    date: "2023-06-15",
    path: "/blog",
    published: false
  },
  {
    id: 'draft-post',
    title: "but they're really long and hard to write",
    excerpt: "& i dont have a lot of time",
    image: codingImage,
    date: "2023-05-30",
    path: "/blog",
    published: false
  }
]; 