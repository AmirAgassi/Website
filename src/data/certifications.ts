import { School, Work, Code } from '@mui/icons-material';

export interface Certification {
  name: string;
  date: string;
  link?: string;
  icon: React.ElementType;
  color: string;
  completed: boolean;
  image: string;
  tags: string[];
  note?: string;
  code?: string;
  pdf?: string;
}

export const certifications: Certification[] = [
  { 
    name: "AWS Solutions Architect - Professional", 
    date: "September 2023", 
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/2LC36B3CWM411J3K", 
    icon: Code, 
    color: "#FF9900", 
    completed: true,
    image: "https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
    tags: ["Cloud", "Infrastructure"],
    pdf: `${process.env.PUBLIC_URL}/certifications/aws-solutions-architect-professional.pdf`
  },
  { 
    name: "CompTIA A+ IT",
    date: "September 2023", 
    link: "https://www.certmetrics.com/comptia/public/verification.aspx/", 
    icon: Code, 
    color: "#C8102E", 
    completed: true,
    image: "https://images.credly.com/size/340x340/images/63482325-a0d6-4f64-ae75-f5f33922c7d0/CompTIA_A_2Bce.png",
    tags: ["IT Fundamentals", "Hardware"],
    code: "EH8R2HNYF1R1Q898",
    pdf: `${process.env.PUBLIC_URL}/certifications/comptia-aplus.pdf`
  },
  { 
    name: "CompTIA Network+", 
    date: "November 2024", 
    link: "https://www.certmetrics.com/comptia/public/verification.aspx/",
    icon: Code, 
    color: "#C8102E", 
    completed: true,
    image: "https://images.credly.com/size/340x340/images/e1fc05b2-959b-45a4-8d20-124b1df121fe/CompTIA_Network_2Bce.png",
    tags: ["Network", "Infrastructure"],
    code: "1ZVT27SSSEV41Z90",
    pdf: `${process.env.PUBLIC_URL}/certifications/comptia-networkplus.pdf`
  },
  { 
    name: "CompTIA Security+", 
    date: "December 2024", 
    icon: Code, 
    color: "#C8102E", 
    completed: true,
    image: "https://images.credly.com/size/340x340/images/74790a75-8451-400a-8536-92d792c5184a/CompTIA_Security_2Bce.png",
    tags: ["Cybersecurity", "Netsec"],
    code: "BCY32CS5RE4QQPSN",
    link: "https://www.certmetrics.com/comptia/public/verification.aspx/",
    pdf: `${process.env.PUBLIC_URL}/certifications/comptia-securityplus.pdf`
  },
  { 
    name: "CompTIA Secure Infrastructure Specialist", 
    date: "Expected Completion: September 2025", 
    icon: Code, 
    color: "#C8102E", 
    completed: true,
    image: "https://images.credly.com/images/8090280a-311f-425f-a1cd-a32770b5a444/CompTIA_CSIS.png",
    tags: ["Infrastructure Security"],
    pdf: `${process.env.PUBLIC_URL}/certifications/comptia-secure-infra-specialist.pdf`
  },
  { 
    name: "CompTIA IT Operations Specialist", 
    date: "Expected Completion: August 2025", 
    icon: Work, 
    color: "#C8102E", 
    completed: true,
    image: "https://images.credly.com/images/7f7657b9-4d1b-4b8d-b5ee-5fdf6d7ccd71/twitter_thumb_201604_04294_CompTIA_Cert_Badges_Specialist_-_CIOS.png",
    tags: ["IT Ops","Sys. Administration"],
    pdf: `${process.env.PUBLIC_URL}/certifications/comptia-it-ops-specialist.pdf`
  },
  { 
    name: "ITIL® Foundation Certification", 
    date: "Expected Completion: October 2024", 
    icon: School, 
    color: "#4A90E2", 
    completed: false,
    image: "https://images.credly.com/size/340x340/images/6f2a9ef8-4da2-4e67-bd52-84fbaa1af776/image.png",
    tags: ["ITSM","Service Lifecycle"],
    note: "Subject to vendor availability. ITIL® is a registered trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved."
  },
  { 
    name: "CompTIA Project+", 
    date: "Expected Completion: January 2025", 
    icon: Work, 
    color: "#C8102E", 
    completed: false,
    image: "https://images.credly.com/size/340x340/images/07f70c56-f067-458e-bbe5-736199c1c2f3/CompTIA_Project_2Bce.png",
    tags: ["IT Project Management"]
  },
  { 
    name: "CompTIA CySA+", 
    date: "Expected Completion: February 2025", 
    icon: Code, 
    color: "#C8102E", 
    completed: false,
    image: "https://images.credly.com/size/340x340/images/b870667f-00a3-48d7-b988-9c02b441b883/image.png",
    tags: ["Security", "Sec Analytics"]
  },
  { 
    name: "CompTIA PenTest+", 
    date: "Expected Completion: March 2025", 
    icon: Code, 
    color: "#C8102E", 
    completed: false,
    image: "https://images.credly.com/size/340x340/images/0ba22331-acf9-4e8a-8ce3-b4cc3d376040/image.png",
    tags: ["Pentesting", "Cybersec"]
  },
  { 
    name: "CompTIA Linux+", 
    date: "Expected Completion: April 2025", 
    icon: Code, 
    color: "#C8102E", 
    completed: false,
    image: "https://images.credly.com/size/340x340/images/555e9794-a083-4a23-8a71-148652e4306c/CompTIA_Linux_2Bce.png",
    tags: ["Linux", "Sys. Administration"]
  },
  { 
    name: "Network Vulnerability Assessment Professional", 
    date: "Expected Completion: May 2025", 
    icon: Code, 
    color: "#9C27B0", 
    completed: false,
    image: "placeholder-image-url",
    tags: ["Vulnerability Assessment"]
  },
  { 
    name: "Network Security Professional", 
    date: "Expected Completion: June 2025", 
    icon: Code, 
    color: "#3F51B5", 
    completed: false,
    image: "placeholder-image-url",
    tags: ["Network Security"]
  },
  { 
    name: "Security Analytics Professional", 
    date: "Expected Completion: July 2025", 
    icon: Code, 
    color: "#009688", 
    completed: false,
    image: "placeholder-image-url",
    tags: ["Threat Intelligence"]
  },
  { 
    name: "Linux Essentials", 
    date: "Expected Completion: October 2025", 
    icon: Code, 
    color: "#FFC107", 
    completed: false,
    image: "placeholder-image-url",
    tags: ["Linux", "System Basics"]
  },
  { 
    name: "Certified Cloud Security Professional (CCSP)", 
    date: "Expected Completion: November 2025", 
    icon: Code, 
    color: "#00BCD4", 
    completed: false,
    image: "placeholder-image-url",
    tags: ["Cloud Security"],
    note: "Optional Voucher"
  },
  { 
    name: "Systems Security Certified Practitioner (SSCP)", 
    date: "Expected Completion: December 2025", 
    icon: Code, 
    color: "#CDDC39", 
    completed: false,
    image: "placeholder-image-url",
    tags: ["Systems Security"],
    note: "Associate of (ISC)² designation"
  }
];