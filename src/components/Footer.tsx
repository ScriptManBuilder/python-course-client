import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterWrapper,
  FooterContent,
  FooterMain,
  FooterSection,
  MoreAboutSection,
  PromoCards,
  PromoCard,
  PromoCardContent,
  FooterBottom,
  Copyright
} from '../styles/components/FooterStyles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterMain>
          <FooterSection>
            <h3>Pages</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Help</h3>
            <ul>
              <li><Link to="/support">FAQ</Link></li>
              <li><Link to="/return-policy">Returns Policy</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/cart">Orders</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>My Account</h3>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </FooterSection>

          <MoreAboutSection>
            <h3>More About WILLCOL.COM</h3>
            <PromoCards>
              <PromoCard href="/products">
                <img src="/images/fot1.jpg" alt="Premium Products" />
                <PromoCardContent>
                  <h4>Premium Products</h4>
                  <p>Explore Our Collection</p>
                </PromoCardContent>
              </PromoCard>

              <PromoCard href="/about">
                <img src="/images/fot2.jpg" alt="About Us" />
                <PromoCardContent>
                  <h4>About Us</h4>
                  <p>Our Story & Mission</p>
                </PromoCardContent>
              </PromoCard>

              <PromoCard href="/support">
                <img src="/images/fot3.jpg" alt="Support" />
                <PromoCardContent>
                  <h4>Support</h4>
                  <p>24/7 Customer Service</p>
                </PromoCardContent>
              </PromoCard>
            </PromoCards>
          </MoreAboutSection>
        </FooterMain>

        <FooterBottom>
          <Copyright>
            Copyright  2025 The Williams Collection Inc. All rights reserved. | Premium Headphones & Audio Equipment
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
