import cybersecurityImage from '../assets/blog/wlu.png';
import aiImage from '../assets/blog/wgu.png';
import codingImage from '../assets/blog/wlu.png';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  path: string;
  published: boolean;
  locked?: {
    until: string;
  };
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
    id: 'bachelors-degree-any-speedrun',
    title: "1-term NA Bachelors Degree Any% Speedrun",
    excerpt: "My quest to finish the world's fastest possible bachelors degree, taking all my classes in a single term, all while being a full-time student & working.",
    image: aiImage,
    date: "2025-03-10",
    path: "/blog",
    published: true,
    locked: {
      until: "2025-03-10"
    }
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