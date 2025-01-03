import cybersecurityImage from '../assets/blog/wlu.png';
import wguImage from '../assets/blog/wgu.png';
import ethglobalImage from '../assets/blog/ethglobal.png';
import danghuiImage from '../assets/blog/ethglobal.png';

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
  type?: 'writeup';
  pdf?: string;
}

export const posts: BlogPost[] = [
  {
    id: 'first-post',
    title: 'WLU Information Disclosure Exposed: By Using Bing',
    excerpt: 'How I exposed sensitive financial and student information to my university, by being the only student that actually used Bing. Unironically.',
    date: '2024-01-03',
    image: cybersecurityImage,
    path: '/blog/first-post',
    published: true,
    pdf: '/writeups/wlu-disclosure.pdf'
  },
  {
    id: 'bachelors-degree-any-speedrun',
    title: "1-term NA Bachelors Degree Any% Speedrun",
    excerpt: "My quest to finish the world's fastest possible bachelors degree, taking all my classes in a single term, all while being a full-time student & working.",
    image: wguImage,
    date: "2025-03-10",
    path: "/blog",
    published: true,
    locked: {
      until: "2025-03-10"
    }
  },
  {
    id: 'ethglobal-bug-bounty',
    title: "Making $1500 By Giving Up On My First Hackathon",
    excerpt: "The rare case when giving up on my project won more prize money than submitting it.",
    image: ethglobalImage,
    date: "2024-05-30",
    path: "/blog",
    published: true
  },
  {
    id: 'danghui-writeup',
    title: 'Danghui Writeup',
    excerpt: 'A writeup for a CTF challenge I did with my team.',
    date: '2024-05-30',
    image: danghuiImage,
    path: '/blog',
    published: true,
    type: 'writeup',
    pdf: '/writeups/danghui-writeup.pdf'
  }
]; 