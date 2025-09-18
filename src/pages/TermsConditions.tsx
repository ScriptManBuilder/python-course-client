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

const TermsConditions: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Terms & Conditions</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Paragraph>
          By accessing and using The Williams Collection Inc. website and services, you accept and agree to be bound by 
          the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Company Information</SectionTitle>
        <Paragraph>
          This website is operated by The Williams Collection Inc. 
          Our contact information:
        </Paragraph>
        <Paragraph>
          Email: <a href="mailto:ops@sapienta.vc">support@willcol.com</a><br/>
          Phone: +1 844-329-3900<br/>
          Address: E 2ND ST 5830, Casper, WY 82609, United States
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Product Pricing</SectionTitle>
        <Paragraph>
          Our products are available at various price points: {formatPrice(2.99)}, {formatPrice(6.99)}, {formatPrice(9.99)}, {formatPrice(19.99)}, {formatPrice(29.99)}, and {formatPrice(39.99)}. 
          All prices include applicable taxes.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Payment and Billing</SectionTitle>
        <Paragraph>
          We accept major credit and debit cards. Your payment information is processed securely through our payment processors.
        </Paragraph>
        <Paragraph>
          <strong>Billing Descriptor:</strong> Charges will appear on your credit card statement as "THE WILLIAMS COLLECTION". 
          This is how the charge will appear on your cardholder's billing statement.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Shipping and Delivery</SectionTitle>
        <Paragraph>
          We aim to dispatch orders within 1-2 business days. Delivery times may vary 
          based on location and shipping method selected. Free shipping is available on orders over {formatPrice(50)}.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Returns and Refunds</SectionTitle>
        <Paragraph>
          Returns are accepted within 30 days of delivery. Items must be in original 
          condition and packaging. Please refer to our Return Policy for detailed information.
        </Paragraph>
        <Paragraph>
          <strong>Return Address:</strong><br/>
          The Williams Collection Inc.<br/>
          Returns Department<br/>
          E 2ND ST 5830<br/>
          Casper, WY 82609, United States
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Limitation of Liability</SectionTitle>
        <Paragraph>
          The Williams Collection Inc. shall not be liable for any direct, indirect, incidental, 
          or consequential damages arising from the use of our products or services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Governing Law</SectionTitle>
        <Paragraph>
          These terms and conditions are governed by and construed in accordance with 
          the laws of the State of Wyoming, United States.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Contact Information</SectionTitle>
        <Paragraph>
          For questions about these Terms & Conditions, please contact us at:
        </Paragraph>
        <Paragraph>
          <strong>The Williams Collection Inc.</strong><br />
          E 2ND ST 5830, Casper, WY 82609, United States<br />
          Phone: +1 844-329-3900<br />
          Email: <a href="mailto:ops@sapienta.vc">support@willcol.com</a>
        </Paragraph>
      </Section>
    </Container>
  );
};

export default TermsConditions;
