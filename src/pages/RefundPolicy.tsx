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

const RefundPolicy: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Refund Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <Paragraph>
          At Williams Collection Inc., we want you to be completely satisfied with your purchase. 
          This refund policy outlines the terms and conditions for returns and refunds.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Return Period</SectionTitle>
        <Paragraph>
          You have 30 days from the date of delivery to return items for a full refund. 
          Items must be in original, unused condition with all original packaging and accessories.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Product Refund Process</SectionTitle>
        <Paragraph>
          To initiate a return, contact us at support@willcol.com with your order number and reason for return.
          We will provide you with a return authorization and shipping instructions.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Return Address</SectionTitle>
        <Paragraph>
          Please send returns to:
        </Paragraph>
        <Paragraph>
          <strong>Williams Collection Inc.</strong><br/>
          Returns Department<br/>
          15 Station Road, New Barnet, Barnet<br/>
          EN5 1NZ, United Kingdom
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Refund Processing</SectionTitle>
        <Paragraph>
          Refunds will be processed within 5-7 business days after we receive your returned item.
          Refunds will be issued to the original payment method. You will see "WILLCOL.COM" on your statement.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Non-Returnable Items</SectionTitle>
        <Paragraph>
          The following items cannot be returned: damaged items due to misuse, items returned after 30 days,
          and items not in original packaging.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Shipping Costs</SectionTitle>
        <Paragraph>
          Original shipping costs are non-refundable. Return shipping costs are the responsibility of the customer
          unless the item was defective or we made an error.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Contact Information</SectionTitle>
        <Paragraph>
          For questions about returns or refunds, please contact us:
        </Paragraph>
        <Paragraph>
          <strong>Williams Collection Inc.</strong><br/>
          Email: support@willcol.com<br/>
          Phone: +14452856014<br/>
          Address: E 2ND ST 5830, Casper, WY 82609, US
        </Paragraph>
      </Section>
    </Container>
  );
};

export default RefundPolicy;
