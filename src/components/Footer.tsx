import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  YoutubeIcon, 
  TiktokIcon, 
  DiscordIcon, 
  PinterestIcon 
} from './Icons';
import {
  FooterWrapper,
  FooterContent,
  FooterTop,
  FooterSection,
  SocialSection,
  SocialLinks,
  NewsletterSection,
  NewsletterForm,
  FooterBottom,
  Copyright,
  LegalLinks,
  ContactInfo
} from '../styles/components/FooterStyles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <h3>Company</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Customer Service</h3>
            <ul>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            </ul>
          </FooterSection>
          
          <ContactInfo>
            <h3>Contact Information</h3>
            <p><strong>The Williams Collection Inc.</strong></p>
            <p>E 2ND ST 5830</p>
            <p>Casper, WY 82609</p>
            <p>United States</p>
            <p>
              Email: <a href="mailto:ops@sapienta.vc">support@willcol.com</a>
            </p>
            <p>
              Phone: <a href="tel:+18443293900">+1 844 329 3900</a>
            </p>
          </ContactInfo>
        </FooterTop>
        
        <FooterBottom>
          <Copyright>
            Copyright © 2025 The Williams Collection Inc. All rights reserved.
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;