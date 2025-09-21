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

const ReturnPolicy: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Return Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <Paragraph>
          The Williams Collection Inc. offers a comprehensive return policy to ensure customer satisfaction. 
          Please review the following terms and conditions for returning products.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Return Window</SectionTitle>
        <Paragraph>
          You may return most items within 30 days of delivery for a full refund. 
          The return window begins on the day you receive your items.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Condition Requirements</SectionTitle>
        <Paragraph>
          Items must be returned in their original condition, unused, and in original packaging 
          with all accessories, manuals, and documentation included.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. How to Return Items</SectionTitle>
        <Paragraph>
          To initiate a return:
        </Paragraph>
        <Paragraph>
          1. Contact our support team at support@willcol.com<br/>
          2. Provide your order number and reason for return<br/>
          3. We will provide a return authorization number and instructions<br/>
          4. Pack the item securely and ship to our returns address
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Return Shipping Address</SectionTitle>
        <Paragraph>
          Please send all returns to:
        </Paragraph>
        <Paragraph>
          <strong>Williams Collection Inc.</strong><br/>
          Returns Department<br/>
          E 2ND ST 5830<br/>
          Casper, WY 82609<br/>
          United States
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Return Shipping Costs</SectionTitle>
        <Paragraph>
          Customers are responsible for return shipping costs unless the item was defective 
          or we made an error in your order. We recommend using a trackable shipping method.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Processing Returns</SectionTitle>
        <Paragraph>
          Once we receive your return, we will inspect the item and process your refund within 
          5-7 business days. Refunds will be issued to your original payment method and will 
          appear as "The Williams Collection Inc." on your statement.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Non-Returnable Items</SectionTitle>
        <Paragraph>
          Certain items cannot be returned, including: personalized items, items damaged 
          by misuse, items returned without original packaging, and items returned after 30 days.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Exchanges</SectionTitle>
        <Paragraph>
          We do not offer direct exchanges. To exchange an item, please return the original 
          item for a refund and place a new order for the desired item.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Contact Information</SectionTitle>
        <Paragraph>
          For questions about returns, please contact us:
        </Paragraph>
        <Paragraph>
          <strong>The Williams Collection Inc.</strong><br/>
          Email: support@willcol.com<br/>
          Phone: +14452856014<br/>
          Address: E 2ND ST 5830, Casper, WY 82609, United States
        </Paragraph>
      </Section>
    </Container>
  );
};

export default ReturnPolicy;
