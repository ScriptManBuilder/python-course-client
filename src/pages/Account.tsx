import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Button } from '../styles/GlobalStyles';
import { useAuth } from '../contexts/AuthContext';

const AccountWrapper = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: var(--minimal-bg);
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

const AccountContent = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Sidebar = styled.div`
  background: var(--minimal-white);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--minimal-gray-200);
  height: fit-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 968px) {
    display: none;
  }
`;

const SidebarItem = styled.button<{ active: boolean }>`
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  margin-bottom: 8px;
  border: none;
  border-radius: 8px;
  background: ${props => props.active ? 'var(--minimal-primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--minimal-white)' : 'var(--minimal-text-secondary)'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--minimal-primary)' : 'var(--minimal-gray-100)'};
    color: ${props => props.active ? 'var(--minimal-white)' : 'var(--minimal-text-primary)'};
  }
`;

const MainContent = styled.div`
  background: var(--minimal-white);
  border-radius: 12px;
  padding: 32px;
  border: 1px solid var(--minimal-gray-200);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--minimal-text-primary);
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--minimal-gray-200);
`;

const InfoCard = styled.div`
  background: var(--minimal-gray-800);
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid var(--minimal-gray-700);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const InfoItem = styled.div`
  h4 {
    color: var(--minimal-gray-400);
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
  p {
    color: var(--minimal-text);
    font-weight: 500;
  }
`;

const LoginPromptWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const LoginPromptCard = styled.div`
  background: var(--minimal-gray-900);
  border-radius: 20px;
  padding: 60px;
  text-align: center;
  border: 1px solid var(--minimal-gray-800);
  max-width: 500px;
`;

const LoginIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 30px;
`;

const LoginTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--minimal-text);
  margin-bottom: 15px;
`;

const LoginSubtitle = styled.p`
  color: var(--minimal-gray-400);
  font-size: 1.1rem;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const LoginButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  padding: 15px 30px;
  font-size: 1.1rem;
`;

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
        <p style={{ color: 'var(--minimal-gray-400)', textAlign: 'center', padding: '40px' }}>
          No orders found. Start shopping to see your order history here.
        </p>
        <div style={{ textAlign: 'center' }}>
          <Button as={Link} to="/products" variant="primary">
            Start Shopping
          </Button>
        </div>
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
        <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700',
            background: 'linear-gradient(135deg, var(--minimal-text) 0%, #60a5fa 50%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '10px'
          }}>
            My Account
          </h1>
          <p style={{ color: 'var(--minimal-gray-400)', fontSize: '1.1rem' }}>
            Welcome back, {user.firstName}! Manage your account and view your orders.
          </p>
        </div>

        <AccountContent>
          <Sidebar>
            <h3 style={{ color: '#2d3748', marginBottom: '20px' }}>Account Menu</h3>
            <SidebarItem 
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
            >
              Profile Information
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
            {activeTab === 'orders' && renderOrdersSection()}
          </MainContent>
        </AccountContent>
      </Container>
    </AccountWrapper>
  );
};

export default Account;