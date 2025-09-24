// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Special cases for courses with custom preview images
  if (productId === 1) {
    return "/images/preview_course_1.png";
  }
  if (productId === 2) {
    return "/images/preview_course_2.png";
  }
  if (productId === 3) {
    return "/images/preview_course_3.png";
  }
  if (productId === 4) {
    return "/images/preview_course_4.png";
  }
  if (productId === 5) {
    return "/images/preview_course_5.png";
  }
  if (productId === 6) {
    return "/images/preview_course_6.png";
  }
  if (productId === 7) {
    return "/images/preview_course_7.png";
  }
  if (productId === 8) {
    return "/images/preview_course_8.png";
  }
  if (productId === 9) {
    return "/images/preview_course_9.png";
  }
  if (productId === 10) {
    return "/images/preview_course_10.png";
  }
  if (productId === 11) {
    return "/images/preview_course_11.png";
  }
  
  // For other courses, return placeholder
  return `https://via.placeholder.com/400x300/667eea/ffffff?text=AI+Course+${productId}`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  if (productId === 1) {
    return ["/images/preview_course_1.png"];
  }
  if (productId === 2) {
    return ["/images/preview_course_2.png"];
  }
  if (productId === 3) {
    return ["/images/preview_course_3.png"];
  }
  if (productId === 4) {
    return ["/images/preview_course_4.png"];
  }
  if (productId === 5) {
    return ["/images/preview_course_5.png"];
  }
  if (productId === 6) {
    return ["/images/preview_course_6.png"];
  }
  if (productId === 7) {
    return ["/images/preview_course_7.png"];
  }
  if (productId === 8) {
    return ["/images/preview_course_8.png"];
  }
  if (productId === 9) {
    return ["/images/preview_course_9.png"];
  }
  if (productId === 10) {
    return ["/images/preview_course_10.png"];
  }
  if (productId === 11) {
    return ["/images/preview_course_11.png"];
  }
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/video_preview_1.mp4";
  }
  if (productId === 2) {
    return "/videos/video_preview_2.mp4";
  }
  if (productId === 3) {
    return "/videos/video_preview_3.mp4";
  }
  if (productId === 4) {
    return "/videos/video_preview_4.mp4";
  }
  if (productId === 5) {
    return "/videos/video_preview_5.mp4";
  }
  if (productId === 6) {
    return "/videos/video_preview_6.mp4";
  }
  if (productId === 7) {
    return "/videos/video_preview_7.mp4";
  }
  if (productId === 8) {
    return "/videos/video_preview_8.mp4";
  }
  if (productId === 9) {
    return "/videos/video_preview_9.mp4";
  }
  if (productId === 10) {
    return "/videos/video_preview_10.mp4";
  }
  if (productId === 11) {
    return "/videos/video_preview_11.mp4";
  }
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Essential ChatGPT Basics",
    price: 6.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Quick start guide to AI conversations. Learn fundamental prompt techniques in under 4 hours.",
    detailedDescription: "Get started with AI technology through this focused introductory course. Master basic conversation patterns, simple prompt creation, and everyday AI applications. Designed for absolute beginners who want to understand AI fundamentals without overwhelming complexity.",
    category: "AI Basics",
    features: [
      "4 hours of streamlined content",
      "25 essential prompt examples",
      "Basic conversation techniques",
      "Simple practical exercises",
      "Quick reference guide"
    ],
    specifications: {
      "Duration": "4 hours",
      "Level": "Complete Beginner",
      "Language": "English",
      "Resources": "25 basic prompts",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "AI Personas & Roles – Designing Smarter Chatbots",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Learn how to build custom AI personas and role-based chatbots that respond with more natural, human-like interactions.",
    detailedDescription: "Master the art of creating AI personalities that feel authentic and engaging. This comprehensive course teaches you to design custom chatbot personas, define specific roles, and create conversational flows that provide more natural, contextually appropriate responses for various use cases.",
    category: "AI Chatbots",
    features: [
      "5 hours of practical training",
      "25 persona templates",
      "Role-based conversation design",
      "Natural interaction techniques",
      "Context-aware responses"
    ],
    specifications: {
      "Duration": "5 hours",
      "Level": "Intermediate",
      "Resources": "25 persona templates",
      "Frameworks": "Role-based design system",
      "Access": "12 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "AI-Powered Document Summaries with ChatGPT",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Master techniques for turning lengthy documents into clear, concise summaries using AI.",
    detailedDescription: "Transform how you process information by learning advanced document summarization techniques. This course covers effective prompting strategies, information extraction methods, and formatting approaches to create professional summaries from any type of document quickly and accurately.",
    category: "Document Processing",
    features: [
      "4 hours of focused training",
      "15 summarization templates",
      "Document analysis techniques",
      "Information extraction methods",
      "Professional formatting guides"
    ],
    specifications: {
      "Duration": "4 hours",
      "Level": "Beginner",
      "Templates": "15 summary formats",
      "Document Types": "Reports, articles, research",
      "Access": "10 months",
      "Bonus": "Quick reference cards"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Prompt Optimization Shortcuts for ChatGPT",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Discover practical shortcuts and methods to refine prompts for faster and more accurate responses.",
    detailedDescription: "Accelerate your AI interactions with proven prompt optimization techniques. Learn time-saving shortcuts, response refinement methods, and systematic approaches to get better results from ChatGPT with less trial and error.",
    category: "Prompt Engineering",
    features: [
      "3 hours of intensive training",
      "20 optimization shortcuts",
      "Response refinement techniques",
      "Efficiency improvement methods",
      "Quick troubleshooting guides"
    ],
    specifications: {
      "Duration": "3 hours",
      "Level": "Beginner",
      "Shortcuts": "20 proven techniques",
      "Methods": "Systematic optimization",
      "Access": "8 months",
      "Bonus": "Cheat sheet collection"
    },
    inStock: true
  },
  {
    id: 5,
    name: "YouTube Video Summaries with AI",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    description: "Generate quick, structured summaries of YouTube videos to save time and extract key insights.",
    detailedDescription: "Master the art of extracting key information from video content efficiently. Learn to create structured summaries, identify main points, and organize insights from YouTube videos using AI-powered techniques for maximum learning efficiency.",
    category: "Content Analysis",
    features: [
      "3 hours of practical guidance",
      "10 summary templates",
      "Video analysis frameworks",
      "Key insight extraction",
      "Time-saving techniques"
    ],
    specifications: {
      "Duration": "3 hours",
      "Level": "Beginner",
      "Templates": "10 video summary formats",
      "Techniques": "Efficient extraction methods",
      "Access": "6 months",
      "Tools": "Browser extension guides"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Essential Prompting Tips & Techniques",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    description: "A beginner-friendly guide to improving AI prompts and getting consistent results.",
    detailedDescription: "Build a solid foundation in AI prompting with essential techniques and proven methods. Perfect for beginners who want to understand the fundamentals of effective communication with AI systems and achieve more reliable, consistent results.",
    category: "Prompt Basics",
    features: [
      "4 hours of foundational training",
      "30 essential prompt templates",
      "Consistency improvement methods",
      "Beginner-friendly exercises",
      "Result optimization techniques"
    ],
    specifications: {
      "Duration": "4 hours",
      "Level": "Beginner",
      "Templates": "30 basic prompts",
      "Focus": "Consistency & reliability",
      "Access": "10 months",
      "Support": "Beginner community"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Reset & Refine – Fixing Stuck AI Conversations",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    description: "Learn how to reset and guide AI when responses go off track, ensuring smoother interactions.",
    detailedDescription: "Master the art of troubleshooting AI conversations when they go awry. Learn effective reset techniques, conversation redirection methods, and strategies to get back on track quickly when AI responses become unhelpful or confusing.",
    category: "AI Troubleshooting",
    features: [
      "2 hours of practical guidance",
      "15 reset techniques",
      "Conversation redirection methods",
      "Quick troubleshooting guides",
      "Prevention strategies"
    ],
    specifications: {
      "Duration": "2 hours",
      "Level": "Beginner",
      "Techniques": "15 proven reset methods",
      "Focus": "Problem resolution",
      "Access": "6 months",
      "Format": "Step-by-step guides"
    },
    inStock: true
  },
  {
    id: 8,
    name: "The B.R.A.I.N. Framework for AI Mastery",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    description: "A structured method to approach AI tasks with clarity, precision, and efficiency.",
    detailedDescription: "Master the B.R.A.I.N. Framework - a systematic approach to AI interactions that ensures consistent, high-quality results. Learn to Break down problems, Research context, Analyze requirements, Implement solutions, and Navigate outcomes effectively.",
    category: "AI Frameworks",
    features: [
      "5 hours of framework training",
      "B.R.A.I.N. methodology guide",
      "25 practical applications",
      "Structured problem-solving",
      "Implementation templates"
    ],
    specifications: {
      "Duration": "5 hours",
      "Level": "Intermediate",
      "Framework": "Complete B.R.A.I.N. system",
      "Applications": "25 use cases",
      "Access": "12 months",
      "Bonus": "Quick reference cards"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Creating Animated GIFs with AI Tools",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    description: "Step-by-step process to design engaging animated GIFs for content and social media.",
    detailedDescription: "Learn to create eye-catching animated GIFs using AI-powered tools and techniques. Master the complete workflow from concept to final output, including optimization for different platforms and use cases in content marketing and social media.",
    category: "Content Creation",
    features: [
      "3 hours of creative training",
      "GIF creation workflows",
      "AI tool integration",
      "Platform optimization",
      "Social media formatting"
    ],
    specifications: {
      "Duration": "3 hours",
      "Level": "Beginner",
      "Tools": "AI-powered GIF creators",
      "Outputs": "Multiple format options",
      "Access": "8 months",
      "Bonus": "Template library"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Image Enhancement – Upscaling & PNG Conversion",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    description: "Transform visuals with AI: upscale images and convert them into high-quality PNGs.",
    detailedDescription: "Master AI-powered image enhancement techniques to improve visual quality and format conversion. Learn professional upscaling methods, PNG optimization, and batch processing workflows for content creators and marketers.",
    category: "Image Processing",
    features: [
      "4 hours of technical training",
      "Image upscaling techniques",
      "PNG conversion workflows",
      "Batch processing methods",
      "Quality optimization"
    ],
    specifications: {
      "Duration": "4 hours",
      "Level": "Beginner",
      "Tools": "AI upscaling platforms",
      "Formats": "Multiple output options",
      "Access": "10 months",
      "Bonus": "Quality comparison guides"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Advanced Prompt Engineering – Pro Tips & Strategies",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    description: "Deep dive into advanced prompting techniques to unlock AI's full potential.",
    detailedDescription: "Unlock the full power of AI with expert-level prompting strategies and advanced techniques. Master complex prompt structures, chain-of-thought reasoning, and professional-grade methods used by AI experts and consultants.",
    category: "Advanced Prompting",
    features: [
      "6 hours of expert instruction",
      "50 advanced prompt templates",
      "Chain-of-thought techniques",
      "Professional strategies",
      "Expert-level methods"
    ],
    specifications: {
      "Duration": "6 hours",
      "Level": "Advanced",
      "Techniques": "Expert-level strategies",
      "Templates": "50 advanced prompts",
      "Access": "18 months",
      "Bonus": "Professional toolkit"
    },
    inStock: true
  }
];
