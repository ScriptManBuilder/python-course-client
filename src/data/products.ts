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
    name: "Williams Collection AI Course - Essential ChatGPT Basics",
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
    name: "Williams Collection AI Course - Smart Content Generation Methods",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Accelerate your content creation workflow. Generate quality text materials using proven AI frameworks.",
    detailedDescription: "Enhance your writing capabilities with structured AI assistance techniques. Learn systematic approaches to content planning, draft generation, and revision processes. Perfect for content creators seeking consistent output improvement through AI collaboration.",
    category: "Content Creation",
    features: [
      "6 hours of structured lessons",
      "40 content templates",
      "Writing framework systems",
      "Quality improvement methods",
      "Output optimization techniques"
    ],
    specifications: {
      "Duration": "6 hours",
      "Level": "Beginner",
      "Resources": "40 writing templates",
      "Frameworks": "3 content systems",
      "Access": "8 months",
      "Updates": "Quarterly template additions"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Williams Collection AI Course - Business Process Optimization",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Streamline business operations with intelligent automation. Implement AI workflows that save significant time.",
    detailedDescription: "Transform routine business tasks through strategic AI implementation. Covers systematic workflow analysis, automated response creation, and efficiency measurement techniques. Includes practical implementation guides for common business scenarios.",
    category: "Business Automation",
    features: [
      "10 hours of comprehensive training",
      "60 automation templates",
      "Workflow analysis tools",
      "Efficiency tracking methods",
      "Implementation roadmaps",
      "Business case examples"
    ],
    specifications: {
      "Duration": "10 hours",
      "Level": "Intermediate",
      "Templates": "60 business workflows",
      "Tools": "Analysis & tracking systems",
      "Case Studies": "8 detailed examples",
      "Access": "12 months",
      "Support": "Email assistance"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Williams Collection AI Course - Advanced Interaction Strategies",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Master sophisticated AI communication techniques. Develop expert-level prompting skills for complex scenarios.",
    detailedDescription: "Advance beyond basic AI interactions with comprehensive strategic approaches. Learn complex reasoning patterns, multi-step problem solving, and specialized communication techniques for professional applications across various industries and contexts.",
    category: "Advanced AI",
    features: [
      "14 hours of expert instruction",
      "120 advanced interaction patterns",
      "Industry-specific methodologies",
      "Complex problem frameworks",
      "Professional application guides",
      "Troubleshooting protocols",
      "Expert strategy sessions"
    ],
    specifications: {
      "Duration": "14 hours",
      "Level": "Advanced",
      "Patterns": "120 sophisticated templates",
      "Industries": "12 specialized approaches",
      "Sessions": "3 strategy consultations",
      "Access": "18 months",
      "Updates": "Monthly pattern library"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Williams Collection AI Course - Marketing Intelligence Revolution",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    description: "Transform marketing campaigns with AI-driven strategies. Create compelling content and optimize performance systematically.",
    detailedDescription: "Revolutionize marketing approaches through intelligent automation and data-driven content creation. Master campaign development, audience analysis, performance optimization, and conversion improvement using advanced AI methodologies and proven frameworks.",
    category: "AI Marketing",
    features: [
      "18 hours of comprehensive content",
      "150 campaign templates",
      "Performance analytics systems",
      "Testing optimization frameworks",
      "Conversion tracking methods",
      "Multi-platform strategies",
      "ROI measurement tools",
      "Campaign automation workflows"
    ],
    specifications: {
      "Duration": "18 hours",
      "Level": "Intermediate to Advanced",
      "Templates": "150 marketing campaigns",
      "Analytics": "Comprehensive tracking suite",
      "Platforms": "Social media & advertising",
      "Access": "24 months",
      "Bonus": "Platform integration guides",
      "Support": "Priority assistance"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Williams Collection AI Course - Data Intelligence Mastery",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    description: "Extract actionable insights from complex data using intelligent analysis techniques. Master data storytelling and visualization.",
    detailedDescription: "Develop comprehensive data analysis capabilities through AI-assisted methodologies. Learn advanced statistical interpretation, visualization creation, automated reporting systems, and strategic insight generation for informed decision-making processes.",
    category: "Data & Analytics",
    features: [
      "22 hours of intensive training",
      "200 analysis templates",
      "Advanced visualization techniques",
      "Automated reporting systems",
      "Statistical modeling frameworks",
      "Data storytelling methods",
      "Integration protocols",
      "Quality assurance processes",
      "Performance benchmarking"
    ],
    specifications: {
      "Duration": "22 hours",
      "Level": "Advanced",
      "Tools": "Multiple platform integration",
      "Templates": "200 analysis frameworks",
      "Datasets": "50+ practice scenarios",
      "Access": "36 months",
      "Certification": "Professional analytics credential",
      "Mentorship": "Data expert guidance"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Williams Collection AI Course - Ultimate Productivity Transformation",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    description: "Complete workflow revolution using AI integration. Build personalized productivity systems that maximize efficiency.",
    detailedDescription: "Achieve total productivity transformation through comprehensive AI integration across all work processes. Master time optimization, task automation, meeting enhancement, project management, and personal assistant development for unprecedented efficiency gains.",
    category: "Productivity Mastery",
    features: [
      "20 hours of complete system training",
      "300 productivity templates",
      "Personal AI assistant development",
      "Comprehensive automation workflows",
      "Time optimization frameworks",
      "Project management integration",
      "Performance tracking systems",
      "Habit formation protocols"
    ],
    specifications: {
      "Duration": "20 hours",
      "Level": "All levels welcome",
      "System": "Complete productivity ecosystem",
      "Automation": "300+ workflow templates",
      "Assistant": "Custom AI development guide",
      "Access": "Lifetime",
      "Integrations": "50+ app connections",
      "Community": "Exclusive productivity network"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Williams Collection AI Course - Creative Innovation Studio",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    description: "Unleash unlimited creative potential with multi-modal AI tools. Master visual, audio, and content creation workflows.",
    detailedDescription: "Explore the frontiers of AI-assisted creativity across multiple mediums. Master image generation, video production, audio creation, writing enhancement, and creative project management using cutting-edge tools and professional workflows for artistic excellence.",
    category: "Creative AI",
    features: [
      "22 hours of creative mastery content",
      "400 creative templates",
      "Multi-platform tool integration",
      "Professional project workflows",
      "Visual content generation",
      "Audio production techniques",
      "Creative writing enhancement",
      "Portfolio development strategies",
      "Client presentation methods",
      "Monetization frameworks"
    ],
    specifications: {
      "Duration": "22 hours",
      "Level": "Intermediate to Expert",
      "Tools": "Premium multi-platform access",
      "Projects": "50+ portfolio pieces",
      "Workflows": "Professional creative pipelines",
      "Access": "Lifetime",
      "Portfolio": "Professional showcase development",
      "Network": "Creative professional community"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Williams Collection AI Course - Professional Consulting Excellence",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    description: "Build a profitable AI consulting practice. Master client acquisition, solution design, and implementation strategies.",
    detailedDescription: "Establish yourself as an AI implementation expert through comprehensive business development training. Learn advanced consulting methodologies, client relationship management, solution architecture, and revenue generation strategies for sustainable consulting success.",
    category: "AI Consulting",
    features: [
      "24 hours of business development training",
      "500 consulting templates",
      "Client acquisition systems",
      "Solution design frameworks",
      "Implementation methodologies",
      "Pricing strategy optimization",
      "Contract negotiation techniques",
      "Project management protocols",
      "Quality assurance systems",
      "Client retention strategies",
      "Revenue scaling methods"
    ],
    specifications: {
      "Duration": "24 hours",
      "Level": "Expert",
      "Business": "Complete consulting framework",
      "Acquisition": "Proven client systems",
      "Templates": "500+ business documents",
      "Access": "Lifetime",
      "Mentorship": "1-on-1 expert guidance",
      "Network": "Professional consultant community"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Williams Collection AI Course - Enterprise Implementation Mastery",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    description: "Deploy AI solutions at enterprise scale. Master security, compliance, and organizational change management.",
    detailedDescription: "Lead large-scale AI transformations in corporate environments through comprehensive enterprise implementation expertise. Master security protocols, compliance frameworks, change management strategies, and organizational development for successful AI adoption.",
    category: "Enterprise AI",
    features: [
      "26 hours of enterprise-level training",
      "600 implementation templates",
      "Enterprise architecture frameworks",
      "Security protocol development",
      "Compliance management systems",
      "Change leadership strategies",
      "ROI measurement methodologies",
      "Risk assessment protocols",
      "Stakeholder management techniques",
      "Training program development",
      "Performance monitoring systems"
    ],
    specifications: {
      "Duration": "26 hours",
      "Level": "Expert Enterprise",
      "Architecture": "Scalable enterprise systems",
      "Compliance": "Global regulatory frameworks",
      "Management": "Organizational transformation",
      "Access": "Lifetime",
      "Certification": "Enterprise AI specialist",
      "Support": "Dedicated expert consultation"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Williams Collection AI Course - Future Leadership Mastery",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    description: "Master next-generation AI technologies and career strategies. Lead the future of artificial intelligence innovation.",
    detailedDescription: "Become a visionary leader in the evolving AI landscape through comprehensive future-focused training. Master emerging technologies, strategic career positioning, innovation leadership, and sustainable competitive advantage in the rapidly advancing AI ecosystem.",
    category: "AI Mastery",
    features: [
      "28 hours of cutting-edge content",
      "800 future-ready templates",
      "Emerging technology mastery",
      "Strategic career positioning",
      "Innovation leadership development",
      "Future trend analysis",
      "Competitive advantage strategies",
      "Network building protocols",
      "Thought leadership development",
      "Research methodology training",
      "Conference speaking preparation",
      "Industry influence strategies"
    ],
    specifications: {
      "Duration": "28 hours",
      "Level": "Visionary Expert",
      "Technologies": "Next-generation AI systems",
      "Strategy": "Future leadership positioning",
      "Access": "Lifetime with perpetual updates",
      "Community": "Exclusive innovation network",
      "Mentorship": "Direct expert access",
      "Recognition": "Industry thought leader certification"
    },
    inStock: true
  }
];
