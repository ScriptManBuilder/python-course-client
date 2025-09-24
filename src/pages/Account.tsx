import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../styles/GlobalStyles';
import { useAuth } from '../contexts/AuthContext';
import {
  AccountWrapper,
  AccountContent,
  Sidebar,
  SidebarItem,
  MainContent,
  SectionTitle,
  InfoCard,
  InfoGrid,
  InfoItem,
  LoginPromptWrapper,
  LoginPromptCard,
  LoginIcon,
  LoginTitle,
  LoginSubtitle,
  LoginButtons,
  LoginButton,
  WelcomeSection,
  WelcomeTitle,
  WelcomeSubtitle,
  EmptyOrdersText,
  EmptyOrdersButtonWrapper,
  ShoppingButton,
  CoursesGrid,
  CourseCard,
  CourseCardHeader,
  CourseTitle,
  CourseDescription,
  CourseStatus,
  CourseVideoWrapper,
  CourseVideo
} from '../styles/pages/AccountStyles';

const Account: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  // Дополнительная защита от скачивания видео
  useEffect(() => {
    // Отключаем контекстное меню на всей странице для курсов
    const handleContextMenu = (e: MouseEvent) => {
      if (activeTab === 'courses') {
        e.preventDefault();
      }
    };

    // Отключаем некоторые горячие клавиши
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab === 'courses') {
        // Отключаем Ctrl+S, Ctrl+Shift+I, F12
        if (
          (e.ctrlKey && e.key === 's') ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          e.key === 'F12'
        ) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab]);

  // Данные курсов для тестового аккаунта
  const testAccountCourses = [
    {
      id: 1,
      title: "Essential ChatGPT Basics",
      description: "Master machine learning from basics to advanced algorithms with hands-on projects and real-world applications.",
      price: "$6.99",
      video: "/videos/Essential ChatGPT Basics1.mp4"
    },
    {
      id: 2,
      title: "AI Personas & Roles – Designing Smarter Chatbots",
      description: "Learn how to build custom AI personas and role-based chatbots that respond with more natural, human-like interactions.",
      price: "$9.99",
      video: "/videos/AI Personas & Roles – Designing Smarter Chatbots2.mp4"
    },
    {
      id: 3,
      title: "AI-Powered Document Summaries with ChatGPT",
      description: "Master techniques for turning lengthy documents into clear, concise summaries using AI.",
      price: "$19.99",
      video: "/videos/AI-Powered Document Summaries with ChatGPT3.mp4"
    },
    {
      id: 4,
      title: "Prompt Optimization Shortcuts for ChatGPT",
      description: "Discover practical shortcuts and methods to refine prompts for faster and more accurate responses.",
      price: "$29.99",
      video: "/videos/Prompt Optimization Shortcuts for ChatGPT4.mp4"
    },
    {
      id: 5,
      title: "YouTube Video Summaries with AI",
      description: "Generate quick, structured summaries of YouTube videos to save time and extract key insights.",
      price: "$39.99",
      video: "/videos/YouTube Video Summaries with AI5.mp4"
    },
    {
      id: 6,
      title: "Essential Prompting Tips & Techniques",
      description: "A beginner-friendly guide to improving AI prompts and getting consistent results.",
      price: "$49.99",
      video: "/videos/Essential Prompting Tips & Techniques6.mp4"
    },
    {
      id: 7,
      title: "Reset & Refine – Fixing Stuck AI Conversations",
      description: "Learn how to reset and guide AI when responses go off track, ensuring smoother interactions.",
      price: "$59.99",
      video: "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (13).mp4"
    },
    {
      id: 8,
      title: "The B.R.A.I.N. Framework for AI Mastery",
      description: "A structured method to approach AI tasks with clarity, precision, and efficiency.",
      price: "$69.99",
      video: "/videos/The B.R.A.I.N. Framework for AI Mastery7.mp4"
    },
    {
      id: 9,
      title: "Creating Animated GIFs with AI Tools",
      description: "Step-by-step process to design engaging animated GIFs for content and social media.",
      price: "$79.99",
      video: "/videos/Creating Animated GIFs with AI Tools8.mp4"
    },
    {
      id: 10,
      title: "Image Enhancement – Upscaling & PNG Conversion",
      description: "Transform visuals with AI: upscale images and convert them into high-quality PNGs.",
      price: "$89.99",
      video: "/videos/Image Enhancement – Upscaling & PNG Conversion9.mp4"
    },
    {
      id: 11,
      title: "Advanced Prompt Engineering – Pro Tips & Strategies",
      description: "Deep dive into advanced prompting techniques to unlock AI's full potential.",
      price: "$99.99",
      video: "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (14).mp4"
    }
  ];

  const renderProfileSection = () => (
    <div>
      <SectionTitle>PROFILE INFORMATION</SectionTitle>
      
      <InfoCard>
        <InfoGrid>
          <InfoItem>
            <h4>First Name</h4>
            <p>{user?.firstName || 'Not provided'}</p>
          </InfoItem>
          <InfoItem>
            <h4>Last Name</h4>
            <p>{user?.lastName || 'Not provided'}</p>
          </InfoItem>
          <InfoItem>
            <h4>Email Address</h4>
            <p>{user?.email}</p>
          </InfoItem>
          <InfoItem>
            <h4>Account Status</h4>
            <p>Active</p>
          </InfoItem>
        </InfoGrid>
      </InfoCard>
    </div>
  );

  const renderOrdersSection = () => (
    <div>
      <SectionTitle>ORDER HISTORY</SectionTitle>
      
      <InfoCard>
        <EmptyOrdersText>
          No orders found. Start shopping to see your order history here.
        </EmptyOrdersText>
        <EmptyOrdersButtonWrapper>
          <ShoppingButton as={Link} to="/products" variant="primary">
            Start Shopping
          </ShoppingButton>
        </EmptyOrdersButtonWrapper>
      </InfoCard>
    </div>
  );

  const renderCoursesSection = () => {
    // Показываем курсы только для тестового аккаунта
    const isTestAccount = user?.email === 'test@test.com';
    
    if (!isTestAccount) {
      return (
        <div>
          <SectionTitle>MY AI COURSES</SectionTitle>
          
          <InfoCard>
            <EmptyOrdersText>
              🎓 Your purchased AI courses will appear here after successful payment.
            </EmptyOrdersText>
            <EmptyOrdersText style={{ fontSize: '1rem', marginTop: '1rem', opacity: 0.8 }}>
              Once you purchase any AI course, you'll have lifetime access to all course materials, 
              including videos, downloadable resources, and future updates.
            </EmptyOrdersText>
            <EmptyOrdersButtonWrapper>
              <ShoppingButton as={Link} to="/products" variant="primary">
                Browse AI Courses
              </ShoppingButton>
            </EmptyOrdersButtonWrapper>
          </InfoCard>
        </div>
      );
    }

    // Курсы для тестового аккаунта
    return (
      <div>
        <SectionTitle>MY AI COURSES</SectionTitle>
        
        <CoursesGrid>
          {testAccountCourses.map((course) => (
            <CourseCard key={course.id}>
              {/* <CourseStatus>Available</CourseStatus> */}
              <CourseCardHeader>
                <CourseTitle>{course.title}</CourseTitle>
              </CourseCardHeader>
              {course.video && (
                <CourseVideoWrapper>
                  <CourseVideo 
                    controls
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src={course.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </CourseVideo>
                </CourseVideoWrapper>
              )}
              <CourseDescription>{course.description}</CourseDescription>
            </CourseCard>
          ))}
        </CoursesGrid>
      </div>
    );
  };

  if (!user) {
    return (
      <AccountWrapper>
        <Container>
          <LoginPromptWrapper>
            <LoginPromptCard>
              <LoginIcon>
                🔐
              </LoginIcon>
              <LoginTitle>Access Required</LoginTitle>
              <LoginSubtitle>
                Please log in to access your account dashboard and manage your orders and personal information.
              </LoginSubtitle>
              <LoginButtons>
                <LoginButton as={Link} to="/login">
                  Sign In
                </LoginButton>
                <LoginButton as={Link} to="/register" variant="outline">
                  Create Account
                </LoginButton>
              </LoginButtons>
            </LoginPromptCard>
          </LoginPromptWrapper>
        </Container>
      </AccountWrapper>
    );
  }

  return (
    <AccountWrapper>
      <Container>
        <WelcomeSection>
          <WelcomeTitle>My Account</WelcomeTitle>
          <WelcomeSubtitle>
            Welcome back, {user.firstName}! Manage your account and view your orders.
          </WelcomeSubtitle>
        </WelcomeSection>

        <AccountContent>
          <Sidebar>
            <h3>Account Menu</h3>
            <SidebarItem 
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
            >
              Profile Information
            </SidebarItem>
            <SidebarItem 
              active={activeTab === 'courses'}
              onClick={() => setActiveTab('courses')}
            >
              My Courses
            </SidebarItem>
            <SidebarItem 
              active={activeTab === 'orders'}
              onClick={() => setActiveTab('orders')}
            >
              Order History
            </SidebarItem>
            <SidebarItem 
              active={false}
              onClick={logout}
              style={{ marginTop: '20px', color: '#ef4444' }}
            >
              Logout
            </SidebarItem>
          </Sidebar>

          <MainContent>
            {activeTab === 'profile' && renderProfileSection()}
            {activeTab === 'courses' && renderCoursesSection()}
            {activeTab === 'orders' && renderOrdersSection()}
          </MainContent>
        </AccountContent>
      </Container>
    </AccountWrapper>
  );
};

export default Account;