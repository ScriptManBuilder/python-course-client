import React, { useState, useEffect } from 'react';
import { MailIcon, PhoneIcon, ClockIcon } from '../components/Icons';
import {
  SupportWrapper,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  SupportContent,
  ContactSection,
  SectionTitle,
  ContactMethodsGrid,
  ContactCard,
  ContactIcon,
  ContactContent,
  ContactTitle,
  ContactInfo,
  ContactLink,
  FAQSection,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  Container
} from '../styles/pages/SupportStyles';

const Support: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the UK. Express shipping is available for next-day delivery. International shipping times vary by location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all products. Items must be in original condition with packaging. Please contact our support team to initiate a return."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also check your order status by logging into your account on our website."
    },
    {
      question: "Do you offer warranty on your products?",
      answer: "Yes, all our products come with manufacturer warranty. Premium products include extended warranty options."
    }
  ];

  return (
    <SupportWrapper>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Customer Support</HeroTitle>
            <HeroSubtitle>
              We're here to help you 24/7. Get expert assistance from our dedicated support team.
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <Container>
        <SupportContent>
          <ContactSection>
            <SectionTitle>Get in Touch</SectionTitle>
            <ContactMethodsGrid>
              <ContactCard>
                <ContactIcon>
                  <MailIcon size={isMobile ? 24 : 32} />
                </ContactIcon>
                <ContactContent>
                  <ContactTitle>Email Support</ContactTitle>
                  <ContactInfo>Average response time: 2-4 hours</ContactInfo>
                  <ContactLink href="mailto:ops@sapienta.vc">
                    support@willcol.com
                  </ContactLink>
                </ContactContent>
              </ContactCard>
              
              <ContactCard>
                <ContactIcon>
                  <PhoneIcon size={isMobile ? 24 : 32} />
                </ContactIcon>
                <ContactContent>
                  <ContactTitle>Phone Support</ContactTitle>
                  <ContactInfo>Monday - Friday, 9 AM - 6 PM MST</ContactInfo>
                  <ContactLink href="tel:+18443293900">
                    +1 844 329 3900
                  </ContactLink>
                </ContactContent>
              </ContactCard>
              
              <ContactCard>
                <ContactIcon>
                  <ClockIcon size={isMobile ? 24 : 32} />
                </ContactIcon>
                <ContactContent>
                  <ContactTitle>Business Hours</ContactTitle>
                  <ContactInfo>Monday - Friday: 9:00 AM - 6:00 PM GMT</ContactInfo>
                  <ContactInfo style={{ marginTop: '5px' }}>Weekend: Emergency support only</ContactInfo>
                </ContactContent>
              </ContactCard>
            </ContactMethodsGrid>
          </ContactSection>
          
          
          <FAQSection>
            <SectionTitle style={{ textAlign: 'center' }}>
              Frequently Asked Questions
            </SectionTitle>
            
            {faqData.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion
                  type="button"
                  className={activeFAQ === index ? 'active' : ''}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </FAQQuestion>
                <FAQAnswer className={activeFAQ === index ? 'active' : ''}>
                  <p>{faq.answer}</p>
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQSection>
        </SupportContent>
      </Container>
    </SupportWrapper>
  );
};

export default Support;
