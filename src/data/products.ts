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
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем простые placeholder изображения
  return `/images/python-course-${productId}.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем автогенерацию из видео
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (1).mp4";
  }
  if (productId === 2) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (2).mp4";
  }
  if (productId === 3) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (3).mp4";
  }
  if (productId === 4) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (4).mp4";
  }
  if (productId === 5) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (5).mp4";
  }
  if (productId === 6) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (6).mp4";
  }
  if (productId === 7) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (7).mp4";
  }
  if (productId === 8) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (8).mp4";
  }
  if (productId === 9) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (9).mp4";
  }
  if (productId === 10) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (10).mp4";
  }
  if (productId === 11) {
    return "/videos/Python 3 Programming Your Guide to Basic Python Programming for (11).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 5-7: 2 videos each
  if (productId === 5) {
    return [
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (12).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (13).mp4"
    ];
  }
  if (productId === 6) {
    return [
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (14).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (15).mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (16).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (17).mp4"
    ];
  }
  
  // Courses 8-10: 3 videos each
  if (productId === 8) {
    return [
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (18).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (19).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (20).mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (21).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (22).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (23).mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (24).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (25).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (26).mp4"
    ];
  }
  
  // Course 11: 4 videos
  if (productId === 11) {
    return [
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (27).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (29).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (30).mp4",
      "/videos/Python 3 Programming Your Guide to Basic Python Programming for (31).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Introduction to Basic Python Programming",
    price: 6.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Learn Python basics: variables, data types, user input, and control flow. Perfect start for beginners.",
    detailedDescription: "Master Python fundamentals with topics including data types, variables, mathematics, user input, if statements, loops, and basic text/math methods. This course covers the essential building blocks every Python programmer needs.",
    category: "Python Basics",
    features: [
      "1.5 hours of content",
      "Data types and variables",
      "User input handling",
      "If statements and loops",
      "Basic math and text methods"
    ],
    specifications: {
      "Duration": "1.5 hours",
      "Level": "Complete Beginner",
      "Language": "English",
      "Topics": "Variables, loops, conditions",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Python Lists, Strings & Data Structures",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Master lists, strings, dictionaries, tuples, and sets. Learn slicing, indexing, and formatting.",
    detailedDescription: "Deep dive into Python data structures including lists, strings, dictionaries, tuples, and sets. Learn practical skills like slicing, indexing, string formatting, and data manipulation techniques essential for real programming.",
    category: "Python Data",
    features: [
      "2 hours of practical training",
      "Lists and string manipulation",
      "Slicing and indexing mastery",
      "Dictionary and tuple handling",
      "String formatting techniques"
    ],
    specifications: {
      "Duration": "2 hours",
      "Level": "Beginner",
      "Topics": "Lists, strings, dictionaries, sets",
      "Skills": "Slicing, indexing, formatting",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Python Methods and Functions",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Learn to create custom functions, understand parameters, return values, and advanced function concepts.",
    detailedDescription: "Master Python functions from basic to advanced level. Learn function definition, parameters, return values, scope, and advanced function techniques. Includes practical exercises and real-world function examples.",
    category: "Python Functions",
    features: [
      "1 hour of focused training",
      "Function creation and usage",
      "Parameters and return values",
      "Advanced function concepts",
      "Practical function exercises"
    ],
    specifications: {
      "Duration": "1 hour",
      "Level": "Beginner",
      "Topics": "Functions, parameters, scope",
      "Practice": "Multiple function exercises",
      "Access": "10 months",
      "Bonus": "Function reference guide"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Python Object-Oriented Programming",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Learn classes, objects, inheritance, polymorphism, and dunder methods for advanced Python programming.",
    detailedDescription: "Master object-oriented programming in Python. Learn to create classes and objects, implement inheritance and polymorphism, and use dunder methods. Includes practical projects to solidify OOP concepts.",
    category: "Python OOP",
    features: [
      "1.5 hours of intensive training",
      "Class creation and attributes",
      "Inheritance and polymorphism",
      "Dunder methods explained",
      "Practical OOP projects"
    ],
    specifications: {
      "Duration": "1.5 hours",
      "Level": "Intermediate",
      "Topics": "Classes, inheritance, polymorphism",
      "Projects": "Multiple OOP projects",
      "Access": "8 months",
      "Bonus": "OOP best practices guide"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Advanced Python Concepts & Practices",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master advanced Python topics including decorators, generators, and professional development practices.",
    detailedDescription: "Take your Python skills to the next level with advanced concepts and professional practices. This course includes 2 comprehensive video modules covering advanced programming techniques used by Python professionals.",
    category: "Advanced Python",
    features: [
      "2 comprehensive video modules",
      "3 hours of advanced training",
      "Professional coding practices",
      "Advanced Python patterns",
      "Real-world applications",
      "Performance optimization"
    ],
    specifications: {
      "Duration": "3 hours",
      "Videos": "2 comprehensive modules",
      "Level": "Advanced",
      "Topics": "Advanced concepts, best practices",
      "Projects": "Multiple advanced projects",
      "Access": "10 months",
      "Bonus": "Professional development guide"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Python Libraries & Package Management",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn to use popular Python libraries and manage packages effectively with pip and virtual environments.",
    detailedDescription: "Master Python's ecosystem with essential libraries and package management tools. This course includes 2 detailed video modules covering popular libraries and comprehensive package management with pip and virtual environments.",
    category: "Python Libraries",
    features: [
      "2 detailed video modules",
      "3.5 hours of library training",
      "Package management mastery",
      "Virtual environment setup",
      "Popular library usage",
      "Dependency management"
    ],
    specifications: {
      "Duration": "3.5 hours",
      "Videos": "2 detailed modules",
      "Level": "Intermediate",
      "Libraries": "requests, numpy, pandas basics",
      "Tools": "pip, venv, virtualenv",
      "Access": "12 months",
      "Support": "Library reference guide"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Python Web Development with Flask",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Build web applications with Flask framework, including routing, templates, and database integration.",
    detailedDescription: "Enter the world of web development with Python's Flask framework. This course includes 2 comprehensive video modules covering web application creation, routing, templating, and basic database integration for dynamic websites.",
    category: "Python Web",
    features: [
      "2 comprehensive video modules",
      "4 hours of web development",
      "Flask framework mastery",
      "Template creation",
      "Database integration",
      "RESTful API basics"
    ],
    specifications: {
      "Duration": "4 hours",
      "Videos": "2 comprehensive modules",
      "Level": "Intermediate",
      "Framework": "Flask web framework",
      "Projects": "Complete web application",
      "Access": "12 months",
      "Bonus": "Deployment guide"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Python Algorithms & Data Structures",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master essential algorithms and data structures for efficient Python programming.",
    detailedDescription: "Advance your Python skills with fundamental algorithms and data structures. This course includes 3 detailed video modules covering sorting algorithms, search techniques, and data structure implementation for optimized programming.",
    category: "Python Algorithms",
    features: [
      "3 detailed video modules",
      "5 hours of algorithm training",
      "Data structure implementation",
      "Sorting and searching",
      "Time complexity analysis",
      "Optimization techniques"
    ],
    specifications: {
      "Duration": "5 hours",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Topics": "Algorithms, data structures, optimization",
      "Algorithms": "15+ implementations",
      "Access": "12 months",
      "Bonus": "Algorithm complexity guide"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Python Data Analysis with Pandas",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Learn data manipulation, analysis, and visualization using pandas and matplotlib libraries.",
    detailedDescription: "Master data analysis with Python's powerful pandas library. This premium course includes 3 comprehensive video modules covering data manipulation, statistical analysis, and creating compelling visualizations.",
    category: "Data Analysis",
    features: [
      "3 comprehensive video modules",
      "6 hours of data training",
      "Pandas data manipulation",
      "Statistical analysis",
      "Data visualization",
      "Real-world datasets"
    ],
    specifications: {
      "Duration": "6 hours",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Libraries": "pandas, matplotlib, seaborn",
      "Projects": "3 data analysis projects",
      "Access": "15 months",
      "Bonus": "Dataset collection"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Python REST API Development",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Build robust REST APIs with Python using FastAPI framework and database integration.",
    detailedDescription: "Master modern API development with Python's FastAPI framework. This premium course includes 3 detailed video modules covering RESTful API design, database integration, and authentication for production-ready applications.",
    category: "API Development",
    features: [
      "3 detailed video modules",
      "7 hours of API development",
      "FastAPI framework mastery",
      "Database integration",
      "Authentication systems",
      "API testing & deployment"
    ],
    specifications: {
      "Duration": "7 hours",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Framework": "FastAPI with SQLAlchemy",
      "Features": "Authentication, testing, docs",
      "Access": "15 months",
      "Bonus": "Production deployment guide"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Advanced Python Programming & Best Practices",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master advanced Python concepts including decorators, generators, context managers, and professional development practices.",
    detailedDescription: "Reach Python expertise with advanced programming concepts and industry best practices. This premium course includes 4 comprehensive video modules covering decorators, generators, context managers, and professional development workflows used by Python experts.",
    category: "Advanced Python",
    features: [
      "4 comprehensive video modules",
      "8 hours of expert instruction",
      "Advanced Python concepts",
      "Professional best practices",
      "Testing & debugging techniques",
      "Performance optimization"
    ],
    specifications: {
      "Duration": "8 hours",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Concepts": "Decorators, generators, metaclasses",
      "Practices": "Testing, debugging, optimization",
      "Access": "18 months",
      "Bonus": "Professional development toolkit"
    },
    inStock: true
  }
];
