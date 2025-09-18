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

const ShippingPolicy: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Shipping Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <Paragraph>
          Williams Collection Inc. is committed to delivering your orders quickly and safely. 
          This shipping policy outlines our delivery options, processing times, and shipping costs.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Processing Time</SectionTitle>
        <Paragraph>
          Orders are typically processed and dispatched within 1-2 business days. 
          Orders placed on weekends or holidays will be processed on the next business day.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Shipping Options</SectionTitle>
        <Paragraph>
          <strong>Standard Shipping:</strong> 3-5 business days (Free on orders over {formatPrice(50)})<br/>
          <strong>Express Shipping:</strong> 1-2 business days ({formatPrice(9.99)})
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Shipping Costs</SectionTitle>
        <Paragraph>
          Standard shipping: {formatPrice(4.99)} for orders under {formatPrice(50)}<br/>
          Express shipping: {formatPrice(9.99)}<br/>
          Orders over {formatPrice(50)}: Free standard shipping
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Delivery Areas</SectionTitle>
        <Paragraph>
          We currently ship to all locations within the United States. 
          International shipping may be available upon request - please contact <a href="mailto:ops@sapienta.vc">support@willcol.com</a> for details.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Order Tracking</SectionTitle>
        <Paragraph>
          Once your order ships, you will receive a tracking number via email. 
          You can track your package through our shipping partner's website.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Delivery Issues</SectionTitle>
        <Paragraph>
          If your package is lost or damaged during shipping, please contact us immediately at <a href="mailto:support@willcol.com">support@willcol.com</a>. 
          We will work with our shipping partners to resolve the issue quickly.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Address Requirements</SectionTitle>
        <Paragraph>
          Please ensure your shipping address is complete and accurate. 
          We cannot be responsible for delays or non-delivery due to incomplete or incorrect addresses.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Contact Information</SectionTitle>
        <Paragraph>
          For shipping questions or concerns, please contact us:
        </Paragraph>
        <Paragraph>
          <strong>Williams Collection Inc.</strong><br/>
          E 2ND ST 5830, Casper, WY 82609, US<br/>
          Email: <a href="mailto:support@willcol.com">support@willcol.com</a><br/>
          Phone: +1 844 329 3900
        </Paragraph>
      </Section>
    </Container>
  );
};

export default ShippingPolicy;
