import React from 'react';
import styled from 'styled-components';
import { usePrice } from '../hooks/usePrice';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  color: var(--minimal-gray-900);
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: var(--minimal-gray-900);
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--minimal-gray-900);
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const PrivacyPolicy: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Privacy Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <Paragraph>
          The Williams Collection Inc. respects your privacy and is committed to protecting your personal data. 
          This privacy policy explains how we collect, use, and protect your information when you use our website and services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Information We Collect</SectionTitle>
        <Paragraph>
          We collect information you provide directly to us, such as when you create an account, 
          make a purchase, or contact us for support.
        </Paragraph>
        <Paragraph>
          This may include: name, email address, phone number, billing and shipping addresses, 
          payment information, and communication preferences.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. How We Use Your Information</SectionTitle>
        <Paragraph>
          We use your information to process orders, provide customer support, 
          send promotional emails (with your consent), and improve our services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Payment Processing</SectionTitle>
        <Paragraph>
          Payment information is processed securely through our payment processors. Charges will appear 
          on your statement as "THE WILLIAMS COLLECTION". We do not store complete credit card information on our servers.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Data Sharing</SectionTitle>
        <Paragraph>
          We do not sell, trade, or share your personal information with third parties except as necessary 
          to provide our services (e.g., payment processing, shipping) or as required by law.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Cookies and Tracking</SectionTitle>
        <Paragraph>
          We use cookies and similar technologies to improve your browsing experience, analyze website traffic, 
          and remember your preferences. You can control cookie settings through your browser.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Data Security</SectionTitle>
        <Paragraph>
          We implement appropriate security measures to protect your personal information against unauthorized access, 
          alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Your Rights</SectionTitle>
        <Paragraph>
          You have the right to access, update, or delete your personal information. You may also opt out 
          of marketing communications at any time. Contact us at <a href="mailto:support@thewilliamscollection.com">support@thewilliamscollection.com</a> for assistance.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Changes to This Policy</SectionTitle>
        <Paragraph>
          We may update this Privacy Policy from time to time. We will notify you of any significant changes 
          by posting the new policy on our website and updating the "last updated" date.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Contact Information</SectionTitle>
        <Paragraph>
          If you have questions about this Privacy Policy, please contact us:
        </Paragraph>
        <Paragraph>
          <strong>The Williams Collection Inc.</strong><br/>
          E 2ND ST 5830, Casper, WY 82609, United States<br/>
          Email: <a href="mailto:support@thewilliamscollection.com">support@thewilliamscollection.com</a><br/>
          Phone: +1 844-329-3900
        </Paragraph>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy;
