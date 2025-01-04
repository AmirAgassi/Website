import cybersecurityImage from '../assets/blog/wlu.png';
import wguImage from '../assets/blog/wgu.png';
import ethglobalImage from '../assets/blog/ethglobal.png';
import danghuiImage from '../assets/blog/danghui.jpg';
import pancakeImage from '../assets/blog/pancake.png';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageFit?: 'contain' | 'cover';
  path: string;
  published: boolean;
  locked?: {
    until: string;
  };
  type?: 'writeup';
  pdf?: string;
  tag?: {
    text: string;
    color: string;
  };
}

export const posts: BlogPost[] = [
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
    },
    tag: {
      text: "INSANE",
      color: "#ff3d47"
    }
  },
  {
    id: 'pancake-flipping',
    title: "$31,368 in 3 weeks: Shutting down unethical crypto schemes",
    excerpt: "Crypto pump-and-dump schemes aim to manipulate crypto investors with a fake 'buying frenzy'. But do they care enough to vet who they trust with their own signals? (Spoiler: Nope!)",
    image: pancakeImage,
    date: "2025-03-10",
    path: "/blog",
    published: true,
    tag: {
      text: "INSANE",
      color: "#ff3d47"
    }
  },
  {
    id: 'ethglobal-bug-bounty',
    title: "Making $1500: By Giving Up On My First Hackathon",
    excerpt: "The rare case when giving up on my project won more prize money than submitting it. Featuring EthGlobal's (very) vulnerable infrastructure.",
    image: ethglobalImage,
    date: "2024-05-30",
    path: "/blog",
    published: true
  },
  {
    id: 'first-post',
    title: 'WLU Information Disclosure: Found w/ Bing',
    excerpt: 'How I found exposed financial and student information to my university, just by being the only student that actually used Bing. Unironically.',
    date: '2024-01-03',
    image: cybersecurityImage,
    path: '/blog/first-post',
    published: true,
    pdf: '/writeups/wlu-disclosure.pdf'
  },
  {
    id: 'danghui-writeup',
    title: 'Danghui cLVM: ACE on 37,100,000 daily active players.',
    excerpt: 'A technical deep-dive into Danghui, a Roblox exploit that introduced a novel approach to script execution using an external Lua virtual machine, fully replicating executed code on most games.',
    date: '2024-05-30',
    image: danghuiImage,
    imageFit: 'contain',
    path: '/blog',
    published: true,
    type: 'writeup',
    pdf: '/writeups/danghui_clvm.pdf'
  }
]; 