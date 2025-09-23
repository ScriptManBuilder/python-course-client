import React, { useState } from 'react';
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
  ShoppingButton
} from '../styles/pages/AccountStyles';

const Account: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

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

  const renderCoursesSection = () => (
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